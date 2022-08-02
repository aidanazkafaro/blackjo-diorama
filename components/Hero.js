import React from "react";
import Image from "next/dist/client/image";
import heroImage from "../public/images/creative-image.jpg";
const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between text-center md:pt-20 pt-28">
        <div className="w-full md:w-1/2 h-96 min-h-fit shadow-xl relative px-10 ">
          <div className="w-full h-[80%] mx-auto my-8 ">
            <h1 className=" text-4xl font-bold font-Manrope text-start h-full py-20">
              Hi, I am Ghaza <br /> A diorama maker <br /> based in Jakarta
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
          </div>
        </div>

        <div className="w-full md:w-1/2 h-auto shadow-xl relative px-10 overflow-hidden">
          <Image
            src={heroImage}
            alt="heroImage"
            layout="fill"
            objectFit="cover"
            className="cursor-pointer hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
