import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// ---------------- MongoDB Atlas connection ----------------
const MONGO_URI = "mongodb+srv://vsowndharya2000_db_user:PDUJ5GD59QAgUHQB@cluster0.tua5tj5.mongodb.net/jobPortal?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("MongoDB Connected"));

// ------------------ Multer setup ------------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// ------------------ Schemas ------------------
const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  type: String,
  salary: String,
});
const Job = mongoose.model("Job", JobSchema);

const ApplicationSchema = new mongoose.Schema({
  jobId: String,
  name: String,
  email: String,
  resumePath: String,
  appliedAt: { type: Date, default: Date.now },
});
const Application = mongoose.model("Application", ApplicationSchema);

// ------------------ Routes ------------------

// Get jobs
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Post new job
app.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json({ message: "Job added" });
});

// Delete job
app.delete("/jobs/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
});

// Apply job
app.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, jobId } = req.body;
    const resumePath = req.file.path;

    const application = new Application({ name, email, jobId, resumePath });
    await application.save();

    res.json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Application failed" });
  }
});

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
