import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";
import { countryData } from "../tempDate";
import { colorCarousel } from "../components/colorCarousel";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import playBtn from "../assets/playBtn.svg";
import { musicData } from "../tempDate";
import MusicPlayer from "../components/MusicPlayer.jsx";
export default function ChartsPage() {
  const [country, setCountry] = useState("India");
  const [color, setColor] = useState(" ");
  const [toggleDropDown, setToggleDropDown] = useState(false);
  useEffect(() => {
    setColor(colorCarousel[Math.floor(Math.random() * 14)]);
  }, [country]);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  return (
    <>
      <div className={``} style={{}}>
        <Navbar inView={inView} charts={true}></Navbar>

        <div
          className="pt-[120px] pb-[20px] glass-effect-carousel flex "
          style={{
            backgroundColor: color,
          }}
        >
          <div className="flex px-6  w-[100%] justify-evenly">
            <div className="flex flex-col gap-y-16">
              <div className="relative w-[260px] min-w-[260px] h-[45px] rounded-lg glass-effect-chartSearch flex items-center justify-between px-5 text-white">
                <h1 className="my-font text-[16px]">{country}</h1>
                <button
                  id="abs"
                  className="text-[18px]"
                  onClick={() => {
                    setToggleDropDown(!toggleDropDown);
                  }}
                >
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </button>
                <div
                  className={` rounded-lg absolute h-[402px]  w-[260px]  bg-white top-[55px] left-[0px] overflow-y-scroll px-3 my-font text-[16px] text-black shadow-xl shadow-blue-100 ${
                    toggleDropDown === false
                      ? `chartSearch-toggle`
                      : `chartSearch-toggle-active`
                  }`}
                >
                  <ul>
                    <li
                      className="py-1 px-2 hover:bg-[#0000001a] rounded-lg"
                      onClick={() => {
                        setCountry("Global");
                      }}
                    >
                      Global
                    </li>
                    {countryData.countries.map((el, i) => (
                      <li
                        className="py-1 px-2 rounded-lg hover:bg-[#0000001a]"
                        key={i}
                        onClick={() => {
                          setCountry(el.name);
                        }}
                      >
                        {el.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-x-10">
                <img
                  src={playBtn}
                  className="border-2 h-[60px] bg-white mt-8 rounded-full"
                  alt=""
                />
                <h1 className="text-white my-font text-[22px]">
                  {country}
                  <br />
                  <span className=" text-[38px]">Top 200</span>
                  <br />
                  <h2 className="relative opacity-50 text-white my-font text-[16px]">
                    The most Shazamed tracks in{" "}
                    {country === "Global" ? "World" : `${country}`} this week
                  </h2>
                  <br />
                  <button className="bg-white text-black text-[16px] px-2.5 py-2 rounded-xl">
                    Top 200
                  </button>
                </h1>
              </div>
            </div>
            <h1 className="text-[16px] my-font text-white flex gap-1 self-end">
              <span className="text-[20px]">
                <ion-icon name="download-outline"></ion-icon>
              </span>
              DOWNLOAD CSV
            </h1>
          </div>
        </div>
      </div>
      <div ref={ref} className="mt-[520px] h-[200px] bg-red-400"></div>
      <MusicPlayer></MusicPlayer>
      <Footer></Footer>
    </>
  );
}
