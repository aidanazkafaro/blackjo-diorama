import React, { useEffect } from "react";
import Image from "next/dist/client/image";
import heroImage from "../public/images/creative-image.jpg";

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const Hero = () => {


  useEffect(() => {  
    return () => {
      const wow = new WOW.WOW();
      wow.init();
    }
  }, [])
  
  return (
    <div id="hero" className="">
      <div className="flex flex-wrap justify-between text-center md:pt-10">
        {/* left content (text) */}
        <div className="flex w-full md:w-1/2 h-96 min-h-screen relative md:px-10 bg-[#fafaf8]">
          {/* div text */}
          <div className="flex flex-wrap w-full h-[80%] m-auto ml-16 ">
            <h1 className="wow fadeInUp my-auto text-4xl font-medium leading-snug w-full font-Manrope text-start ">
              Hi, I am <span className="font-bold">Ghaza</span>. <br /> A
              diorama maker and toys enthusiast <br /> based in Jakarta.
            </h1>



          </div>
        </div>

        {/* right content (image) */}
        <div className="flex w-full md:w-1/2 h-screen relative px-10 overflow-hidden">
          <Image
            src={heroImage}
            alt="heroImage"
            layout="fill"
            objectFit="cover"
            className="cursor-default"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
