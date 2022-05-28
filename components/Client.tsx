/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Client() {
  const image = ["/Airbnb.svg", "/FedEx.svg", "/Google.svg", "/Microsoft.svg"];
  return (
    <div className="container mx-auto px-5 text-xl flex flex-col items-start">
      <h1>Some of the clients I have designed for</h1>
      <div className="flex justify-between px-5 container mx-auto flex-wrap py-5">
        {image.map((n, index) => {
          return (
            <img
              key={index}
              src={n}
              alt="image"
              width="140"
              height="140"
              className="cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
}
