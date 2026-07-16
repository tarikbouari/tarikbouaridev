/* eslint-disable no-console */
import React, { useState } from 'react';
import { MdOutlineContactMail } from 'react-icons/md';
import profile from '../images/f4.jpg';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData(event.target);
    formData.append('access_key', '84097c34-6a5c-4a10-bd56-84b5e4833570');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult('Message sent successfully ✅');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message || 'Something went wrong. Please try again.');
    }
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
          <form className="py-8 flex flex-col gap-4 md:w-[60%] mx-auto xl:px-8" onSubmit={onSubmit}>
            <input type="hidden" name="subject" value="Nouveau message depuis ton portfolio" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="flex gap-2">
              <label htmlFor="name" className="w-full">
                name
                <input className="w-full  p-2 rounded  mt-2 text-black" type="text" name="name" placeholder="your name" required />
              </label>
              <label htmlFor="email" className="w-full">
                Email
                <input className=" w-full p-2 rounded  mt-2 text-black" type="email" name="email" placeholder="your email" required />
              </label>
            </div>
            <div>
              <span className="mb-2"> Message</span>
              <textarea name="message" placeholder="Enter your message" className="w-full mt-2 text-black  p-2" required />
            </div>

            <button type="submit" className="px-4 py-3 text-[#000300] bg-[#52eeca] rounded w-auto"> send </button>

            {result && <span className="text-[#52eeca]">{result}</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;