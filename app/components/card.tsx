"use client";
import Image from "next/image";

function Card(props: { caption: string; img: string; link: string }) {
  function clickHandler(): any {
    console.log(props.caption);
  }
  return (
    <div
      onClick={clickHandler}
      className="relative h-80 w-[100%] flex row items-center justify-center text-2xl max-w-[18rem] font-bold text-dark rounded-md shadow-lg hover:scale-[101%] cursor-pointer"
    >
      <Image
        key={props.caption}
        src={props.img}
        alt={props.caption}
        width="250"
        height="250"
        className="h-auto left-0  m-0 min-h-[100%] w-[100%] absolute top-0 p-0 flex-grow -z-10 object-cover opacity-40 rounded-md "
      />
      <h2>{props.caption}</h2>
    </div>
  );
}

export default Card;
