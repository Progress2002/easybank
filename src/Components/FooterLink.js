// import { Reveal } from "react-reveal";

const FooterLink = (props) => {
  const { value, href } = props;
  return (
    // <Reveal>
      <li>
        <a
          className="block font-bold text-slate-300 hover:text-LimeGreen"
          href={href}>
          {value}
        </a>
      </li>
    // </Reveal>
  );
};

export default FooterLink;
