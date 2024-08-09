import shazam from "../assets/shazam.svg";
import shazamBlack from "../assets/shazamBlack.svg";
import appleBlack from "../assets/appleBlack.svg";
import { Link } from "react-router-dom";
import apple from "../assets/apple.svg";
import { useState } from "react";

export default function Navbar({ inView }) {
  const [srchBtn, setSrchBtn] = useState(false);
  const [navBtn, setNavBtn] = useState(false);

  return (
    <div
      className={`py-3 flex justify-evenly items-center  top-0 left-0 right-0 z-[1] transition-all duration-500   fixed ${
        inView === true ? "text-black bg-white shadow-2xl" : `text-white `
      }`}
    >
      <div className="flex gap-8 items-center">
        <Link to={"/"} className="flex gap-1.5 mr-2 items-center">
          <img
            src={inView === false ? shazam : shazamBlack}
            className=""
            alt=""
          />
          <h1
            className={`merge-bold text-[18px]  ${
              inView == true ? `text-black` : `text-white `
            } lg:text-[22px]`}
            style={{ font: "MyFont" }}
          >
            SHAZAM
          </h1>
        </Link>
        <Link
          to={"/apps"}
          className="hidden my-font hover:border-b-[1px] pt-[1px] lg:block"
        >
          GET THE APP
        </Link>
        <Link className="hidden my-font hover:border-b-[1px] pt-[1px] lg:block">
          CONCERTS
        </Link>
        <Link className=" hidden my-font hover:border-b-[1px] pt-[1px] lg:block">
          CHARTS
        </Link>
        <Link className=" hidden my-font hover:border-b-[1px] pt-[1px] lg:block">
          RADIO SPINS
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <div
          className={`relative right-5 flex items-center transition-all duration-300 px-4 py-1 ${
            srchBtn === true ? `  rounded-md glass-effect-search` : ``
          } lg:right-0`}
        >
          <input
            type="text"
            placeholder={`${
              srchBtn === true ? "Search for Music" : `Search for Music`
            }`}
            className={` w-[175px]   outline-none bg-transparent transition-all duration-300 ${
              srchBtn === false
                ? `pointer-events-none opacity-0`
                : `opacity-100`
            } ${
              inView === false
                ? `placeholder-white text-white`
                : `text-black placeholder-black`
            } lg:w-[250px]`}
          />
          <button
            onClick={() => {
              setSrchBtn(!srchBtn);
            }}
            className={`text-[20px] ml-3 ${
              inView === true ? `text-[#066bff]` : `text-white`
            }`}
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        <button
          className={`hidden  text-[17px] font-semibold px-4 py-1.5 text-[#066bff]  rounded-lg ${
            inView === true ? `bg-[#066bff]` : `bg-white `
          } lg:flex `}
        >
          <span
            className={`text-[14px]  font-bold mr-2 pt-0.5 ${
              inView && `text-white`
            }`}
          >
            CONNECT
          </span>
          <span>
            <img
              src={inView === false ? apple : appleBlack}
              className="pt-1"
              alt=""
            />
          </span>

          <span className={`text-[16px] font-bold ${inView && `text-white`}`}>
            Music
          </span>
        </button>
      </div>
      <button
        onClick={() => {
          setNavBtn(!navBtn);
        }}
        className={`absolute right-1 opacity-100  text-[36px] pointer-events-cursor lg:pointer-events-none lg:opacity-0 ${
          inView === true ? `text-[#066bff]` : `text-white`
        }`}
      >
        <ion-icon name="reorder-three-outline"></ion-icon>
      </button>
      <div
        className={`absolute top-0  w-[100vw] h-[100vh] bg-black transition-all duration-500 ease-in-out ${
          navBtn === true ? `right-0` : `right-[-100vw]`
        }`}
      >
        <div className="flex px-8 justify-between pt-4">
          {" "}
          <h1
            className={`text-white font-bold text-[22px]`}
            style={{ font: "MyFont" }}
          >
            <img src={shazam} className="inline px-2" alt="" />
            SHAZAM
          </h1>
          <button
            className="text-white text-[30px]"
            onClick={() => {
              setNavBtn(!navBtn);
            }}
          >
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
        </div>
        <div className="flex flex-col text-white font-semibold mx-20 mt-20 gap-y-6 text-[22px]">
          <Link
            onClick={() => {
              setNavBtn(!navBtn);
            }}
            to={"/apps"}
            className="  hover:border-b-[1px] pt-[1px] "
          >
            GET THE APP
          </Link>
          <Link
            onClick={() => {
              setNavBtn(!navBtn);
            }}
            className="  hover:border-b-[1px] pt-[1px] "
          >
            CONCERTS
          </Link>
          <Link
            onClick={() => {
              setNavBtn(!navBtn);
            }}
            className="  hover:border-b-[1px] pt-[1px] "
          >
            CHARTS
          </Link>
          <Link
            onClick={() => {
              setNavBtn(!navBtn);
            }}
            className="  hover:border-b-[1px] pt-[1px] "
          >
            RADIO SPINS
          </Link>
        </div>
        <h1 className="mx-8 px-4 rounded-2xl items-center flex text-white justify-center mt-16 gap-6 bg-[#4b4a4a77] py-10 flex-wrap text-center">
          Connect to Apple Music to play songs in full within Shazam.{" "}
          <button className={`flex px-4 py-1 bg-gray-600 rounded-lg`}>
            <span className={`text-[14px]  font-bold mr-2 pt-0.5`}>
              CONNECT
            </span>
            <span>
              <img src={apple} className="pt-1" alt="" />
            </span>

            <span className={`text-[16px] pl-1 font-bold`}>Music</span>
          </button>
        </h1>
      </div>
    </div>
  );
}
