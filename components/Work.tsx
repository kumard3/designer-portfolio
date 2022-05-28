import React from "react";
import Card from "./Card";

export default function Work() {
  return (
    <div
      id="work"
      className="bg-gray-900 flex flex-col  items-center min-h-screen w-full "
    >
      <h1>work</h1>
      <Card rev="reverse" />
      <Card rev="" />
      <Card rev="reverse" />
      <Card rev="" />
      <Card rev="reverse" />
    </div>
  );
}
