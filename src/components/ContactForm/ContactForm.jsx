import React, { use } from 'react'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

 const onSubmit = (e) => {
  e.preventDefault();

  setName(e.target[0].value);
  setEmail(e.target[1].value);
  setText(e.target[2].value);
 };

  return (
    <div className='flex justify-between h-200 ml-25'>
      <div className='w-1/2'>
        <div className='flex flex-wrap gap-6 mt-20'>
          <Button 
          text="VIA SUPPORT CHAT" 
          icon={ <MdMessage fontSize="20px" /> } 
          className="bg-black text-white"
          />

          <Button 
          text="VIA CALL" 
          icon={ <IoCallOutline fontSize="20px" /> } 
          className="bg-black text-white"
       
          />

          <Button 
          text="VIA EMAIL" 
          icon={ <IoMdMail fontSize="20px" /> } 
          className="bg-white text-black w-[530px] border border-black self-start"
          />


        <form className='mt-15 ml-4 relative flex flex-wrap gap-6 w-[530px]' onSubmit={onSubmit}>
          <div className="form_controler self-start gap-2 w-[500px] border border-black pl-5 py-2">
            <label htmlFor='name'>Name : </label>
            <input className='outline-none focus:outline-none' type='text' name='name'/>
          </div>

          <div className="form_controler self-start gap-2 w-[500px] border border-black pl-5 py-2">
            <label htmlFor='email'>Email : </label>
            <input className='outline-none focus:outline-none' type='email' name='email'/>
          </div>

          <div className="form_controler self-start gap-2 w-[500px] border border-black pl-5 py-4">
            <label htmlFor='text' className='absolute'>Text : </label>
            <textarea
              name="text"
              rows="3"
              className="w-full p-8 outline-none"
              placeholder="Thank you for visiting this demo contact page. Feel free to reach out with any questions."
            ></textarea>
          </div>

          <Button 
          text="SUBMIT" 
          className="bg-black text-white"
          />
        </form>

        <div>
            {name + " " + email + " " + text}
          </div>

        </div>
      </div>

      <div className="contact_image mr-10 h-[100px] w-[630px]">
        <img src='https://img.freepik.com/premium-vector/service-24-7-concept-illustration_114360-7380.jpg' />
      </div>
    </div>
  )
}

export default ContactForm