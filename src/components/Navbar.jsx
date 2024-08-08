import shazam from "../assets/shazam.svg";
import shazamBlack from "../assets/shazamBlack.svg";
import appleBlack from "../assets/appleBlack.svg";
import { Link } from "react-router-dom";
import apple from "../assets/apple.svg";

export default function Navbar({ inView }) {
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
            className={`merge-bold  ${
              inView == true ? `text-black` : `text-white `
            }`}
          >
            SHAZAM
          </h1>
        </Link>
        <Link to={"/apps"} className="my-font hover:border-b-[1px] pt-[1px]">
          GET THE APP
        </Link>
        <Link className="my-font hover:border-b-[1px] pt-[1px]">CONCERTS</Link>
        <Link className="my-font hover:border-b-[1px] pt-[1px]">CHARTS</Link>
        <Link className="my-font hover:border-b-[1px] pt-[1px]">
          RADIO SPINS
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <input
            type="text"
            className="outline-none bg-transparent pointer-events-none"
          />
          <button
            className={`text-[20px] ${
              inView === true ? `text-[#066bff]` : `text-white`
            }`}
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
        <button
          className={`flex text-[17px] font-semibold px-4 py-1.5 text-[#066bff]  rounded-lg ${
            inView === true ? `bg-[#066bff]` : `bg-white `
          }`}
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
    </div>
  );
}
