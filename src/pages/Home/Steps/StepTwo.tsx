import React from "react";
import Image from "next/image";
import img from "/public/image.svg";
import StepProps from './StepInterface'

const StepTwo = ({ totalStep }: StepProps) => {
  return (
    <div className={"w-full flex flex-col"}>
      <div className={"flex justify-center"}>
        <Image src={img} alt={""} />
      </div>

      <div className={"flex justify-between items-center mt-[4.18rem]"}>
        <p className={"text-xl font-bold leading-[1.87rem] text-darkblack"}>
          Create a new scrape
        </p>
        <p
          className={"px-2 py-1 bg-secondary font-medium text-primary rounded"}
        >
          2/{totalStep}
        </p>
      </div>
      <p className={"text-sm font-normal text-darkgary mt-2"}>
        Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas
        integer. Purus ipsum amet scelerisque commodo dui ut.
      </p>
    </div>
  );
};

export default StepTwo;
