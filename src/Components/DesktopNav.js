import React from "react";
import Link from "./NavLink";
import { Reveal } from "react-reveal";

const DesktopNave = () => {
  return (
    <div className="hidden md:flex justify-between ">
      <nav className="">
        <Reveal top>
          <ul className="flex  gap-6">
            <Link value="Home" href="#home" />
            <Link value="About" href="#about" />
            <Link value="Contact" href="#contact" />
            <Link value="Blog" href="#blog" />
            <Link value="Careers" href="#careers" />
          </ul>
        </Reveal>
      </nav>
    </div>
  );
};

export default DesktopNave;
