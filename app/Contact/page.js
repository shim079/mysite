'use client';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from './style.module.css';
import TextPressure from './TextPressure';
import Magnet from './Magnet';
import { FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa6";



const Page = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mh5yu8b', 'template_c26q9i7', form.current, {
        publicKey: 'yd1IBHZogNonX_QhN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={styles.body}>
      {/* Background Blur Circles */}
      <div className="relative h-full w-fit bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Contact Title */}
      <div style={{ position: 'relative', height: '300px', width: '900px', paddingLeft: '650px', paddingTop: '100px' }}>
        <TextPressure
          text="Contact "
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className='pl-15 pr-150 flex flex-col gap-2'>
          <label htmlFor='fullname'>Your Name</label>
          <input
            
            name="fullname"
            className='w-150 h-10 px-6 py-2 rounded-2xl border border-slate-50'
            type='text'
            id='fullname'
            placeholder='Name'
          />
        </div>

        <div className='pl-15 pr-150 flex flex-col gap-2'>
          <label htmlFor='email'>Your Email</label>
          <input
            
            name="email"
            className='w-150 h-10 px-6 py-2 rounded-2xl border border-slate-50'
            type='email'
            id='email'
            placeholder='Email'
          />
        </div>

        <div className='pl-15 pr-150 flex flex-col gap-2'>
          <label htmlFor='message'>Your Message</label>
          <textarea
           
            name="message"
            className='shadow-md px-6 py-2 border border-slate-50 h-60 w-150 rounded-2xl'
            id='message'
            placeholder='Type Your Message Here'
          />
        </div>

        <Magnet padding={70} disabled={false} magnetStrength={20}>
          <button className='mt-3 p-3 ml-75 text-white font-bold border-1 w-29 h-12 rounded-2xl cursor-pointer' type='submit'>
            Send
          </button>
        </Magnet>
      </form>

      {/* Contact Info */}
      <div className='right-10 p-20 absolute top-98 max-w-180'>
        <h3>
          I can listen and work with you whether you’re seeking a partner to help develop your brand,
          explore new ideas, or just need someone to bounce ideas off of.
        </h3>
        <h2 className='pt-10 ml-10'>You can find me on:</h2>

        <ul className='p-5 bg-[#FF00B61A] m-4 ml-10 w-80 rounded-[10px]'>
          <li>Email</li>
          <li>Sh.s.alsuraihi@gmail.com</li>
        </ul>

        <ul className='p-5 bg-[#FF00B61A] m-4 ml-10 w-80 rounded-[10px]'>
          <li>Phone</li>
          <li>966563772833</li>
        </ul>

        <ul className='p-5 bg-[#FF00B61A] ml-10 w-80 rounded-[10px] flex items-center space-x-9 absolute'>
          <p>Social media</p>
          <a href='https://www.linkedin.com/in/shaima-alharbi-7201b822a/'><FaLinkedinIn /></a>
          <a href='/'><FaTwitter /></a>
          <a href='https://www.behance.net/shaimas4'><FaBehance /></a>
        </ul>
      </div>
    </div>
  );
};

export default Page;
