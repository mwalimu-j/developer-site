// src/components/HeroSection.tsx
import React, { useState } from 'react';

interface HeroProps {
  section: string;
  onSectionChange: (section: string) => void;
}

const HeroSection: React.FC<HeroProps> = ({ section, onSectionChange }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-96 p-8 bg-gray-100 text-gray-800">
      {section ? (
        <div className="text-center max-w-xl">
          <button
            className="text-gray-600 hover:text-blue-600 mb-4"
            onClick={() => onSectionChange('')}
          >
            ← Back
          </button>
          <h1 className="text-4xl font-bold mb-4">{section}</h1>
          <p className="mt-2 text-lg">
            Welcome to the {section} section! Here, I share insights into my work as a web developer.
          </p>
          <p className="mt-4 text-lg">
            I specialize in creating responsive, engaging, and user-friendly websites. My expertise spans front-end development, UX/UI design, and ensuring optimal performance and accessibility.
          </p>

          {/* Read More Button */}
          {!showMore ? (
            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              onClick={() => setShowMore(true)}
            >
              Read More
            </button>
          ) : (
            <div className="mt-4 text-lg">
              <p>
                With a strong foundation in modern JavaScript frameworks like React and experience in TypeScript, I build robust applications that offer smooth interactions and adapt seamlessly across devices. I’m proficient in CSS frameworks like Tailwind, which help me rapidly design sleek, responsive interfaces.
              </p>
              <p className="mt-2">
                My approach to web development emphasizes both aesthetics and functionality. I ensure that every website I create is optimized for performance, accessibility, and SEO to meet the highest standards and deliver a valuable user experience.
              </p>
              {/* Show Less Button */}
              <button
                className="mt-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
                onClick={() => setShowMore(false)}
              >
                
                Show Less
              </button>
            </div>
          )}
        </div>
      ) : (
        <h1 className="text-4xl font-bold">Welcome to home of website</h1>
      )}
    </div>
  );
};

export default HeroSection;
