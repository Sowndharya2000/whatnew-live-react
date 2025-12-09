import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Discovery.css";
import Header2 from "../components/Header2";

export default function Career() {
 const defaultJobs = [
  { id: 1, title: "Frontend Developer", description: "React JS", location: "Remote", type: "Full-time", salary: "₹6-8 LPA" },
  { id: 2, title: "Backend Developer", description: "Node.js & MongoDB", location: "Bangalore", type: "Full-time", salary: "₹7-10 LPA" },
  { id: 3, title: "UI/UX Designer", description: "Figma & Adobe XD", location: "Chennai", type: "Part-time", salary: "₹3-5 LPA" },
  { id: 4, title: "DevOps Engineer", description: "AWS & CI/CD", location: "Remote", type: "Full-time", salary: "₹8-12 LPA" },
  { id: 5, title: "Product Manager", description: "Agile & Scrum", location: "Mumbai", type: "Full-time", salary: "₹12-15 LPA" },
  { id: 6, title: "QA Engineer", description: "Manual & Automation", location: "Remote", type: "Full-time", salary: "₹5-7 LPA" },
  { id: 7, title: "Marketing Specialist", description: "SEO & Social Media", location: "Delhi", type: "Part-time", salary: "₹4-6 LPA" },
  { id: 8, title: "Data Analyst", description: "Python & SQL", location: "Remote", type: "Full-time", salary: "₹6-9 LPA" },
  { id: 9, title: "Mobile Developer", description: "React Native / Flutter", location: "Hyderabad", type: "Full-time", salary: "₹7-11 LPA" },
  { id: 10, title: "Content Writer", description: "Technical & Creative", location: "Remote", type: "Part-time", salary: "₹3-5 LPA" },
];


  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
    salary: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  useEffect(() => {
    axios.get("http://localhost:5001/jobs")
      .then(res => setJobs(res.data.length > 0 ? res.data : defaultJobs))
      .catch(() => setJobs(defaultJobs));
  }, []);

  // ----------------- APPLY JOB -----------------
  const handleApply = async (job) => {
    if (!resume) return alert("Please upload a resume first!");
    if (!applicantName || !applicantEmail) return alert("Please enter your name and email!");

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("name", applicantName);
    formData.append("email", applicantEmail);
    formData.append("jobId", job._id || job.id);

    try {
      await axios.post("http://localhost:5001/apply", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert(`Applied to ${job.title} successfully!`);
      setSelectedJob(null);
      setResume(null);
      setApplicantName("");
      setApplicantEmail("");
    } catch (err) {
      console.error(err);
      alert("Application failed. Try again later.");
    }
  };

  // ----------------- POST NEW JOB -----------------
  const handleNewJobChange = (e) =>
    setNewJob({ ...newJob, [e.target.name]: e.target.value });

  const handlePostJob = () => {
    if (!newJob.title || !newJob.description) return alert("Please fill all fields!");

    axios.post("http://localhost:5001/jobs", newJob)
      .then(() => {
        alert("Job Posted Successfully!");
        setNewJob({ title: "", description: "", location: "", type: "", salary: "" });
        axios.get("http://localhost:5001/jobs").then(res => {
          setJobs(res.data);
          setCurrentPage(Math.ceil(res.data.length / jobsPerPage));
        });
      })
      .catch(() => alert("Backend offline — job added locally (not saved)."));
  };

  // ----------------- DELETE JOB -----------------
  const handleDeleteJob = (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    axios.delete(`http://localhost:5001/jobs/${id}`)
      .then(() => {
        alert("Job deleted successfully");
        axios.get("http://localhost:5001/jobs").then(res => setJobs(res.data));
      })
      .catch(() => alert("Backend offline — cannot delete job."));
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <div className="career-container">
      <Header2 />
      <h2 className="career-title">Job</h2>

      {/* JOB LIST */}
      <div className="job-list">
        {currentJobs.map(job => (
          <div className="job-card" key={job._id || job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Salary / Package:</strong> {job.salary}</p>

            <button onClick={() => setSelectedJob(job)}>Apply Now</button>
            {job._id && <button className="delete-btn" onClick={() => handleDeleteJob(job._id)}>Delete</button>}
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* APPLY FORM */}
      {selectedJob && (
        <div className="apply-form">
          <h3>Apply for: {selectedJob.title}</h3>
          <p><strong>Salary:</strong> {selectedJob.salary}</p>

          <input
            type="text"
            placeholder="Your Name"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={applicantEmail}
            onChange={(e) => setApplicantEmail(e.target.value)}
          />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
          />

          <button onClick={() => handleApply(selectedJob)}>Submit Application</button>
          <button className="cancel-btn" onClick={() => setSelectedJob(null)}>Cancel</button>
        </div>
      )}

      {/* POST JOB FORM */}
      <div className="post-job-form">
        <h3>Post a New Job</h3>
        <input type="text" name="title" placeholder="Job Title" value={newJob.title} onChange={handleNewJobChange} />
        <textarea name="description" placeholder="Job Description" value={newJob.description} onChange={handleNewJobChange}></textarea>
        <input type="text" name="location" placeholder="Location" value={newJob.location} onChange={handleNewJobChange} />
        <input type="text" name="type" placeholder="Job Type" value={newJob.type} onChange={handleNewJobChange} />
        <input type="text" name="salary" placeholder="Salary / Package" value={newJob.salary} onChange={handleNewJobChange} />
        <button onClick={handlePostJob}>Post Job</button>
      </div>
    </div>
  );
}
