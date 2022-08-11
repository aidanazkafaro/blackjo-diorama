import React from "react";
import Image from "next/dist/client/image";
import heroImage from "../public/images/creative-image.jpg";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-between text-center md:pt-10 pt-28">
        {/* left content (text) */}
        <div className="flex w-full md:w-1/2 h-96 min-h-screen  relative px-10 ">
          {/* div text */}
          <div className="flex flex-wrap w-full h-[80%] m-auto ml-16">
            <h1 className="my-auto text-4xl font-medium leading-snug w-full font-Manrope text-start ">
              Hi, I am <span className="font-bold">Ghaza</span>. <br /> A
              diorama maker and toys enthusiast <br /> based in Jakarta.
            </h1>

            {/* <h4 className=" text-base font-medium font-Manrope text-start  ">
              Since 2014, actively making dioramas as a medium of art
              expression. <br />
              Has participated in various exhibitions in severalregions <br />
              and made artworks that are appreciated to overseas countries.{" "}
              <br />
              Apart from being a medium of visual expression, dioramas have a
              sentimental impression <br /> as well as an attempt to further
              interpret reality through a reduced scale.
            </h4> */}
              <a
                href="https://wa.me/6281211004621?text=Hi!%20I%20saw%20your%20website%20and%20I'm%20interested%20in%20your%20service%20"
                target="_blank"
                rel="noreferrer"
                className="font-semibold font-Manrope text-white py-4 bg-black rounded-md w-40 h-14 text-lg hover:bg-gray-800 duration-200"
              >
                Let&apos;s chat!
              </a>
   
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
