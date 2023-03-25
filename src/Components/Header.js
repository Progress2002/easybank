import React, { useState } from "react";
import Logo from "./Logo";
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import MobileNave from "./MobileNav";
import DesktopNave from "./DesktopNav";
import InviteBtn from "./InviteBtn";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <header className="md:h-20">
      <div className="bg-white md:relative fixed z-30 w-full py-5 md:py-0">
        <div className="container bg-White flex justify-between items-center">
          <Logo />
          <div className="text-GrayishBlue md:hidden cursor-pointer text-2xl">
            {isActive ? (
              <TfiClose onClick={handleClick} />
            ) : (
              <RxHamburgerMenu onClick={handleClick} />
            )}
          </div>
          {isActive && <MobileNave click={handleClick} />}

          <DesktopNave />
          <div className="hidden md:block">
            <InviteBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
