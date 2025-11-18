import React from "react";

function WhoAreWe() {
  return (
    <>
      <div className="mt-200 h-screen font-serif">
        <h1 className="text-3xl text-black font-bold flex items-center justify-center -translate-y-40">
          Just Got A Whole Lot Easier...
        </h1>

        <h1 className="text-2xl mt-32 px-42 font-serif">Who Are We?</h1>

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
            <div clasName="">
              <p className="ml-auto cursor-pointer underline underline-offset-8 decoration-2">
                Read
              </p>
              <p className="justify-end cursor-pointer text-blue-500">
                View Source
              </p>
              <p className="justify-end cursor-pointer text-blue-500">
                View History
              </p>
              <p className="justify-end cursor-pointer">Tools</p>
            </div>
          </div>
          <hr className="-translate-y-1.5 w-225 my-2 border-gray-300" />
          <p className="text-xs">From Alexander, the CEO</p>
          <div className="my-8 grid">
            <p>This is just a test</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
