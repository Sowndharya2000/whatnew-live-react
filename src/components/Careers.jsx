import React, { useState, useEffect } from "react";
import "./career.css";

import Header2 from "../components/Header2";

export default function AboutUs() {
  /* FAQ Logic */
  const [activeFAQ, setActiveFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Why do we always listen to customers?",
      answer:
        "Listening to sellers and buyers helps us deeply understand their needs. By using WhatNew ourselves, we build empathy and continuously improve the platform.",
    },
    {
      question: "Why do we move uncomfortably fast?",
      answer:
        "We move fast because serving our community in the moment matters more than perfection. Speed allows us to deliver value exactly when users need it.",
    },
    {
      question: "What does prioritizing impact ruthlessly mean?",
      answer:
        "We focus only on the work that delivers the highest impact. Our priority is solving major pain points and helping sellers grow their businesses rapidly.",
    },
    {
      question: "What does owning everything and nothing mean?",
      answer:
        "When we take on a task, we own it fully until completion. Yet, we collaborate without ego—anyone can contribute to improve the outcome.",
    },
    {
      question: "Why do we set unreasonably high goals?",
      answer:
        "Ambitious goals push us to achieve extraordinary results. We aim high and work hard to turn big ideas into reality.",
    },
    {
      question: "Why do we provide extreme transparency?",
      answer:
        "Transparency helps every team member perform at their best. We openly share information, give honest feedback, and communicate both good and bad news.",
    },
    {
      question: "What does optimizing for upside mean?",
      answer:
        "We take calculated risks to explore new solutions, programs, and product experiences. We choose opportunities based on potential impact, even when risks exist.",
    },
    {
      question: "Why is team over ego important?",
      answer:
        "Success comes from working together. We prioritize collective achievements, support each other, and celebrate contributions without focusing on individual credit.",
    },
    {
      question: "What does 'figure it out' mean at WhatNew?",
      answer:
        "We face new challenges daily, many with no existing solution. We embrace the unknown and solve problems with creativity and determination.",
    },
    {
      question: "Why do we focus on deeply understanding why?",
      answer:
        "Clarity of purpose ensures meaningful work. Even when moving fast, we stay aware of the reason behind our efforts and adjust direction when needed.",
    },
    {
      question: "Why do we believe in having fun and being kind?",
      answer:
        "We grow together by fostering positivity, empathy, and strong relationships. We celebrate wins, support each other, and create a kind, uplifting environment.",
    },
  ];

  /* IntersectionObserver for fade-in / fade-up */
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in, .fade-up");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header2 />

      {/* HERO */}
      <div className="myDiv">
        <h2 className="fade-in">Building the future of commerce, together</h2>
      </div>

      {/* MISSION */}
      <section className="wn-mission">
        <div className="wn-container">
          <h1 className="wn-title fade-in">Our Mission</h1>
          <p className="wn-text fade-in">
            Enable anyone to turn their passion into a business and bring people together through commerce.
          </p>
        </div>

        {/* STATS */}
        <section className="wn-stats">
          <div className="wn-stats-inner">
            <div className="wn-cards">
              <article className="wn-card fade-up">
                <div className="wn-card-value">
                  ₹3<span className="wn-card-suffix">B</span>
                </div>
                <h3 className="wn-card-title">Livestream sales</h3>
                <p className="wn-card-meta">
                  WhatNew surpassed ₹3 billion in sales in <strong>2024</strong>.
                </p>
              </article>

              <article className="wn-card fade-up">
                <div className="wn-card-value">
                  175,000<span className="wn-card-suffix"> hrs/wk</span>
                </div>
                <h3 className="wn-card-title">Weekly hours</h3>
                <p className="wn-card-meta">
                  More than 175,000 hours hosted every week.
                </p>
              </article>

              <article className="wn-card fade-up">
                <div className="wn-card-value">
                  ₹1<span className="wn-card-suffix">M</span>
                </div>
                <h3 className="wn-card-title">Seller earnings</h3>
                <p className="wn-card-meta">
                  Top 500 sellers earn ₹1M annually.
                </p>
              </article>
            </div>
          </div>
        </section>
      </section>

      {/* COMMUNITY */}
      <section className="wn-community">
        <div className="wn-community-container">
          <div className="wn-left">
            <h2 className="wn-heading fade-in">
              What drives our mission? <span>Our community.</span>
            </h2>
            <p className="wn-desc fade-in">
              Our founders created WhatNew to be a trusted space where like-minded people can buy, sell,
              and connect over what they love.
            </p>
          </div>

          <div className="wn-right">
            {/* NOTE: use leading slash for public/assets */}
            <img className="fade-up" src="/assets/Group839.png" alt="Community" />
          </div>
        </div>
      </section>

      {/* FUTURE COMMERCE */}
      <section className="wn-future-commerce">
        <div className="wn-fc-container">
          <div className="wn-fc-left">
            <h2 className="wn-fc-heading fade-in">Defining the future of commerce doesn’t come easy</h2>
            <p className="wn-fc-desc fade-in">
              We're a high-performance team that moves fast to meet community expectations.
            </p>
            <button className="wn-fc-button fade-in">Learn Work About Here</button>
          </div>
          <div className="wn-fc-right">
            <img className="fade-up" src="/assets/group0.jpg" alt="Team" />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="faq1-container">
        <h2 className="fade-in">Frequently Asked Questions</h2>

        <div className="faq1-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq1-item fade-up ${activeFAQ === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq1-question">
                <h3>{faq.question}</h3>
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </div>

              {activeFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* QUOTE BLOCK */}
      <div className="quote-block">
        <div className="quote-media fade-up">
          {/* FIXED PATH: leading slash for public/assets */}
          <img src="/assets/cook.jpeg" alt="Courtney Cook" />
        </div>
        <div className="quote-content fade-in">
          <blockquote>
            “The principle that contributes most to our culture is team over ego.
            It’s how we’re able to scale while staying true to our mission.”
          </blockquote>
          <p className="quote-author">
            — <strong>Courtney Cook</strong>, VP, Commerce
          </p>
        </div>
      </div>

      <div className="cont fade-in">
        <h2>Our Interview Process</h2>
        <div className="grid-container">
          <div className="grid fade-up">
            <h2>Resume Review</h2>
            <p>This is the first step in the hiring process. After we review your resume, we’ll reach out if it looks like you might be a great fit at Whanew.</p>
          </div>
          <div className="grid fade-up">
            <h2>Initial Screen</h2>
            <p>The next step is speaking to someone on our team over the phone or via video call. We will learn more about your background and share more information on the role.</p>
          </div>
          <div className="grid fade-up">
            <h2>Second Round</h2>
            <p>During this round you will meet with a team member, typically the hiring manager for the role.</p>
          </div>
          <div className="grid fade-up">
            <h2>Skills Interview</h2>
            <p>You’ll meet with additional team members during this stage. Depending on the role, this may include a technical or coding section.</p>
          </div>
          <div className="grid fade-up">
            <h2>Final Round</h2>
            <p>This is the final interview stage, including a Cultural Principles interview to ensure our values are aligned.</p>
          </div>
          <div className="grid fade-up">
            <h2>Offer Letter</h2>
            <p>Congrats! You’ve made it this far. We will check your references and put together a formal offer letter.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
