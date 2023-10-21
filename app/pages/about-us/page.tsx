function About() {
  return (
    <div>
      <div className="text-center flex flex-col gap-6 max-w-sm mx-auto py-10">
        <h2 className="text-2xl font-bold">Who we are.</h2>
        <div className="text-xl flex flex-col gap-2">
          <p>
            Our Redeemer Church is a member of the Evangelical Lutheran Church
            in America (ELCA). The ELCA has over 4 million members and 10,000
            congregations within the United States. To find out more about the
            ELCA you can visit www.ELCA.org
          </p>{" "}
          <p>
            We also seek to develop committed followers of Christ. We teach the
            10 commandments as the basis for our moral conduct, and we teach the
            command of Jesus: Love God with all your heart, mind, and strength,
            and love your neighbor as yourself. This forms the core of our
            Christian ethic.
          </p>
        </div>
      </div>
      <div className="py-10 flex flex-col gap-8 px-10 items-center">
        <p className="text-4xl font-bold text-[#023047] max-w-sm text-center ">
          "I am the Way, the Truth, and the Life. No one comes to the Father
          except through me."
        </p>
        <p className="text-2xl font-bold  mr-4 text-[#255974]  ">
          - Pastor Luther
        </p>
        <button className="bg-[#FFB703] w-[80%] rounded-full text-center py-4 text-[#023047] font-bold text-xl">
          Meet our Staff
        </button>
      </div>
    </div>
  );
}

export default About;
