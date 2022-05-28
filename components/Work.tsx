import React from "react";
import Card from "./Card";

export default function Work() {
  return (
    <div id="work" className="min-h-screen px-4">
      <h1 className="uppercase text-start text-xl">Selected Works</h1>
      <div className=" flex flex-col  items-center  w-full ">
        <Card rev="reverse" />
        <Card rev="" />
        <Card rev="reverse" />
        <Card rev="" />
        <Card rev="reverse" />
      </div>
    </div>
  );
}
