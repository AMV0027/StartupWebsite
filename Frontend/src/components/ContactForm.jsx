import React from "react";
import { IoIosSend } from "react-icons/io";

function LabelInput({ labelName, placeHolder, type, name }) {
  return (
    <div className="flex flex-col justify-start text-white w-full">
      <p className="font-normal">
        {labelName}
      </p>
      <input name={name} type={type} placeholder={placeHolder} className=" bg-transparent border-gray-600 border-b-2 mt-2" />
    </div>
  );
}
const ContactForm = () => {
  return (
    <section id="contact" className="bg-[#00031D] min-h-screen text-white p-10">
      <hr className=' w-full mb-12 border-blue-300 opacity-40' />
      <div className="max-w-4xl mx-auto">
        <p className="text-sm  md:text-lg tracking-widest">Contact</p>
        <h1 className="text-4xl font-bold">Have a Project in mind?</h1>
        <p className="text-lg">Let's build something together!</p>
        <p className="mt-1 text-sm mb-12">-... ..- ... .. -. . ... ...</p>

        <form action="" className="flex flex-col justify-start gap-6 bg-gray-400 shadow-inner rounded-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
          <div className="grid grid-cols-2 w-full gap-3">
            <LabelInput labelName="First name" placeHolder="John" name="First name" />
            <LabelInput labelName="Last name" placeHolder="Doe" name="Last name" />
            <LabelInput labelName="Email" placeHolder="xxxx@email.com" type="email" name="Email" />
            <LabelInput labelName="Subject" placeHolder="Requesting Demo" name="Subject" />
          </div>
          <textarea id="" name="Message" rows="8" placeholder="Your message..."
            className="bg-transparent border-[1px] border-gray-600 rounded-xl p-3 resize-none mt-2 "
          >
            Your Message ...
          </textarea>
        </form>
        <div className="flex flex-row justify-end">
          <button className="relative -top-16 right-6 rounded-full p-2 text-xl bg-blue-800">
            <IoIosSend />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
