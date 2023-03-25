import React from "react";
import Item from "./Item";
import { aboutData } from "./Data";
import { Reveal } from "react-reveal";

const About = () => {
  return (
    <section className="bg-LightGrayishBlue">
      <div
        className="mt-20 md:mt-0 md:pt-24 py-20 md:mt: md:container"
        id="about">
        <div className="text-center px-5">
          <Reveal top>
            <h2 className="text-center md:text-left text-4xl text-DarkBlue leading-tight mb-5">
              Why choose Easybank?
            </h2>
            <p className="text-GrayishBlue text-center mb-16 md:text-left md:w-1/2">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finance like never before.
            </p>
          </Reveal>
          <ul className="md:flex md:text-left gap-16">
            {aboutData.map((data) => {
              const { id, imgURL, summary, title } = data;
              return (
                <Reveal left key={id}>
                  <Item imgURL={imgURL} summary={summary} title={title} />
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
