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
  American1,
  American2,
  American3,
  American4,
  American5,
  Cave28,
} from "../components/images";

const Projects = () => {
  return (
    <div className="px-6 md:px-24 pt-16">
      <h3 className="text-4xl font-semibold mb-10 ">Some of My Projects</h3>
      {/* project 1 */}
      <div className="w-full h-fit ">
        <div className="h-fit w-full ">
          <h2 className="text-5xl font-semibold  mt-5">01. </h2>
          <h3 className="text-2xl font-medium my-5"> The Hallway</h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center">
          <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
            <div className="w-full col-span-2 ">
              <Image
                src={TheHallway1}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full col-span-2 ">
              <Image
                src={TheHallway2}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full col-span-2 ">
              <Image
                src={TheHallway3}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full col-span-2  ">
              <Image
                src={TheHallway4}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>

            <div className="w-full col-span-2 ">
              <Image
                src={TheHallway5}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full col-span-2 ">
              <Image
                src={TheHallway6}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full col-span-2 ">
              <Image
                src={TheHallway7}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
          </div>
        </div>
      </div>

      {/* project 2 */}

      <div className="w-full h-fit ">
        <div className="h-fit w-full text-right ">
          <h2 className="text-5xl font-semibold  mt-5">02. </h2>
          <h3 className="text-2xl font-medium my-5"> American Buildings</h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center">
          <div className="grid grid-cols-3 grid-rows-4  gap-2 ">
            <div className="w-full  row-span-2 ">
              <Image
                src={American1}
                alt="American1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full row-span-2 ">
              <Image
                src={American2}
                alt="American2"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full row-span-2 ">
              <Image
                src={American3}
                alt="American3"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full  row-span-2 ">
              <Image
                src={American4}
                alt="American4"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>

            <div className="w-full   row-span-2 ">
              <Image
                src={American5}
                alt="American5"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
          </div>
        </div>
      </div>

      {/* project 3 */}

      <div className="w-full h-fit ">
        <div className="h-fit w-full ">
          <h2 className="text-5xl font-semibold  mt-5">03. </h2>
          <h3 className="text-2xl font-medium my-5"> The Barnyard</h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center">
          <div className="grid grid-cols-3 grid-rows-1 gap-2">
            <div className="w-fit row-span-1 ">
              <Image
                src={Barnyard3}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2800}
              />
            </div>
            <div className="w-fit row-span-1  ">
              <Image
                src={Barnyard1}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2800}
              />
            </div>
            <div className="w-fit row-span-1 ">
              <Image
                src={Barnyard2}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2708}
              />
            </div>
          </div>
        </div>
      </div>
      {/* project 4 */}

      <div className="w-full h-fit ">
        <div className="h-fit w-full text-right">
          <h2 className="text-5xl font-semibold  mt-5">04. </h2>
          <h3 className="text-2xl font-medium my-5"> The Cave</h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center">
          <div className="grid grid-cols-3 grid-rows-4  gap-2">
            <div className="w-full row-span-2 ">
              <Image
                src={Cave21}
                alt="Cave1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full row-span-2 ">
              <Image
                src={Cave22}
                alt="Cave2"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full row-span-2 ">
              <Image
                src={Cave23}
                alt="Cave3"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full row-span-2 ">
              <Image
                src={Cave25}
                alt="Cave5"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full row-span-2  ">
              <Image
                src={Cave24}
                alt="Cave4"
                className="inset-0 h-full w-full object-cover object-center  rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            {/* <div className="w-full row-span-2 ">
              <Image
                src={Cave26}
                alt="Cave6"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full row-span-2 ">
              <Image
                src={Cave27}
                alt="Cave7"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
            <div className="w-full row-span-2 ">
              <Image
                src={Cave28}
                alt="Cave6"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* project 5 */}

      <div className="w-full h-fit ">
        <div className="h-fit w-full ">
          <h2 className="text-5xl font-semibold  mt-5">05. </h2>
          <h3 className="text-2xl font-medium my-5"> Italian Old Buildings</h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
          <div className="grid grid-cols-3 grid-rows-2 grid-flow-row gap-2">
            <div className="w-full  row-span-1">
              <Image
                src={Italian5}
                alt="Italian5"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2800}
              />
            </div>

            <div className="w-full row-span-1">
              <Image
                src={Italian6}
                alt="Italian6"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2800}
              />
            </div>
            <div className="w-full row-span-1">
              <Image
                src={Italian7}
                alt="Italian7"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2730}
              />
            </div>
            <div className="w-full ">
              <Image
                src={Italian2}
                alt="Italian2"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2800}
              />
            </div>
            <div className="w-full ">
              <Image
                src={Italian3}
                alt="Italian2"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2800}
              />
            </div>

            <div className="w-full ">
              <Image
                src={Italian4}
                alt="Italian4"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
                height={2670}
              />
            </div>

            <div className="w-full col-span-2 row-span-1">
              <Image
                src={Italian1}
                alt="Italian1"
                className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 duration-150 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
