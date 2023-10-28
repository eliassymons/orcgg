import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 gap-8">
      <h1 className="text-5xl font-extrabold max-w-sm   text-center px-4 leading-[4.2rem] sm:text-8xl sm:max-w-[50rem] ">
        A place of Love and Caring for all.{" "}
      </h1>

      <p className="max-w-xs text-center text-xl font-bold max-w-[80%] mb-16">
        Join us for Worship Sundays at 9AM
      </p>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCzUDD0mc9ahXY2lKwx-zVLQ"
        className="bg-[#023047] w-[80%] rounded-full text-center py-4 text-white font-bold text-xl"
      >
        Online Worship
      </a>
    </div>
  );
}

export default Hero;
