import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Home.css";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qompota",
        "template_95iekz2",
        form.current,
        "tkG-UJe02yYKmGQ-m"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Subscription successful! Thank you.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    // If user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".fade-in, .fade-up")
        .forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    // Observe ALL animated elements
    const elements = document.querySelectorAll(".fade-in, .fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>

      {/* ===== First Box ===== */}
      <div className="box-container fade-up">
        <div className="box-left">
          <h1 className="fade-up">The Live Shopping Marketplace</h1>
          <p className="fade-up">Shop, sell, and connect around the things you love.</p>
          <button className="fade-up">Shop Now</button>
        </div>

        <div className="box-right">
          <img className="fade-in" src="assets/Hero.png" alt="Live Shopping" />
        </div>
      </div>

      {/* ===== Second Box ===== */}
      <div className="image-left-section fade-up">
        <div className="image-column">
          <img className="fade-in" src="assets/Hero2.jpeg" alt="Live Shopping" />
        </div>

        <div className="content-column">
          <h1 className="fade-up">Join In the Fun</h1>
          <p className="fade-up">
            Take part in fast-paced auctions, flash sales, live show giveaways, and more.
          </p>

          <button className="fade-up">Shop Now</button>
        </div>
      </div>

      {/* ===== Third Box ===== */}
      <div className="third-box-container fade-up">
        <div className="third-box-right">
          <h1 className="fade-up">We've Got It All</h1>
          <p className="fade-up">
            Explore 250+ categories including fashion, sports cards, sneakers, and more.
          </p>
          <button className="fade-up">Shop Now</button>
        </div>

        <div className="third-box-left">
          <img className="fade-in" src="assets/c425.jpeg" alt="Shopping Items" />
        </div>
      </div>

      {/* ===== Fourth Box ===== */}
      <div className="fourth-box-container fade-up">
        <div className="fourth-box-left">
          <h1 className="fade-up">Find Incredible Deals</h1>
          <p className="fade-up">
            Discover deals on your favorite brands and specialty products.
          </p>
          <button className="fade-up">Shop Now</button>
        </div>

        <div className="fourth-box-right">
          <img className="fade-in" src="assets/images.png.png" alt="Deals" />
        </div>
      </div>

      {/* ===== Subscribe Section ===== */}
      <div className="subscribe-container fade-up">
        <h2 className="fade-up">Subscribe to Our Newsletter</h2>
        <p className="fade-up">Stay updated with the latest offers and live shopping events.</p>

        <form ref={form} onSubmit={sendEmail} className="subscribe-box fade-up">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="fade-up"
          />
          <button type="submit" className="fade-up">Subscribe</button>
        </form>
      </div>

    </div>
  );
};

export default Home;
