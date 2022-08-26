import React, { useState, useRef } from "react";
import { Element } from "react-scroll";
import axios from "axios";
import emailjs from "@emailjs/browser";
import Image from "next/image"
import gmail from "../public/assets/gmail.png"
import instagram from "../public/assets/instagram.png"
import whatsapp from "../public/assets/whatsapp.png"

const Contact = () => {


  return (
    <div id="contact" className="px-6 md:px-24 py-16 bg-[white]">
      <p className="wow fadeInDown font-Manrope text-sm text-center w-full" data-wow-delay="0.3s">CONTACT</p>
      <h3 className="wow fadeInDown text-4xl mx-12 font-semibold mb-14 text-center font-Manrope" data-wow-delay="0.3s">
        Reach Out to Me
      </h3>
      <div className="flex flex-wrap w-full md:w-1/2 mx-auto">
      <a className="w-1/3 hover:scale-110 duration-200 text-center" target={"_blank"} rel={"noreferrer"}  href="mailto:aidanazkafaro@gmail.com">
        <Image src={gmail} width={70} height={70}/>
      </a>
      <a className="w-1/3 hover:scale-110 duration-200 text-center" target={"_blank"} rel={"noreferrer"} href="https://wa.me/6281211004621?text=Hi!%20I%20saw%20your%20website%20and%20I'm%20interested%20in%20your%20service%20"
              >
        <Image src={whatsapp} width={70} height={70}/>
      </a>
      <a className="w-1/3 hover:scale-110 duration-200 text-center" target={"_blank"} rel={"noreferrer"} href="https://www.instagram.com/blackjodiorama/">
        <Image src={instagram} width={70} height={70}/>
      </a>
      </div>
    </div>
  );
};
export default Contact;
