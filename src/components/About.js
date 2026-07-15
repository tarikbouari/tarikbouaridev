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
            Turning Ideas into
            <span className="text-[#52eeca]"> Web & AI Solutions</span>
          </h3>
          <p className="mt-4">
            {' '}
            I’m a Web Developer & AI Solutions Integrator based in France, with
            over three years of hands‑on experience building digital products
            for startups and small businesses. I design and develop modern web
            applications, intelligent automation systems, and AI‑powered
            workflows that help companies work smarter, scale faster, and
            deliver better user experiences.
            <br />
            <br />
            My background includes full‑stack development (React, Next.js,
            Node.js, Python), API integration, and intelligent automation using
            both code and no‑code tools such as Make, n8n, and Zapier. I’ve
            collaborated with startup founders and small business owners to
            deliver real, production‑ready solutions — from MVPs and dashboards
            to AI‑powered workflows and custom automation systems.
            <br />
            <br />
            <p>
              {' '}
              Today, I focus on combining web development, AI integration, and
              automation to create solutions that bring measurable value.
              Whether it’s improving internal workflows, developing custom
              agents, or building complete web platforms, my goal is to help
              companies work smarter and scale faster.
            </p>
            <br />
            <span className="text-[#52eeca] py-2">
              I’m open to freelance missions and opportunities
            </span>
            {' '}
            with startups looking to build or enhance products powered by modern
            web technologies and AI.
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
