import shazam from "../assets/group.webp";
import qrCode from "../assets/qrcode.webp";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      {" "}
      <div className=" z-[-1] pt-36 pb-28">
        <div className="flex justify-center flex-wrap mx-8 md:gap-20">
          <img src={shazam} className=" max-h-[650px]" alt="" />
          <div className="flex flex-col md:mt-28">
            <h1 className="text-[30px] font-bold text-white md:text-[50px]">
              Name songs in <br />
              seconds
            </h1>
            <h1 className="text-[16px] text-white font-semibold md:text-[20px]">
              Find music, concerts and more with Shazam
            </h1>
            <div className="flex mt-8 glass-effect text-white gap-6 py-4 px-4 rounded-3xl">
              <img className="max-h-[100px] rounded-2xl" src={qrCode} alt="" />
              <h1 className="font-semibold">
                Get the app <br />
                <span className="font-light">
                  Scan the code with your smart phone
                  <br />
                  camera to download the free app
                </span>
              </h1>
            </div>
            <h1 className="mt-3 text-[#dfdada] text-[13px]">
              Avaliable on{" "}
              <span className="underline text-white">
                <Link
                  className=""
                  to={
                    "https://apps.apple.com/us/app/shazam-find-music-concerts/id284993459?amp%3Bat=11l3eE&amp%3Bct=5348615A-616D-3235-3830-44754D6D5973"
                  }
                  target="blank"
                >
                  IOS
                </Link>
              </span>
              ,
              <span className="underline text-white">
                <Link
                  to={
                    "https://play.google.com/store/apps/details?id=com.shazam.android"
                  }
                  target="blank"
                >
                  Android
                </Link>
              </span>
              , and more devices
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
