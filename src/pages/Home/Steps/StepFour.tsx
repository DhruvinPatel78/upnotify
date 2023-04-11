import React from "react";
import Image from "next/image";
import img3 from "@/public/image3.png";

import StepProps from "./StepInterface";

const StepFour = ({ totalStep }: StepProps) => {
  return (
    <div className={"w-full flex flex-col"}>
      <div className={"flex justify-center"}>
        <Image src={img3} alt={""} />
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
          Get a list of jobs
        </p>
        <p
          className={"px-2 py-1 bg-secondary font-medium text-primary rounded"}
        >
          4/{totalStep}
        </p>
      </div>
      <p className={"text-sm font-normal text-darkgary mt-2"}>
        With your scrape added, now the fun begins! Either check the jobs
        dashboard or just sit back and wait for you to be notified in your
        chosen platforms!
      </p>
    </div>
  );
};

export default StepFour;
