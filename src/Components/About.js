import React from "react";

function AboutPage() {
  const aboutContent = [
    "Our mission is to help travelers understand a new travel experience.",
    "We believe that travel can be transformative and bring people together.",
    "Our team of experts is dedicated to curating unique and authentic travel experiences.",
  ];

  return (
    <div className="container">
      <ul id="about-page">
        {aboutContent.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default AboutPage
