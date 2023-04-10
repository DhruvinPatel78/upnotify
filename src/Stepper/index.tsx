import React, { useEffect, useState } from "react";
import Button from "@/src/Components/Button";
import Image from "next/image";
import arrow from "@/public/arrow-right.svg";

type StepType = {
  label: String;
  key: number;
  render: React.ReactNode;
};

interface StepperProps {
  steps: StepType[];
  onFinish: React.MouseEventHandler<HTMLButtonElement>;
  onSkip: React.MouseEventHandler<HTMLButtonElement>;
  step?: number;
}

const Stepper = ({ steps, onFinish, onSkip, step = 1 }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  useEffect(() => {
    if (step) {
      setCurrentStep(step);
    }
  }, [step]);
  return (
    <>
      <div
        className={
          "transition ease-in-out delay-150 duration-300"
        }
      >
        {steps.find((item: StepType) => item.key === currentStep)?.render}
      </div>
      <div className={"w-full flex justify-between items-center mt-8"}>
        <Button
          type={"outline"}
          onClick={onSkip}
          buttonRender={
            <p className={"font-medium text-base text-darkblack"}>Skip</p>
          }
          className={"border border-[#D0D5DD]"}
        />
        <Button
          type={"contain"}
          onClick={(e) =>
            currentStep === steps.length
              ? onFinish(e)
              : setCurrentStep((prev) => prev + 1)
          }
          title={currentStep === steps.length ? "Enter app" : "Next"}
          rightIcon={
            currentStep === steps.length ? (
              <Image src={arrow} className={"ml-1"} />
            ) : null
          }
        />
      </div>
    </>
  );
};

export default Stepper;
