/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-extraneous-dependencies */
import { GoPerson } from 'react-icons/go';
import Skill from './Skills';
import Accordionl from './AccordionL';
import Accordionf from './AccordionF';
import Accordiond from './AccordionD';

const About = () => (
  <div className="w-full mx-auto md:p-6 xl:p-1 abcss" id="about">
    <div className="container  px-4 py-4 mt-5 mx-auto flex flex-col gap-4 xl:pt-[8rem] ">
      <div className=" flex  items-center px-12">
        <div className=" flex items-center gap-2 border px-4 py-2 rounded-full">
          <GoPerson className=" text-[#52eeca] w-5 h-5" />
          <h2 className="text-lg "> About me</h2>
        </div>
        <div className="border-t-[1px] border-[#F0F3FC]-600 w-[30%]"> </div>
      </div>
      <div className=" lg:grid grid-cols-2  gap-4 mt-5 p-8  ">
        <div className="p-4">
          <h3 className="text-xl md:text-3xl">
            Every developer has it
            <span className="text-[#52eeca]"> own story</span>
          </h3>
          <p className="mt-4">
            {' '}
            As a Full‑Stack Developer based in France, I design and build
            user‑centered web products using modern JavaScript stacks (React,
            Node.js) and Figma, with a strong focus on accessibility,
            performance, and maintainable code
            <br />
            <br />
            Data‑oriented in approach, I use Pandas for analysis and dashboards
            to inform product decisions. I have three years of remote,
            real‑world experience with Microverse and additional freelance
            projects for startups, delivering end‑to‑end development,
            CI/workflows, and cross‑team collaboration
            <br />
            <br />
            <span className="text-[#52eeca] py-2">
              I’m open to opportunities
            </span>{' '}
            to work on projects that combine web development, UX design, and
            data practices
          </p>
          <Skill />
        </div>
        <div className="flex flex-col gap-6 w-30 px-4 cursor-pointer">
          <Accordionl titre="Language" />
          <Accordionf titre="Framwork" />
          <Accordiond titre="Database" />
        </div>
      </div>
      <div className="5rem"> </div>
    </div>
  </div>
);
export default About;
