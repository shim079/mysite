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
        <div className="relative md:h-[200px] md:w-[900px] md:pl-[650px] h-[100px] w-[350px] pt-[50px] pl-[150px] ">
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
      {/* Background Blur Circles */}
      <div className="relative h-full w-fit bg-slate-950 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),transparent)]" />
        <div className="absolute top-[-10%] right-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),transparent)]" />
        <div className="absolute bottom-0 left-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),transparent)]" />
        <div className="absolute bottom-0 right-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),transparent)]" />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-20 px-4 md:px-20 py-10 w-full max-w-7xl mx-auto">
        
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Your Name</label>
            <input
              name="fullname"
              id="fullname"
              type="text"
              placeholder="Name"
              className="w-full h-10 px-6 py-2 rounded-2xl border border-slate-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Your Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              className="w-full h-10 px-6 py-2 rounded-2xl border border-slate-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type Your Message Here"
              className="w-full h-60 px-6 py-2 rounded-2xl border border-slate-50 shadow-md"
            />
          </div>

          <Magnet padding={70} disabled={false} magnetStrength={20}>
            <button
              type="submit"
              className="mt-3 p-3 text-white font-bold w-full md:w-40 h-12 rounded-2xl border border-white hover:bg-white hover:text-black transition-all"
            >
              Send
            </button>
          </Magnet>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-white">
          <div className="p-10">
            <h3>
              I can listen and work with you whether you’re seeking a partner to help develop your brand,
              explore new ideas, or just need someone to bounce ideas off of.
            </h3>

            <h2 className="pt-10">You can find me on:</h2>

            <ul className="p-5 bg-[#FF00B61A] my-4 w-80 rounded-[10px]">
              <li className="font-semibold">Email</li>
              <li>Sh.s.alsuraihi@gmail.com</li>
            </ul>

            <ul className="p-5 bg-[#FF00B61A] my-4 w-80 rounded-[10px]">
              <li className="font-semibold">Phone</li>
              <li>966563772833</li>
            </ul>

            <div className="p-5 bg-[#FF00B61A] my-4 w-80 rounded-[10px] flex items-center space-x-6">
              <p className="font-semibold">Social Media:</p>
              <a href="https://www.linkedin.com/in/shaima-alharbi-7201b822a/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="/"><FaTwitter /></a>
              <a href="https://www.behance.net/shaimas4" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
