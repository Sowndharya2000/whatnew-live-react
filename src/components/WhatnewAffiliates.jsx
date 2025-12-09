import React, { useState } from "react";
import "./Whatnew.css";

const faqs = [
  {
    question: "Who Can Apply?",
    answer:
      "All Affiliates are required to have an account on impact.com and adhere to their usage standards. Each application undergoes a personalized review to assess alignment with WhatNew.",
  },
  {
    question: "How long does an affiliate tracking cookie last?",
    answer:
      "Our tracking cookies last 3 days, so if a user clicks your affiliate link, you’ll earn credit for all sales they make within 72 hours.",
  },
  {
    question: "How Are Referrals Tracked?",
    answer:
      "Upon acceptance into WhatNew Affiliates, you will receive access to our third-party affiliate software where you can create and manage your affiliate referral links. When educating your audience about WhatNew, always include your affiliate referral links. Our tracking cookie window is 3 days, which means your referred user will have 72 hours from time they click your affiliate link for their purchases to be eligible for commission. Each time they click that link the 72 hour window will begin again!.",
  },
  {
    question: "How Do I Get Paid?",
    answer:
      "WhatNew Affiliates is powered by impact.com. Once your account is set up, click the three dots at the bottom left of the homepage and go to Settings. Scroll down to Finance > Bank Account to add your details. All payouts will be sent via Impact directly to your bank.",
  },
  {
    question: "Can I join if I live outside of the US?",
    answer:
      "Yes! If you live outside the US, you can join Whatnew Affiliates. Note we currently offer our contract in USD so there may be exchange fees upon payout depending on the location of your bank. Impact also requires all international affiliates upload a W-8BEN or W-8BEN-E prior to their first payout. Learn more about this policy here.",
  },
  {
    question: "I was accepted! What do I do now?",
    answer:
      "Congrats! Create links and share them with your followers so you can start earning. Check out our link generation overview to learn more.",
  },

{
    question: "Other questions?",
    answer:
      "Get In Touch With Us By Submitting A Help Request.",
  },

];

const BoxColorExample = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      {/* ===== First Section ===== */}
      <div className="first">
        {/* Left side text */}
        <div className="text-box">
          <h2>WhatNew Affiliates</h2>
          <p>
            Want to get paid to share the app you already love?
            <br />
            <br />
            Whether you’re a content creator, run an online community, or have a
            website, blog or newsletter — you can now join WhatNew Affiliates!
            <br />
            <br />
            Be a part of the future of shopping. Only on WhatNew.
          </p>
        </div>

        {/* Right side image */}
        <div className="image-box">
          <img src="assets/img1.jpg" alt="Colorful Box Example" />
        </div>
      </div>

      {/* ===== Second Section ===== */}
      <div className="section">
        <h2>What is WhatNew?</h2>
        <p>
          WhatNew is the largest live shopping platform in North America and
          Europe—where you can buy, sell, and discover products you love.
          Explore countless categories and uncover rare, unique finds, from
          sports cards and collectibles to comics, Pokémon, fashion, beauty, and
          more!
        </p>
      </div>

      {/* ===== Two-Row Grid 1 ===== */}
      <div className="two-row-grid">
        <div className="grid-item">
          <img src="assets/learn.jpg" alt="Feature 1" />
          <h3>Learn More & Apply</h3>
          <p>
            Apply directly here to WhatNew Affiliates, powered by Impact.com.
            Set up an account and start earning right away!
          </p>
        </div>

        <div className="grid-item">
          <img src="assets/links.jpg" alt="Feature 2" />
          <h3>Generate Links</h3>
          <p>
            Create links to WhatNew products, shows, searches and more. You can
            make links on Impact.com, from Impact.com’s app, or directly on
            WhatNew’s website.
          </p>
        </div>
      </div>

      {/* ===== Two-Row Grid 2 ===== */}
      <div className="two-row-grid">
        <div className="grid-item">
          <img src="assets/download-17.png" alt="Feature 3" />
          <h3>Create & Share Content</h3>
          <p>Make engaging content so users will click through your link!</p>
        </div>

        <div className="grid-item">
          <img src="assets/img3.jpg" alt="Feature 4" />
          <h3>Earn Cash</h3>
          <p>
            Earn money when anyone clicks on your affiliate link and purchases
            within the 3-day window!
          </p>
        </div>
      </div>

      {/* ===== FAQ Section ===== */}
      <div className="faq-container">
        <h2>FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeFAQ === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
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
    </>
  );
};

export default BoxColorExample;
