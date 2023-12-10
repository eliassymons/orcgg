import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col gap-12 px-8 ">
      <div className=" flex flex-col gap-6  mx-auto py-10 about-us px-4 rounded-md   text-dark">
        <h2 className="text-4xl font-bold">Who we are.</h2>
        <div className="text-xl flex flex-col gap-2 px-2 ">
          <p className="font-semibold">
            Our Redeemer Church is a member of the Evangelical Lutheran Church
            in America (ELCA). The ELCA has over 4 million members and 10,000
            congregations within the United States. To find out more about the
            ELCA you can visit www.ELCA.org
          </p>
          <p className="font-semibold">
            We also seek to develop committed followers of Christ. We teach the
            10 commandments as the basis for our moral conduct, and we teach the
            command of Jesus: Love God with all your heart, mind, and strength,
            and love your neighbor as yourself. This forms the core of our
            Christian ethic.
          </p>
        </div>
      </div>
      <div className="flex flex-col ">
        <Image
          src="/luther.jpg"
          width={300}
          height={250}
          alt="Pastor Image"
          className="w-[80%]"
        />
        <div className="bg-tan w-[80%] text-center px-4 py-8 flex flex-col gap-6 -translate-y-[25%] translate-x-[25%]">
          <div className="text-xl font-bold text-dark flex flex-col gap-4">
            <q>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, nisi
              aspernatur dolorum dicta quasi alias in eum atque consequuntur!
              Tempore repellat.
            </q>
            <p className="font-extrabold">-Pastor Luther</p>
          </div>
          <button className="bg-dark text-light py-4 px-8 rounded-full w-3/4 mx-auto">
            Meet our Staff
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
