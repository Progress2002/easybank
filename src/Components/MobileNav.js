import React from "react";
import Link from "./NavLink";

const MobileNave = (props) => {
  const {click} = props
  return (
    <div
      className="absolute md:hidden left-0 right-0 "
      style={{top: 64, height: 1000, background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))" }}>
      <nav className="bg-white m-7 rounded p-10">
        <ul className="flex flex-col gap-6">
          <Link click={click} value="Home" href="#home" />
          <Link click={click} value="About" href="#about" />
          <Link click={click} value="Contact" href="#contact" />
          <Link click={click} value="Blog" href="#blog" />
          <Link click={click} value="Careers" href="#careers" />
        </ul>
      </nav>
    </div>
  );
};

export default MobileNave;

