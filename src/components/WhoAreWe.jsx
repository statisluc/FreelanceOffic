import React from "react";

function WhoAreWe() {
  return (
    <>
      <div className="font-serif">
        <h1 className="text-3xl text-black font-bold flex items-center justify-center">
          Just Got A Whole Lot Easier...
        </h1>

        <h1 className="text-2xl mt-100 px-42 font-serif">Who Are We?</h1>

        <hr className="my-4 border-gray-300" />

        <div className="flex flex-col mx-auto max-w-4xl">
          <div className="flex flex-row mt-24">
            <h1 className=" text-xl font-arial text-black">VDP Solutions</h1>
            <h1 className="mt-1 text-md ml-auto text-blue-500 cursor-pointer">
              121 Languages
            </h1>
          </div>

          <hr className="w-225 my-4 border-gray-300" />
          <div className="flex flex-row">
            <p className="cursor-pointer underline underline-offset-8 decoration-2">
              Article
            </p>
            <p className="px-4 cursor-pointer text-blue-500">Talk</p>
            <div className="flex flex-row ml-auto gap-5">
              <p className=" cursor-pointer underline underline-offset-8 decoration-2">
                Read
              </p>
              <p className=" cursor-pointer text-blue-500">View Source</p>
              <p className=" cursor-pointer text-blue-500">View History</p>
              <p className=" cursor-pointer">Tools</p>
            </div>
          </div>
          <hr className="-translate-y-1.5 w-225 my-2 border-gray-300" />
          <p className="text-sm">From Eleassar (Alex), the CEO</p>
          <div className="my-8 flex flex-col md:flex-row">
            <div className="flex flex-col">
              <p>VDP Solutions. The catalyst to your success.</p>
              <p className="mt-3">
                <span className="font-bold">VDP Solutions</span> started with
                one simple idea - help small businesses promote themselves with
                websites that are actually{" "}
                <span className="text-blue-600">theirs.</span> We work with you
                - yes <span className="text-blue-600">YOU</span> - to ensure we
                create a user interface that not only we would be happy with,
                but more importantly, your customers!
              </p>
              <p className="mt-3">
                Have you ever tried using a website and thought to yourself "Aw
                man this website <span className="text-blue-600">stinks!</span>
                ". Well one thing is for sure - that website was{" "}
                <span className="text-blue-600">NOT</span> from us. Here at VDP
                Solutions, we make sure that we only deliver top of the line
                products that even the dead would have to rise from the ground
                to check it out. We won't let you leave our sights with a
                mediocre website riddled with bugs, random visible HTML tags,
                not formatted for mobile, none of
                <span className="text-blue-600"> that!</span> Check our{" "}
                <span className="text-blue-600">FAQs</span> for more
                information!
              </p>
              <p className="mt-3">
                <span className="font-bold">Alexander (EF) Valdez</span>, CEO
                and Lead Designer / Programmer, is the guy who will show up with
                a pen + notebook and ask{" "}
                <span className="text-blue-600">way</span> too many questions
                about you, your shop, your customers, your goal, and your social
                security number. His passion in delivering top of the line
                software solutions - whether its a whole website, part of a
                website, creating an application, mini-games, portfolio pages,
                and whatever else within our scope - is the coal that powers
                this VDP train (cheesy, we know).
              </p>
              <p className="mt-3">
                We stay small on <span className="text-blue-600">purpose.</span>{" "}
                That means your project isn't on a queue or on hold - it's on
                our desk, staring at us, and we're staring at it{" "}
                <span className="text-blue-600">right back.</span> We build with
                you so your site looks good, loads fast, and actually helps you
                sell yourself.{" "}
                <span className="text-blue-600">
                  So what are you waiting for!?
                </span>{" "}
                Still not convinced? Continue reading on!
              </p>
            </div>
            <div className="flex flex-col ml-auto px-12 items-center">
              <p className="flex items-center align-center">
                VDP Software Solutions
              </p>
              <div className="border px-3 bg-gray-200 max-w-70">
                <img
                  className="max-w-60 mx-auto"
                  src="logo.png"
                  alt="company logo"
                />
                <p className="flex flex-col text-center">
                  Logo Used Since 2025
                </p>

                <div className="py-4 grid md:grid-cols-2 gap-4">
                  <p className="font-bold">Company: </p>
                  <p>VDP Solutions</p>
                  <p className="font-bold">CEO:</p>
                  <p>EFAV</p>
                  <p className="font-bold">Founded:</p>
                  <p>September 13, 2025</p>
                  <p className="font-bold">Products:</p>
                  <p>Software, Websites, Apps, Jokes</p>
                  <p className="font-bold">Number of Employees:</p>
                  <p>4</p>
                  <p className="font-bold">Website:</p>
                  <p className="text-sm underline text-blue-600 hover:text-blue-800">
                    vdpsolutions.tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
