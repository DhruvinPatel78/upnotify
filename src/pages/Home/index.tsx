import React, { useState } from "react";
import Modal from "@/src/Components/Modal";
import Button from "@/src/Components/Button";
import Stepper from "@/src/Stepper";
import StepOne from "@/src/pages/Home/Steps/StepOne";
import StepTwo from "@/src/pages/Home/Steps/StepTwo";
import StepThree from "@/src/pages/Home/Steps/StepThree";
import StepFour from "@/src/pages/Home/Steps/StepFour";

type StepType = {
  label: String;
  key: number;
  render: React.ReactNode;
};

const Steps: StepType[] = [
  {
    label: "Step 1",
    key: 1,
    render: <StepOne totalStep={4} />,
  },
  {
    label: "Step 2",
    key: 2,
    render: <StepTwo totalStep={4} />,
  },
  {
    label: "Step 3",
    key: 3,
    render: <StepThree totalStep={4} />,
  },
  {
    label: "Step 4",
    key: 4,
    render: <StepFour totalStep={4} />,
  },
];

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);
  return (
    <div
      className={
        "flex w-screen h-screen items-center justify-center bg-background"
      }
    >
      <Button
        type={"contain"}
        onClick={() => setShowModal(true)}
        size={"large"}
        title={"Start Stepper"}
      />
      <Modal open={showModal}>
        <Stepper steps={Steps} onFinish={hideModal} onSkip={hideModal} />
      </Modal>
    </div>
  );
};
export default Home;
