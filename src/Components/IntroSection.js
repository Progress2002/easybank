import React, { useEffect } from "react";
import InviteBtn from "./InviteBtn";
import muckup from "../images/image-mockups.png";


const IntroSection = () => {

  return (
    <section className=" intro-section  md:flex md:flex-row-reverse md:justify-between  ">
      <div className="intro-img md:mt-20 md:-mr-36">
          <img style={{top: '-4.5rem'}} className=" absolute md:mt-16 md:-right-0 md:-mr-24" src={muckup} alt="mobile phone"></img>
        </div>
      <div className=" text-center px-9 md:px-0 md:ml- md:text-left md:ml-36 intro-body">
        <h2 className="text-4xl font-medium text-DarkBlue leading-tight mb-4  md:text-5xl">Next generation digital banking</h2>
        <p className="text-lg text-justify text-gray-400 mb-5 md:text-left">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting,  investing and more.
        </p>
        <div className="text-center md:text-left">
          <InviteBtn />
        </div>
      </div>
      {/* <div></div> */}
    </section>
  );
};

export default IntroSection;
