import React, { useState, useEffect } from "react";
import "./About.css";



const DEFAULT_IMAGES = [
  "https://www.whatnot.com/cdn/assets/e2a7c239974ab284/_next/static/media/OurHome-2.58efe0b8.png",
  "https://www.whatnot.com/cdn/assets/e2a7c239974ab284/_next/static/media/OurHome-3.43648767.png",
  "https://www.whatnot.com/cdn/assets/e2a7c239974ab284/_next/static/media/OurHome-1.a19c814c.png",
];

export function StackingCards({ images = DEFAULT_IMAGES }) {
  const imgs = Array.from({ length: 3 }).map(
    (_, i) => images[i] || DEFAULT_IMAGES[i]
  );

  return (
    <div className="wrap">
      <div className=" wrap-cards">
        {imgs.map((src, i) => (
          <article
            className={`card card-${i + 1}`}
            key={i}
            aria-label={`card-${i + 1}`}
          >
            <div
              className="cards-image"
              style={{ backgroundImage: `url(${src})` }}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

// ===== Text Carousel Component =====
const CarouselText = () => {
  const slides = [
    {
      title: "Thehustle.Co",
      text: "It brings together like-minded people who can chat and geek-out in real time.",
    },
    {
      title: "Dot.La",
      text: "It's probably one of the fastest growing marketplaces we've ever seen.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-text-container">
      <div className="carousel-slide">
        <h2 className="carousel-title">{slides[currentIndex].title}</h2>
        <p className="carousel-description">{slides[currentIndex].text}</p>
      </div>
    </div>
  );
};

// ===== About Page =====
const About = () => {
  const investorImages = [
    "/assets/partner.png",
    "/assets/partner-y.png",
    "/assets/partner-x.png",
    "/assets/operator.png",
    "/assets/partner 1.png",
    "/assets/partne r2.png",
    "/assets/partner3.png",
    "/assets/partner4.png",
  ];

  return (
    <div className="about-container">
      {/* About Section */}
      <div className="divbox-container">
        <div className="divbox">
          <h2>About Us</h2>
          <p>
            We aim to enable anyone to turn their passion into a business &
            bring people together through commerce.
          </p>
        </div>

        <div className="divbox-image">
          <img src="/assets/Hero5.png" alt="About Us" />
        </div>
      </div>

      {/* Investors Section */}
      <div className="imagegrid-section">
        <h2 className="section-heading">Our Investors</h2>
        <div className="image-grid">
          {investorImages.map((img, index) => (
            <div key={index} className="image-card">
              <img src={img} alt={`Investor ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>


      {/* Text Carousel */}
      <CarouselText />



<div class="stacking-header">
  <h2>Our Home</h2>
</div>
        {/* Stacking Cards Section */}
      <StackingCards />
    </div>
  );
};

export default About;
