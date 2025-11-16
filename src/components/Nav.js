/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  /* function for handling mobile menu when clicked the state is loaded */
  const [menu, setMenu] = useState(true);
  const handleMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
    console.log('this is menue value', setMenu);
  };

  /* Use effect is for side effect through the application. ex: dom manipulation,
  fetch API data, qucribe to external event
  it takes two argument: a fountion and the state you want to handle. In this case is menu click
  */
  useEffect(() => {
    if (!menu) {
      document.body.classList.add('overflow');
    } else {
      document.body.classList.remove('overflow');
    }
  },
  [menu]);

  const handleNavLinkClick = () => {
    setMenu(true);
  };
  return (
    <div className=" w-full fixed  bg-[#0A192F] z-40">
      <nav className=" h-[70px] text-white flex justify-between items-center px-12 cursor-pointer">
        <span className=" bg-[#132D3E] rounded-full p-2">
          <Link
            activeClass="active"
            to="home"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            TB
          </Link>
        </span>
        <ul className="md:flex justify-between w-60 hidden sm:visible xl:visible  md:visible ">
          <li className="hover:text-[#52eeca]">
            {' '}
            <Link
              activeClass="active"
              to="about"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="hover:text-[#52eeca]">
            {' '}
            <Link
              activeClass="active"
              to="project"
              spy
              smooth
              offset={-70}
              duration={700}
            >
              Project
            </Link>
          </li>
          <li className="hover:text-[#52eeca]">
            {' '}
            <Link
              activeClass="active"
              to="contact"
              spy
              smooth
              offset={-90}
              duration={700}
            >
              Contact me
            </Link>
          </li>
        </ul>
        <HiMenuAlt3 className=" text-2xl text-[#52eeca]  md:hidden" onClick={handleMenu} />
      </nav>
      {/* Use js to display the menu if the state exist */}

      <div className={!menu ? 'fixed top-0 flex justify-center h-screen w-full  pt-16 overflow-hidden' : 'hidden'}>
        <div className="bg-blur z-30 fixed top-0 w-full h-screen" />
        <ul className="flex flex-col gap-6 w-80 mx-auto h-[50vh] rounded-xl p-8 bg-[#132D3E] text-2xl  sm:hidden xl:hidden  md:hidden z-40 ">
          <li className="hover:text-[#52eeca] ">
            <ul className="flex justify-between w-full">
              <li>
                {' '}
                <Link
                  activeClass="active"
                  to="about"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  About
                </Link>
              </li>
              <li><FaTimes className=" text-2xl text-white  md:hidden" onClick={handleMenu} /></li>
            </ul>

          </li>
          <li className="hover:text-[#52eeca]">
            {' '}
            <Link
              activeClass="active"
              to="project"
              spy
              smooth
              offset={-70}
              duration={700}
              onClick={handleNavLinkClick}
            >
              Project
            </Link>
          </li>
          <li className="hover:text-[#52eeca]">
            {' '}
            <Link
              activeClass="active"
              to="contact"
              spy
              smooth
              offset={-90}
              duration={700}
              onClick={handleNavLinkClick}
            >
              Contact me
            </Link>
          </li>
        </ul>

      </div>
      <div />
    </div>
  );
};

export default Navbar;
