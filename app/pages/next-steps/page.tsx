function NextSteps() {
  return (
    <div className="py-20 flex flex-col gap-8">
      <h2 className="text-center text-2xl font-bold">Next Steps</h2>
      <div className="flex flex-col items-center justify-center text-center gap-5 text-xl">
        <div className="bg-[#8ECAE6] w-[80%] py-10 rounded-xl hover:scale-105">
          <a
            className="font-bold"
            href="https://ourredeemergardengrove.us6.list-manage.com/subscribe?u=2c9e2fc36aff1dcae257db589&id=10daf846f5"
            target="_blank"
          >
            connect
          </a>
        </div>
        <div className="bg-[#8ECAE6] w-[80%] py-10 rounded-xl hover:scale-105">
          <a
            className="font-bold"
            href="mailto:Patty@orcgg.org"
            target="_blank"
          >
            prayer request
          </a>
        </div>
        <div className="bg-[#8ECAE6] w-[80%] py-10 rounded-xl hover:scale-105">
          <a
            className="font-bold"
            href="https://secure.myvanco.com/YPTV/home"
            target="_blank"
          >
            give
          </a>
        </div>
      </div>
    </div>
  );
}

export default NextSteps;
