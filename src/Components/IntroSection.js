import React from "react";
import InviteBtn from "./InviteBtn";
import muckup from "../images/image-mockups.png";
import { Reveal } from "react-reveal";
import Zoom from"react-reveal/Zoom"

const IntroSection = () => {
  return (
    <section
      className=" intro-section  md:flex md:flex-row-reverse md:justify-between font-sans"
      id="home">
      <div className="intro-img md:mt-20 md:-mr-36">
       <Zoom>
       <img
          style={{ top: "-4.5rem" }}
          className=" absolute md:mt-16 md:-right-0 md:-mr-24"
          src={muckup}
          alt="mobile phone"></img>
       </Zoom>
      </div>
      <Reveal left>
        <div className=" text-center px-9 md:px-0 md:ml- md:text-left md:ml-36 intro-body">
          <h1 className="text-4xl mt-20 
font-medium text-DarkBlue leading-tight mb-4  md:text-5xl font-serif ">
            Next generation digital banking
          </h1>
          <p className="text-lg text-justify text-gray-400 mb-5 md:text-left">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and more.
          </p>
          <div className="text-center md:text-left">
            <InviteBtn />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default IntroSection;
