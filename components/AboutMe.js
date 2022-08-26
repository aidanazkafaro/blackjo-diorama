import React from "react";
import Image from "next/image";
import profile from "../public/assets/profile.svg";

const AboutMe = () => {
  return (
    <div id="aboutme" className=" px-6 md:px-24 py-16 bg-[#FFFCEF]">
      <p className="wow fadeInDown font-Manrope text-sm text-center w-full" data-wow-delay="0.3s">ABOUT ME</p>
      <h3 className="wow fadeInDown text-4xl mx-12 font-semibold mb-14 text-center font-Manrope" data-wow-delay="0.3s">
        A Little Background About Me
      </h3>
      <div className="flex flex-wrap">
        <div className=" h-full w-full md:w-1/3 md:mr-10">
          <Image src={profile} />
        </div>
        <div className="md:w-1/2 ">
          <h4 className=" text-lg font-medium font-Manrope text-justify ">
            Since 2014, actively making dioramas as a medium of art expression.
            
            Has participated in various exhibitions in several regions 
            and made artworks that are appreciated to overseas countries. 
            Apart from being a medium of visual expression, dioramas have a
            sentimental impression  as well as an attempt to further
            interpret reality through a reduced scale.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
