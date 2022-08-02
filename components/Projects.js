import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroImage from "../public/images/creative-image.jpg";
import {
  TheHallway1,
  TheHallway2,
  TheHallway3,
  TheHallway4,
  TheHallway5,
  TheHallway6,
  TheHallway7,
  Barnyard1,
  Barnyard2,
  Barnyard3,
  Cave1,
  Cave2,
  Cave3,
  Cave4,
  Cave5,
  Cave6,
  Cave7,
  Cave21,
  Cave22,
  Cave23,
  Cave24,
  Cave25,
  Cave26,
  Cave27,
  cave28,
  Island1,
  Island2,
  Island3,
  Italian1,
  Italian2,
  Italian3,
  Italian4,
  Italian5,
  Italian6,
  Italian7,
  American1, American2, American3, American4, American5, Cave28
} from "../components/images";

const Projects = () => {
  return (
    <div className="px-24 pt-16">
      <h3 className="text-4xl font-semibold mb-10 ">Some of My Projects</h3>
      {/* mulai flex */}
      <div className="flex flex-wrap ">
        {/* project 1 */}
        <div className="flex flex-wrap w-full md:w-1/2 h-fit">
          <div className="h-fit w-full ">
            <h2 className="text-5xl font-semibold  mt-5">01. </h2>
            <h3 className="text-2xl font-medium my-5"> The Hallway</h3>
          </div>
          <div className="w-full h-fit shadow-xl relative px-10 overflow-hidden">
            {/* <Image
              src={heroImage}
              alt="heroImage"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer hidden md:block"
            /> */}
            <Carousel emulateTouch  infiniteLoop showThumbs={false} >
              <div>
                <Image src={TheHallway1} alt="TheHallway1"  />
              </div>
              <div>
                <Image src={TheHallway2} alt="TheHallway2" layout="fill" />
              </div>
              <div>
                <Image src={TheHallway3} alt="TheHallway3" layout="fill" />
              </div>
              <div>
                <Image src={TheHallway4} alt="TheHallway4" layout="fill" />
              </div>
              <div>
                <Image src={TheHallway5} alt="TheHallway5" layout="fill" />
              </div>
              <div>
                <Image src={TheHallway6} alt="TheHallway6" layout="fill" />
              </div>
              <div>
                <Image src={TheHallway7} alt="TheHallway7" layout="fill" />
              </div>
            </Carousel>
          </div>
        </div>
        {/* project 2 */}
        <div className="flex flex-wrap w-full md:w-1/2 h-fit">
          <div className="h-fit w-full ">
            <h2 className="text-5xl font-semibold  mt-5">02. </h2>
            <h3 className="text-2xl font-medium my-5"> The Cave</h3>
          </div>
          <div className="w-full  h-fit shadow-xl relative px-10 overflow-hidden">
            {/* <Image
              src={heroImage}
              alt="heroImage"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer hidden md:block"
            /> */}
            <Carousel emulateTouch  infiniteLoop showThumbs={false}>
              <div>
                <Image src={Cave21} alt="Cave21" />
              </div>
              <div>
                <Image src={Cave22} alt="Cave22" layout="fill" />
              </div>
              {/* <div>
                <Image src={Cave23} alt="image3" layout="fill" />
              </div> */}
              <div>
                <Image src={Cave24} alt="Cave24" layout="fill" />
              </div>
              <div>
                <Image src={Cave25} alt="Cave25" layout="fill" />
              </div>
              {/* <div>
                <Image src={Cave26} alt="Cave26" layout="fill" />
              </div>
              <div>
                <Image src={Cave28} alt="Cave28" layout="fill" />
              </div> */}
            </Carousel>
          </div>
        </div>
        {/* project 3 */}
        {/* <div className="flex flex-wrap w-full md:w-1/2 h-fit">
          <div className="h-fit w-full ">
            <h2 className="text-5xl font-semibold  mt-5">03. </h2>
            <h3 className="text-2xl font-medium my-5"> American Buildings</h3>
          </div>
          <div className="w-full  h-fit shadow-xl relative px-10 overflow-hidden">

            <Carousel emulateTouch  infiniteLoop showThumbs={false}>
              <div>
                <Image src={American1} alt="image1" />
              </div>
              <div>
                <Image src={American2} alt="image2" layout="fill" />
              </div>
              <div>
                <Image src={American3} alt="image3" layout="fill" />
              </div>
              <div>
                <Image src={American4} alt="image4" layout="fill" />
              </div>
              <div>
                <Image src={American5} alt="image4" layout="fill" />
              </div>
      
            </Carousel>
          </div>
        </div> */}
        {/* project 4 */}
        {/* <div className="flex flex-wrap w-full md:w-1/2 h-fit">
          <div className="h-fit w-full ">
            <h2 className="text-5xl font-semibold  mt-5">04. </h2>
            <h3 className="text-2xl font-medium my-5"> The Barnyard</h3>
          </div>
          <div className="w-full scale-50 h-fit shadow-xl relative px-10 overflow-hidden">

            <Carousel emulateTouch  infiniteLoop showThumbs={false} >
              <div>
                <Image src={Barnyard1} alt="Barnyard 1"  />
              </div>
              <div>
                <Image src={Barnyard2} alt="Barnyard 2" layout="fill" />
              </div>
              <div>
                <Image src={Barnyard3} alt="Barnyard 3" layout="fill" />
              </div>
            </Carousel>
          </div>
        </div> */}
        
        {/* project 5 */}
        <div className="flex flex-wrap w-full md:w-1/2 h-fit">
          <div className="h-fit w-full ">
            <h2 className="text-5xl font-semibold  mt-5">03. </h2>
            <h3 className="text-2xl font-medium my-5"> Italian Old Buildings</h3>
          </div>
          <div className="w-full h-fit shadow-xl relative px-10 overflow-hidden">

            <Carousel emulateTouch infiniteLoop showThumbs={false}>
              <div>
                <Image src={Italian1} alt="Italian1" />
              </div>
              {/* <div>
                <Image src={Italian2} alt="Italian2" layout="fill" />
              </div>
              <div>
                <Image src={Italian3} alt="Italian3" layout="fill" />
              </div>
              <div>
                <Image src={Italian4} alt="Italian4" layout="fill" />
              </div>
              <div>
                <Image src={Italian5} alt="image4" layout="fill" />
              </div>
              <div>
                <Image src={Italian6} alt="image4" layout="fill" />
              </div>
              <div>
                <Image src={Italian7} alt="image4" layout="fill" />
              </div> */}
            </Carousel>
          </div>
        </div>
        {/* project 5 */}
        <div className="flex flex-wrap w-full md:w-1/2 h-fit">
          <div className="h-fit w-full ">
            <h2 className="text-5xl font-semibold  mt-5">04. </h2>
            <h3 className="text-2xl font-medium my-5"> Island</h3>
          </div>
          <div className="w-full h-fit shadow-xl relative px-10 overflow-hidden">

            <Carousel emulateTouch infiniteLoop showThumbs={false} className="">
              <div>
                <Image src={Island1} alt="Island1" />
              </div>
              {/* <div>
                <Image src={Italian2} alt="Italian2" layout="fill" />
              </div>
              <div>
                <Image src={Italian3} alt="Italian3" layout="fill" />
              </div>
              <div>
                <Image src={Italian4} alt="Italian4" layout="fill" />
              </div>
              <div>
                <Image src={Italian5} alt="Italian5" layout="fill" />
              </div>
              <div>
                <Image src={Italian6} alt="Italian6" layout="fill" />
              </div>
              <div>
                <Image src={Italian7} alt="Italian7" layout="fill" />
              </div> */}
            </Carousel>
          </div>
        </div>
        <h1>djfafka</h1>
        <h1>djfafka</h1>
      </div>
        <h1>djfafka</h1>
    </div>
  );
};

export default Projects;
