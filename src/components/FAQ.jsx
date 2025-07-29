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
      q: "What do you charge based on?",
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
      q: "Can we negotiate?",
      a: (
        <>
          Unless we're talking about buying or selling cars, negotiation is
          limited! However, I am always willing to help my clients. Sure, we
          might be able to talk a few numbers, but most of the prices I give you
          (and the prices seen in our PriceChecker) are firm! Please{" "}
          <Link to={"/Contact"} className="text-blue-600 hover:underline">
            {" "}
            contact me
          </Link>{" "}
          for any further inquiries on this matter.
        </>
      ),
    },
    { q: "", a: "" },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start items-center text-start pt-24">
        <Card className="max-w-[1300px] text-start">
          <h1>Frequently Asked Questions (FAQ)</h1>
        </Card>

        <Card className="max-w-[1300px] text-start mt-4">
          {faqs.map(({ q, a }, i) => (
            <FAQclick key={i} question={q} answer={a} />
          ))}
        </Card>
      </div>
    </>
  );
}

export default FAQ;

// 1) What do you charge based on?
// I charge based on time, effort, and quality put into the project. Please see my pricing page HERE_link.
// 2) What if I want my website to look a specific way?
// I have video conference consultation calls where we can discuss the specifics of the website design and layout. Every new client gets a free 30 minutes. After that, these are
// $15 per hour, with a $5 down payment to start the meeting. Upon receiving this payment, we can schedule the minutes or hours of the meeting
// and how much the total cost will be (subtract the $5 down payment). Failure to make the $5 deposit will result in no appointment being reached, and failure to pay for the meeting will result in termination of our partnership.
// 3) I found a bug in the website! What can I do?
// Bugs are common and part of the software development cycle. For every website I make, I offer a 2 week warranty from date of deploymnet. This is your opportunity to "break" the website and report to me your findings. Any bug found after these two weeks can be resolved by me for $30, or $25 per hour of work, whichever greater.
// 4) I hate this website/I don't need a website anymore. Can I get my money back?
// Can I get my time back? As much as it may be inconvenient, all sales are final. The time and energy I invest into these websites cannot be refunded, hence I cannot offer refunds to anyone who has already initiated a website using my services. In extreme cases I may offer an exception, but this is not to be considered.
// 5) Can we negotiate?
//  Unless we're buying or selling cars, there is limited negotiation. We might be able to talk a few numbers, but if I charge you $275 and you want me to bring it down to $200, I expect you to have a really good reason/another offer coming my way
// 6) How do you make your websites?
// My websites are always made with ReactJS (HTML, Tailwind CSS, and JavaScript). For E-commernce websites, I may use an extension like Stripe or Shopify- but that is the only time I will be using anything external like that. I don't use Framer, Wix, Google Sites, and refuse to. Backend (like for contact pages and checkout pages) varies.
// 7) Are you willing to make a website in Wix, Google Sites, Framer, etc to save on costs for the customer?
// No.
// 8) I already have another website that I want tweaked. Can you edit it for me?
// I make all my websites from scratch. I can use assets from your previous website by eyeballing, but I do not touch someone else's work. If we're talking about a minor change, contact me and I can see what I can do for you.
// 9) What websites are you not willing to work on?
// I'm willing to tackle anything you throw on me. I am very transparent if there is something I cannot do, or will take me longer to do. Very rarely do I straight up refuse to make a website for someone, regardless of the subject matter.
// 10) How long will it take for you to make a website?
// All my websites are handmade (ReactJS). I do not use any drag and drop software or cheats. I also try to do a lot of bug testing and checking myself. Furthermore, at the time, I am a student on top of working two jobs with other side gigs. Your website will not be done in two or three days or not even a week. Depending on the complexity of the website, or what you want, I will give you a timeframe. I will always communicate and be transparent with my clients. If something will take me a whole month, I will tell you it will take me a whole month.
// 11) How do you accept payments?
// I only take payments via PayPal, Cashapp, Venmo, and physical cash (local meet-up only- DO NOT MAIL ME CASH). Only those who I personally know may send me money on Zelle. I take 60% of the money upfront, the remaining 40% after the job is finished (but before transferring ownership of the site). This is simply to protect myself and my clients, and establish a mutual trust. Failure to make an upfront payment will lead to me not working on your site at all. Failure to make the second half of payment denies you any rights to the website, and I am subjected to giving it to someone else or do what I please with it. There will be a formal contract EVERY client must sign before any kind of work begins. This contract will showcase the service level agreement I will have with my clients.
