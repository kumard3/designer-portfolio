import * as React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="bg-black text-white w-full h-full font-WorkSansRegular">
      <Header />
      <About />
      <Work />
    </div>
  );
}
