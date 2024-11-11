import React from "react";

const Contact: React.FC = () => (
  <section className="p-8 bg-blue-600 text-white" id="contact">
    <h2 className="text-2xl font-semibold text-center">Contact Me</h2>
    <p className="mt-4 text-center">Feel free to reach out to discuss your project.</p>
    <div className="flex flex-col items-center mt-4">
      <p>Phone: <a href="tel:+0700598317" className="underline">0700598317</a></p>
      <p>Email: <a href="mailto:smwajo2212@ueab.ac.ke" className="underline">smwajo2212@ueab.ac.ke</a></p>
      <a
        href="https://wa.me/0700598317"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-white text-blue-600 py-2 px-4 rounded"
      >
        Message on WhatsApp
      </a>
    </div>
  </section>
);

export default Contact;
