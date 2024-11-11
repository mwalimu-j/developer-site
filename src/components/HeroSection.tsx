import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-sky-400 text-white text-center py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-4">Welcome to Our Website Development Services</h1>
        <p className="text-lg mb-8">
          We specialize in creating responsive and marketable websites using the latest
          technologies and industry best practices. From design to deployment, we ensure that
          your website is built with the most qualified software, tailored to your business needs.
        </p>
        <a
          href="#services"
          className="bg-white text-sky-500 px-6 py-3 rounded-full text-lg hover:bg-sky-500 hover:text-white transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
