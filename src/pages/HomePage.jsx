import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Banner from "../components/Banner";
import bg from "../assets/bg.jpg";
import ListenButton from "../components/ListenButton";
import shazamRadio from "../assets/icons8-shazam-logo.svg";
export default function HomePage() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  return (
    <>
      <div className="main-bgColor">
        <Navbar inView={inView}></Navbar>
        <Main></Main>
      </div>
      <div
        ref={ref}
        className="bg-[#f2f2f7a6] text-white py-20  flex justify-center px-14"
      >
        <div
          className="grow bg-image bg-cover max-w-[1100px] rounded-3xl flex flex-col py-12 px-10 cursor-pointer items-start"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <img className="w-[90px] h-[90px]" src={shazamRadio} alt="" />
          <h1 className="text-black text-[16px] font-light md:text-[20px]">
            New &#183; <span className="">Radio Spins</span>
          </h1>
          <h1 className="text-black text-[20px] font-extrabold opacity-70 md:text-[28px]">
            Check out Shazam's new airplay charts.
          </h1>
          <h1 className="text-black text-[20px] font-extrabold md:text-[28px]">
            Discover current global radio trends.
          </h1>
          <button
            className="mt-5 bg-transparent  px-5  py-2 rounded-lg font-bold text-black shadow-xl md:mt-10 "
            style={{ border: "1px solid black" }}
          >
            View Now
          </button>
        </div>
      </div>
      <ListenButton></ListenButton>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}
