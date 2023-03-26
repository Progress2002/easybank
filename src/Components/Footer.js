import InviteBtn from "./InviteBtn";
import FooterLink from "./FooterLink";
import SocialIcons from "./SocialIcons";
import logo from "../images/logo.svg";
import { Reveal } from "react-reveal";


const Footer = () => {
  return (
    <footer className="bg-DarkBlue text-center py-12">
      <Reveal up>
      <div className="container flex flex-col md:flex-row md:justify-between gap-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-36">
          <div className="flex flex-col gap-7 md:justify-between">
            <div>
              <a className="block h-6 w-fit m-auto">
                <img className="bg-LightGrayishBlue h-full" alt="logo" src={logo} />
              </a>
            </div>
            <SocialIcons />
          </div>
          <ul className="flex flex-col gap-2 -mb-3 md:mb-0 md:justify-between md:text-left">
            <FooterLink value="About Us" href="#about" k />
            <FooterLink value="Contact" href="#contact" />
            <FooterLink value="Blog" href="#blog" />
          </ul>
          <ul className="flex flex-col gap-2 md:text-left md:justify-between">
            <FooterLink value="Careers" href="#careers" />
            <FooterLink value="Support" href="#support" />
            <FooterLink value="Privacy Policy" href="#policy" />
          </ul>
        </div>
        <div className="flex flex-col gap-7 md:justify-between">
          <InviteBtn />
          <p className="text-GrayishBlue">&copy;Easybank. All Rights Reserved </p>
        </div>
      </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
