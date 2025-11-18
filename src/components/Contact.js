/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { MdOutlineContactMail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import profile from '../images/f4.jpg';

const Contact = () => {
  const form = useRef();
  const clearForm = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_f84khnt', 'template_lfr9n77', form.current, 'tIh09_Tr03T4ML2y7')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="w-full py-12 " id="contact">
      <div className="container mx-auto px-12 bg-[#112240] pt-9">
        <div className=" flex justify-center items-center gap-2 border px-4 py-2 rounded-full w-[150px]">
          <MdOutlineContactMail className="text-[#52eeca]" />
          <span>Contact</span>
        </div>
        <div className=" flex flex-col  gap-4 py-7 ">
          <div className="flex flex-col justify-center items-center gap-2 px-8 py-8 ">
            <img src={profile} alt="profile" className="w-[150px] h-[150px] outline outline-2 outline-[#52eeca] rounded-full" />
            <h4 className="text-2xl xl:text-3xl md:w-[50%] text-center"> Let’s talk about a project, collaboration or an idea you may have</h4>
          </div>
          <form className="py-8 flex flex-col gap-4 md:w-[60%] mx-auto xl:px-8" ref={form} onSubmit={sendEmail}>
            <div className="flex gap-2">
              <label htmlFor="name" className="w-full">
                name
                <input className="w-full  p-2 rounded  mt-2 text-black" type="text" name="user_name" placeholder="your name" />
              </label>
              <label htmlFor="email" className="w-full">
                Email
                <input className=" w-full p-2 rounded  mt-2 text-black" type="email" name="user_email" placeholder="your email" />
              </label>

            </div>
            <div>
              <span className="mb-2"> Message</span>
              <textarea name="message" placeholder="Enter your message" className="w-full mt-2 text-black  p-2" />
            </div>

            <button onClick={clearForm} type="submit" value="send" className="px-4 py-3 text-[#000300] bg-[#52eeca] rounded w-auto"> send </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;
