import React from "react";
import Image from "next/image";
import { Element} from "react-scroll";
import OrderSteps from "./OrderSteps";
import orderAsset from "../public/assets/order-process.svg";
const Order = () => {

  return (
    <div id="order" className="px-6 md:px-24 py-16 bg-[#ebd5bd]">
      <p className="font-Manrope text-sm text-center w-full">ORDER</p>
      <h3 className="text-4xl mx-12 font-semibold mb-14 text-center font-Manrope">
        Let Me Realize Your Idea
      </h3>
      <div className="flex flex-wrap  h-fit">
        <div className=" h-full w-full md:w-2/3 ">
          <h2 className="text-4xl font-Manrope font-medium my-4">
            1. Explain your idea
          </h2>
          <h2 className="text-4xl font-Manrope font-medium my-10 md:my-20">
            2. I give my personal feedback
          </h2>
          <h2 className="text-4xl font-Manrope font-medium my-4">
            3. I start working on the project
          </h2>
        </div>
        <div className=" h-full w-full md:w-1/3 ">
          <Image src={orderAsset}/>
        </div>
      </div>
    </div>
  );
};

export default Order;
