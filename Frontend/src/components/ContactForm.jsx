import React from "react";
import msgimg from "../assets/mgBox.png";

const ContactForm = () => {
  return (
    <section className="bg-[#00031D] text-white p-10">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm tracking-widest">Contact</p>
        <h1 className="text-4xl font-bold">Have a Project in mind?</h1>
        <p className="text-lg">Let's build something together!</p>
        <p className="mt-1 text-sm mb-12">-... ..- ... .. -. . ... ...</p>

        <form className="bg-[#2e3b669a] p-8 rounded-lg shadow-lg h-[500px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="xxx@email.com"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm mb-2">Subject</label>
              <input
                type="text"
                placeholder="Requesting Demo"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6 relative">
            <label className="block text-sm mb-2">Your Message</label>
            <textarea
              placeholder="Your Message..."
              rows={8}
              className="w-full border-[1px] bg-transparent p-3 overflow-hidden active:border-none focus-visible:"
              required
            />
            {/* Send Button */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
