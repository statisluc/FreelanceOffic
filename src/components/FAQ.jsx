import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function FAQclick({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 hover:bg-gray-50 transition">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4"
      >
        <span className="text-left font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && <div className="px-4 pb-4 text-gray-700">{answer}</div>}
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "1) What do you charge based on?",
      a: (
        <>
          I charge based on time, effort, and quality put into the project.
          Please see my pricing page{" "}
          <Link to={"/Pricing"} className="text-blue-600 hover:underline">
            {" "}
            here
          </Link>
          .{" "}
        </>
      ),
    },
    {
      q: "2) Can we negotiate?",
      a: (
        <>
          I am more than willing to work a price out with any of my clients.
          Negotiations are not possible upon website completion or after a price
          as been agreed upon. Please{" "}
          <Link to={"/Contact"} className="text-blue-600 hover:underline">
            {" "}
            contact me
          </Link>{" "}
          for any further inquiries on this matter.
        </>
      ),
    },
    {
      q: "3) What if I want my website to look a specific way?",
      a: "All of this can be discussed upon our first meeting. Please come prepared with all your ideas ready - I charge for major revisions if work has already begun.",
      //a: "I have video conference consultation calls where we can discuss the specifics of the website design and layout. Every new client gets a free 30 minutes. After that, these are $15 per hour. Rate is calculated by total time expended. Additional consultation time is billed at $15/hour in 30-minute increments, and paid upfront before continuing our session. You will always be reminded at the 25 minute mark.",
    },
    {
      q: "4) I hate this website/I don't need a website anymore. Can I get my money back?",
      a: "Due to the custom nature of my work, all sales are final, and I cannot offer full refunds after work has begun. Partial refunds may be considered at my discretion depending on progress and circumstances.",
    },
    {
      q: "5) I found a bug in the website! What can I do?",
      a: (
        <>
          Bugs are common and part of the software development cycle. For every
          website I make, I offer a 2 week warranty from date of deployment.
          This is your opportunity to "break" the website and report to me your
          findings. Any bug found <strong>after</strong> these two weeks can be
          resolved by me for $30 per each bug, or $25 per hour of work,
          depending on scope and complexity of the issue.
          <div></div>
          <i>
            Note: Each website undergoes extensive testing not just by me but
            also may be reviewed by additional testers. This ensures the site is
            thoroughly checked from multiple perspectives.{" "}
          </i>
        </>
      ),
    },
    {
      q: "6) How do you make your websites?",
      a: " My websites are always made with ReactJS (HTML, Tailwind CSS, and JavaScript). For E-commernce websites, I may use an extension like Stripe or Shopify for checkout pages. I do not work with Framer, Wix, Google Sites, unless certain circumstances. Implementation of backend (like for contact pages and checkout pages) varies. BYOD (Bring Your Own Domain) is accepted.",
    },
    {
      q: " 7) I already have another website that I want tweaked. Can you edit it for me?",
      a: " I make all my websites from scratch. I can use assets from your previous website by eyeballing, but prefer to not modify someone else's work at this moment. If we're talking about a minor change, contact me and I can see what I can do for you. Rarely will I reformat an entire website, only parts at most.",
    },
    {
      q: "8) What websites are you not willing to work on?",
      a: "I am very transparent if there is something I cannot do, or will take me longer to do.",
    },
    {
      q: "9) How long will it take for you to make a website?",
      a: "All my websites are handmade (ReactJS). I will always communicate and be transparent with my clients. Please expect two weeks minimum, additional time depending on scope.",
    },
    {
      q: "10) How do you accept payments?",
      a: (
        <>
          I only take payments via PayPal, Cashapp, and Venmo. I take 60% of the
          money upfront, the remaining 40% after the job is finished. Creation
          of website only begins after upfront payment is made. Ownership of
          website is only granted after full payment. Until full payment is
          made, the website excluding assets and branding remains my
          intellectual property, and may be reformatted to fit a website of
          another client.{" "}
        </>
      ),
    },
    {
      q: "11) Do you work on/develop mobile apps?",
      a: "iOS apps coming soon. Android apps following.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-start items-center text-start pt-24 bg-gradient-to-br from-pink-500 to-orange-500">
        <Card className="max-w-[1300px] text-start">
          <h1 className="font-rubik text-5xl">
            Frequently Asked Questions (FAQ)
          </h1>
        </Card>

        <Card className="max-w-[1300px] text-start mt-4 mb-8">
          {faqs.map(({ q, a }, i) => (
            <FAQclick key={i} question={q} answer={a} />
          ))}
        </Card>
      </div>
    </>
  );
}

export default FAQ;
