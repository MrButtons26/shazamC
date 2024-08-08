import shazamBlack from "../assets/shazamBlack.svg";
import bg from "../assets/bg.jpg";
import appStore from "../assets/appStore.png";
import chromeStore from "../assets/chromeStore.png";
import galaxyStore from "../assets/galaxyStore.webp";
import androidStore from "../assets/googleplay.png";
import facebook from "../assets/ifacebook.svg";
import x from "../assets/ix.png";
import instagram from "../assets/iinstagram.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div
      className=" flex py-32 px-28 flex-wrap justify-center gap-x-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col " style={{ flexGrow: 2 }}>
        <h1 className="">
          <img src={shazamBlack} className="w-[50px] inline pb-2" alt="" />
          <span
            className="ml-1 text-black text-[24px]"
            style={{ fontFamily: "MyFont" }}
          >
            Shazam
          </span>
        </h1>
        <div
          className="grid gap-4 pt-8"
          style={{
            gridTemplateColumns: "150px 150px",
            gridTemplateRows: "60px 60px",
          }}
        >
          <img
            src={androidStore}
            className="h-[46px] rounded-lg  shadow-xl "
            alt=""
            style={{ border: "1px solid gray" }}
          />
          <img src={appStore} className="h-[47px] shadow-xl" alt="" />
          <img
            src={chromeStore}
            className="h-[44px]  rounded-lg shadow-xl"
            alt=""
            style={{ border: "1px solid white" }}
          />
          <img src={galaxyStore} className="h-[45px] shadow-xl" alt="" />
        </div>
      </div>
      <div
        className="grid gap-4 "
        style={{
          gridTemplateColumns: "160px 160px",
          flexGrow: "2",
        }}
      >
        <div className="">
          <ul
            className=" text-[16px] text-[#000000cc]"
            style={{ fontFamily: "MyFont" }}
          >
            <li
              className=" mb-3  opacity-100 font-bold text-black text-[22px]"
              style={{ fontFamily: "MyFont" }}
            >
              Company
            </li>
            <li className=" cursor-pointer hover:bg-white rounded-md">
              About Us
            </li>
            <li className=" cursor-pointer hover:bg-white rounded-md">Apps</li>
            <li className=" cursor-pointer hover:bg-white rounded-md">
              Careers
            </li>
            <li className=" cursor-pointer hover:bg-white rounded-md">
              Help for Apple Devices
            </li>
            <li className=" cursor-pointer hover:bg-white rounded-md">
              Help for Android Devices
            </li>
            <li className=" cursor-pointer hover:bg-white rounded-md">
              ShazamKit for Developers
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <ul
            className=" text-[16px] text-[#000000cc]"
            style={{ fontFamily: "MyFont" }}
          >
            <li
              className=" mb-3  opacity-100 font-bold text-black text-[22px]"
              style={{ fontFamily: "MyFont" }}
            >
              Legal
            </li>
            <li className=" cursor-pointer hover:bg-white rounded-md">Terms</li>
            <li className=" cursor-pointer hover:bg-white rounded-md">
              Privacy Policy
            </li>
            <li className=" cursor-pointer hover:bg-white rounded-md">
              Manage Your Data
            </li>
            <li className=" cursor-pointer hover:bg-white rounded-md">
              My Library
            </li>
          </ul>
        </div>
      </div>
      <div
        className=" text-[20px] text-[#000000cc] mt-8 flex flex-col"
        style={{ fontFamily: "MyFont", flexGrow: 0 }}
      >
        <h1 className="text-center">Follow Us</h1>
        <div className="flex gap-2 self-center">
          <Link to={"https://www.facebook.com/Shazam"} target="blank">
            <img src={facebook} alt="" />
          </Link>
          <Link to={"https://x.com/shazam"} target="blank">
            <img src={x} alt="" />
          </Link>
          <Link to={"https://www.instagram.com/shazam/"} target="blank">
            <img src={instagram} alt="" />
          </Link>
        </div>
        <h1 className=" text-[16px] mt-3 text-center">
          © Copyright 2024 Apple Inc. and its affiliates |{" "}
          <span className=" underline ml-2">Supplier Responsibility</span>
        </h1>
      </div>
    </div>
  );
}
