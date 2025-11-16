/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header = () => (
  <div className="flex justify-center items-center h-[100vh] md:h-[100vh]  bnbg" id="home">
    <div className=" mx-auto  container px-6 py-8 2xl:py-16">
      <div className=" flex  mx-auto px-8 xl: ">
        <div className="text-white ">
          <h4 className="text-2xl md:text-4xl lg:text-7xl xl:text-8xl text-[#52eeca] md:mb-4 lg:mb-2">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hi, I m Tarik Bouari',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                '', 1000,
              ]}
              wrapper="span"
              speed={30}
              style={{ display: 'block' }}
              repeat={Infinity}
            />
          </h4>
          <h2 className="text-2xl lg:text-7xl md:text-5xl  xl:text-8xl  ">  a Creative full-stack developer </h2>
        </div>
        <div className=" p-4 w-[20%]"> </div>
      </div>
      <div className="py-6 md:w-[80%] lg:w-[60%]  px-8 ">
        <p className=" "> I love building digital products for startups and businesses to enhance brand visibility and sales growth.</p>
      </div>
      <div className="flex flex-col gap-6">
        <Link
          activeClass="active"
          to="contact"
          spy
          smooth
          offset={-70}
          duration={500}
          className="capitalize px-2 py-2  ml-8 outline outline-2 outline-[#52eeca] cursor-pointer rounded hover:bg-[#4eccaf] conect  md:px-4 md:py-3"
        >Let' us Connect
        </Link>
        <div className="flex gap-2 px-8 res">
          <NavLink to="https://github.com/tarikbouari" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github ">
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/tarikbouari/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1" /></circle><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"><path strokeDasharray="12" strokeDashoffset="12" d="M4 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0" /></path><path strokeDasharray="12" strokeDashoffset="12" d="M10 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0" /></path><path strokeDasharray="24" strokeDashoffset="24" d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="24;0" /></path></g></svg></NavLink>
          <NavLink to="https://twitter.com/TarikBouari" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#fff" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05L9.294 6.928ZM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843l-3.664-5.28Z" /></svg></NavLink>
          <NavLink to="https://medium.com/@tarikbouari" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#fff" d="m16.41 8.98l.84-.803V8h-2.902l-2.069 5.16L9.927 8H6.883v.177l.98 1.18a.406.406 0 0 1 .133.343v4.641a.534.534 0 0 1-.142.46l-1.104 1.34v.175h3.127v-.176l-1.103-1.338a.553.553 0 0 1-.152-.46v-4.014l2.745 5.989h.32l2.357-5.989v4.773c0 .127 0 .151-.084.235l-.848.823v.176h4.117v-.176l-.818-.804a.245.245 0 0 1-.094-.235V9.215a.245.245 0 0 1 .094-.235Z" /><path fill="currentColor" fillRule="evenodd" d="M17.258 2.833a47.721 47.721 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a45.921 45.921 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.77 47.77 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a45.925 45.925 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832Zm-10.35 1.49a46.22 46.22 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.421 44.421 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.216 46.216 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.421 44.421 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516Z" clipRule="evenodd" /></svg></NavLink>
        </div>
      </div>

    </div>
  </div>
);

export default Header;
