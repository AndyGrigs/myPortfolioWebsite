// Contacts.tsx
import React from "react";

const Contacts = () => {
  return (
    <section id="contacts" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex flex-wrap justify-center items-center text-left gap-8 mb-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-lg mb-2">Email Me</h3>
            <p>
              <a
                href="mailto:andygrigs88@gmail.com"
                className="text-blue-500 hover:underline"
              >
                andygrigs88@gmail.com
              </a>
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-lg mb-2">Call Me</h3>
            <p>
              <a
                href="tel:+49015154781067"
                className="text-blue-500 hover:underline"
              >
                +49 01515 4781067
              </a>
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-lg mb-2">Follow Me</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/andygrigs"
                className="text-blue-500 hover:underline mr-4"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AndyGrigs"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
        <form action="#" method="POST" className="max-w-xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
