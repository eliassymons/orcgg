import Card from "@/app/components/card";
import Test from "@/app/components/card";
import { nextSteps } from "@/app/data/next-steps";
import next from "next";

function NextSteps() {
  const data = nextSteps.map((step) => (
    <Card
      caption={step.caption}
      link={step.link}
      img={step.img}
      key={step.img}
    />
  ));
  return (
    <div
      id="next-steps"
      className=" mx-auto py-24 flex flex-col justify-center items-center gap-8 "
    >
      <h2 className="text-4xl font-bold text-dark ">Next Steps</h2>
      <div className="  flex w-full row gap-6 justify-center  min-w-lg flex-wrap px-6">
        {data}
      </div>
    </div>
  );
}

export default NextSteps;
