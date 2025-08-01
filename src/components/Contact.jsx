import React, { useState, useRef } from "react";
import Navbar from "./Navbar.jsx";
import emailjs from "@emailjs/nodejs";
import Card from "./Card";

function AutoTextGrow(props) {
  const ref = useRef();

  const handleInput = () => {
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  };
  return (
    <textarea
      {...props}
      ref={ref}
      onInput={handleInput}
      rows={1}
      className="input-brown justify-end pt-4 text-2xl"
    />
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service", "template", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          console.log("Email Success");
          e.target.reset();
          setSent(true);
          setTimeout(() => setSent(false), 5000);
          setIsSending(false);
        },
        (error) => {
          console.log("Email Failed", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start items-center text-center pt-24">
        <Card>
          <h1 className="text-5xl font-rubik">Contact Page</h1>
        </Card>

        <div className="flex flex-col space-y-6 max-w-md mx-auto mt-36 scale-200">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4 font-oswald text-white p-8 max-w-lg w-full"
          >
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="input-brown text-3xl"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-brown text-3xl"
              />
            </div>

            <textarea
              AutoTextGrow
              placeholder="What Can We Help You With?"
              className="input-brown text-3xl"
            />

            <button
              type="submit"
              disabled={isSending}
              className="bg-white text-black text-4xl font-rubik rounded-xl px-8 py-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-300"
            >
              Submit
            </button>
          </form>
          {/* <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-full bg-transparent focus:outline-none border-b-4 border-[#331a00] font-fascinate"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="border-b-4 border-[#331a00] font-fascinate"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="border-b-4 border-[#331a00] font-fascinate bg-[#331a00]"
            />
            <input
              type="submit"
              value={isSending ? "Sending..." : "Send"}
              disabled={isSending}
              className="bg-[#331a00] text-white font-bold px-6 py-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {/* <button
              type="submit"
              disabled={isSending}
              className="self-center w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px0 border-r-transparent border-b-[35px] border-b-brown-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            /> */}
          {/* </form>  */}
          {sent && (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-brown-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-slide">
              Message Sent ✅!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
