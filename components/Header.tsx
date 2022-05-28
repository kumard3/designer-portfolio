/* eslint-disable react/no-unescaped-entities */
import NavComponent from "./NavComponent";

export default function Header() {
  return (
    <>
      <NavComponent />
      <div id="home" className="h-screen w-full">
        <div className=" px-4 h-full flex justify-center flex-col items-center text-center">
          <h1 className="font-WorkSansRegular flex flex-col text-gray-500  text-4xl lg:text-6xl">
            <span>
              I'm a designer specialising in
              <span className="px-2 font-WorkSansSemiBold text-white">
                UI/UX
              </span>
              and
            </span>
            <>
              <span className="px-2 font-WorkSansSemiBold text-white">
                Interaction Design
              </span>
            </>
          </h1>
        </div>
      </div>
    </>
  );
}
