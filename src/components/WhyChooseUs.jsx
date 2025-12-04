import React from "react";
import Card from "./Card.jsx";

function WhyChooseUs() {
  return (
    <>
      <div className="font-roboto-flex w-[700px] mx-auto">
        <h1 className="py-24 text-3xl text-white font-bold flex items-center justify-center border border-blue-500 border-10">
          Why Choose Us?
        </h1>
      </div>

      <div className="px-8 py-24 flex flex-col gap-24 text-gray-300 text-center font-roboto-flex">
        <Card className="bluegradient self-end w-[900px]">
          {" "}
          {/*to-[#024363] */}
          <p className="text-xs">"Be Taken Care Of"</p>
          <h1 className="text-2xl text-gray-300 flex items-center text-center justify-center font-roboto-flex">
            As a small company, we pride ourselves in the personal relations we
            have with our clients. I mean - we started out having meetings with
            our clients person to person, door to door! With being such a small
            business, we treat every client as a number one priority (unlike the
            bigger guys that can afford to forget about us).
          </h1>
        </Card>
        <Card className="bluegradient self-start w-[900px]">
          <p className="text-xs">“Feel Prioritized”</p>
          <h1 className="text-2xl text-gray-300">
            While you might be put on hold, or be given the run around, we work
            closely with you to ensure that the service we are delivering to you
            is satisfactory. We are very flexible - whether you want us to
            handle your entire website and maintenance on our end or just
            deliver a product to you- we are very clear and transparent on what
            we can or cannot do.
          </h1>
        </Card>
        <Card className="bluegradient self-end w-[900px]">
          <p className="text-xs">"Be Unique"</p>
          <h1 className="text-2xl text-gray-300">
            We handcraft each website - no Framer, no Shopify, no Wix, none of
            that. Our freedom to build our software from scratch means whatever
            you want, we can get you. The ceiling is our imagination, not
            whatever limits these drag and drop “website creation” applications
            enforce.{" "}
          </h1>
        </Card>
        <Card className="bluegradient self-start w-[900px]">
          <p className="text-xs">“Feel Confident”</p>
          <h1 className="text-2xl text-gray-300">
            Our team of software designers, network specialists, and back-end
            programmers are all certified in their roles - and we only hire from
            within the “family”. We stand as one, and together we stand by you.
          </h1>
        </Card>
        <Card className="bluegradient self-center mt-24 text-justify ">
          <p className="text-4xl self-center text-center">VDP Promises: </p>
          <div className="text-3xl text-gray-300 flex flex-col gap-y-8 mt-4 py-8">
            <h1>-No runaround. You talk to the person doing the work </h1>
            <h1>
              -No lock in. The code, docs, and keys to the car are all yours
            </h1>
            <h1>
              -No ghosting. Need edits later? Something wrong with the website?
              We're right here
            </h1>
          </div>
        </Card>
      </div>
    </>
  );
}

export default WhyChooseUs;
