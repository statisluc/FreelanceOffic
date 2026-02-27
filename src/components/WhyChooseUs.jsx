import React from "react";
import Card from "./Card.jsx";
import GradientWrapper from "./GradientWrapper.jsx";

//make it so that onhover, when hovering over the cards in this section, change the color to the same gradient of the website theme. also add a thick shadow of white, and make it transition as well. nice and smooth, make it seem like you interacting with the website is bringing back its energy and spirit

function WhyChooseUs() {
  return (
    <>
      <div className="font-roboto-flex w-[700px] mx-auto ">
        <h1 className="py-24 text-3xl text-white font-bold flex items-center justify-center border border-bg-gradient-to-br from-pink-500 to-orange-500 hover:bluegradient border-10 ">
          Why Choose Us?
        </h1>
      </div>

      <div className="px-8 py-24 flex flex-col gap-24 text-gray-300 text-center font-roboto-flex">
        <Card className="bluegradient self-end w-[900px] hovergradient duration-300">
          {" "}
          {/*to-[#024363] */}
          <div className="flex flex-row">
            <div>
              <img src="house.png"></img>
            </div>
            <div>
              <p className="text-xs">"Be Taken Care Of"</p>
              <h1 className="text-2xl text-gray-300 flex items-center text-center justify-center font-roboto-flex">
                As a small company, we pride ourselves in the personal relations
                we have with our clients. I mean - we started out having
                meetings with our clients person to person, door to door! With
                being such a small business, we treat every client as a number
                one priority (unlike the bigger guys that can afford to forget
                about us).
              </h1>
            </div>
          </div>
        </Card>
        <Card className="bluegradient self-start w-[900px] hovergradient duration-300">
          <div className="flex flex-row">
            <div>
              <img className="object-contain" src="partner.png"></img>
            </div>
            <div>
              <p className="text-xs">“Feel Prioritized”</p>
              <h1 className="text-2xl text-gray-300">
                While you might be put on hold, or be given the run around, we
                work closely with you to ensure that the service we are
                delivering to you is satisfactory. We are very flexible -
                whether you want us to handle your entire website and
                maintenance on our end or just deliver a product to you- we are
                very clear and transparent on what we can or cannot do.
              </h1>
            </div>
          </div>
        </Card>
        <Card className="bluegradient self-end w-[900px] hovergradient duration-300">
          <div className="flex flex-row">
            <div>
              <img className="object-contain" src="crane.png"></img>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xs">"Be Unique"</p>
              <h1 className="text-2xl text-gray-300">
                We handcraft each website - no Framer, no Shopify, no Wix, none
                of that. Our freedom to build our software from scratch means
                whatever you want, we can get you. The ceiling is our
                imagination, not whatever limits these drag and drop “website
                creation” applications enforce.{" "}
              </h1>
            </div>
          </div>
        </Card>
        <Card className="bluegradient self-start w-[900px] hovergradient duration-300">
          <div className="flex flex-row">
            <div>
              <img className="object-contain" src="people.png"></img>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-xs">“Feel Confident”</p>
              <h1 className="text-2xl text-gray-300">
                Our team of software designers, network specialists, and
                back-end programmers are all certified in their roles - and we
                only hire from within the “family”. We stand as one, and
                together we stand by you.
              </h1>
            </div>
          </div>
        </Card>
        <Card className="bluegradient self-center mt-24 text-justify hovergradient duration-300">
          <p className="text-4xl self-center text-center">VDP Promises: </p>
          <div className="text-3xl text-gray-300 flex flex-col text-center gap-y-8 mt-4 py-8">
            <h1 className="transition-transform duration-200 ease-out hover:scale-102 hover:text-black">
              No runaround. You talk to the person doing the work{" "}
            </h1>
            <h1 className="transition-transform duration-200 ease-out hover:scale-102 hover:text-black">
              No lock in. The code, docs, and keys to the car are all yours
            </h1>
            <h1 className="transition-transform duration-200 ease-out hover:scale-102 hover:text-black">
              No ghosting. Need edits later? Something wrong with the website?
              We're right here
            </h1>
          </div>
        </Card>
      </div>
    </>
  );
}

export default WhyChooseUs;
