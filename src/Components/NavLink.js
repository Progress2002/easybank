import React from "react";

const Link = (props) => {
  const { href, value, click } = props;

  return (
    <li
      onClick={click}
      className=" f-full text-center text-GrayishBlue hover:text-DarkBlue  transition-all duration-300 md:text-base text-lg font-medium">
      <a className="block md:py-7 md:hover:border-b-4 md:hover:border-b-solid border-b-LimeGreen" href={href}>
        {value}
      </a>
    </li>
  );
};

export default Link;
