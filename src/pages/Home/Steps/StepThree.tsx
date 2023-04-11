import React from "react";
import Image from "next/image";
import img2 from "@/public/image2.png";
import StepProps from "./StepInterface";

const StepThree = ({ totalStep }: StepProps) => {
  return (
    <div className={"w-full flex flex-col"}>
      <div className={"flex justify-center"}>
        <Image src={img2} alt={""} />
      </div>

      <div
        className={
          "flex flex-col-reverse sm:flex-row items-end sm:justify-between sm:items-center mt-8 sm:mt-[4.18rem]"
        }
      >
        <p
          className={
            "text-xl font-bold leading-[1.87rem] text-darkblack w-full sm:w-auto text-left"
          }
        >
          Enter scrape data
        </p>
        <p
          className={"px-2 py-1 bg-secondary font-medium text-primary rounded"}
        >
          3/{totalStep}
        </p>
      </div>
      <p className={"text-sm font-normal text-darkgary mt-2"}>
        On this modal section, enter the details of your scrape Here you can
        choose where you will like to be notified, the interval of your scrape
        and the Upwork RSS feed for your jobs Don't worry, on the form we'll
        have a video showing you exactly how to get this information
      </p>
    </div>
  );
};

export default StepThree;
