import React, { useState, useRef } from "react";
import Navbar from "./Navbar.jsx";
import emailjs from "@emailjs/nodejs";
import Card from "./Card";

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
          <h1 className="text-5xl font-honk">Contact Page</h1>
        </Card>

        <p className="text-lg text-brown-500">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form text-3xl"
          >
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email </label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input
              type="submit"
              value={isSending ? "Sending..." : "Send"}
              disabled={isSending}
              className="bg-green-500 text-white font-bold px-6 py-2 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </form>
          {sent && (
            <p className="text-green-600 font-medium mt-2">
              Email Successfully Sent ✅
            </p>
          )}
        </p>
      </div>
    </>
  );
}

export default Contact;
