import StepProps from "./StepInterface";

const StepOne = ({ totalStep }: StepProps) => {
  return (
    <div className={"w-full flex flex-col"}>
      <p className={"text-sm text-darkblack font-medium"}>
        Expertise and Experience
      </p>
      <textarea
        rows={4}
        placeholder={"Enter your Expertise and Experience"}
        className={
          "w-full border-solid border-borderGray border p-2 rounded-md mt-2 outline-none resize-none"
        }
      />
      <p className={"text-sm text-darkblack font-medium mt-[4.18rem]"}>
        How would you like to sign off the proposal
      </p>
      <textarea
        rows={4}
        placeholder={"Enter your proposal"}
        className={
          "w-full border-solid border-borderGray border p-2 rounded-md mt-2 outline-none resize-none"
        }
      />

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
          Help Us Customize your Prompts
        </p>
        <p
          className={"px-2 py-1 bg-secondary font-medium text-primary rounded"}
        >
          1/{totalStep}
        </p>
      </div>
      <p className={"text-sm font-normal text-darkgary mt-2"}>
        Please fill in this form to the best of your detail so we can customize
        your AI generated proposals as much as possible.
      </p>
      <p className={"text-sm font-normal text-darkgary mt-5"}>
        You can change these at any time by heading over to the settings tab
        within the app!
      </p>
    </div>
  );
};

export default StepOne;
