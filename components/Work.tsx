import React from "react";
import Card from "./Card";

export default function Work() {
  const data = [
    "flex-row-reverse",
    "",
    "flex-row-reverse",
    "",
    "flex-row-reverse",
    "",
  ];
  return (
    <div id="work" className="min-h-screen px-4">
      <h1 className="uppercase text-start text-3xl py-5 font-WorkSansSemiBold text-gray-500">
        Selected <span className="text-white">Works</span>
      </h1>
      <div className=" flex flex-col  items-center  w-full ">
        {data.map((n, index) => {
          return <Card key={index} rev={n} />;
        })}
      </div>
    </div>
  );
}
