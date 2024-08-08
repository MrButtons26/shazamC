import Navbar from "../components/Navbar";
import { useInView } from "react-intersection-observer";
import phones from "../assets/phones.webp";
import qrCode from "../assets/qrcode.webp";
import { Link } from "react-router-dom";
import ListenButton from "../components/ListenButton";
import Banner from "../components/Banner";
import controlCenter from "../assets/controlCenter.webp";
import ios from "../assets/ios.webp";
import android from "../assets/android.webp";
import notification from "../assets/popup-android.webp";
import shazamBlack from "../assets/shazamBlack.svg";
import shazam from "../assets/shazam.png";
import snapchat from "../assets/snapchat.svg";
import watches from "../assets/watches.webp";
import Footer from "../components/Footer";
export default function AppsPage() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <>
      <Navbar inView={inView}></Navbar>
      <div
        ref={ref}
        className="pt-40 bg-[#f2f2f7a6] flex flex-col items-center
        "
      >
        <img
          src={phones}
          className="px-4  xl:max-w-[1100px] md:max-w-[600px] lg:max-w-[800px]"
          alt=""
        />
        <h1
          className="font-extrabold text-center text-[28px] mt-16 max-w-[600px] md:text-[40px]"
          style={{ fontFamily: "MyFont" }}
        >
          Identify, listen and discover songs with the Shazam app
        </h1>
        <h1 className="font-thin text-[17px] mt-2 max-w-[630px] text-center md:text-[20px]">
          Listen and add songs you discover to your Apple Music or Spotify
          playlists. Sing along with time-synced lyrics. Watch your favorite
          music videos with Apple Music or YouTube.
        </h1>
        <div className="flex mt-8 bg-white shadow-2xl  text-black gap-1 py-4  rounded-3xl w-[350px] md:w-[550px]">
          <img
            className="max-h-[120px]  rounded-2xl md:max-h-[160px]"
            src={qrCode}
            alt=""
          />
          <h1 className="font-bold py-2.5 text-[20px]">
            Download the free App <br />
            <span className="font-light text-[16px]">
              Scan the code with your smart phone camera to download the free
              app
              <br />
            </span>
            <span className="font-bold  text-[12px]">
              AVALIABLE ON <br />
            </span>
            <span className="text-blue-600 text-[16px]">
              <Link
                className=""
                to={
                  "https://apps.apple.com/us/app/shazam-find-music-concerts/id284993459?amp%3Bat=11l3eE&amp%3Bct=5348615A-616D-3235-3830-44754D6D5973"
                }
                target="blank"
              >
                {" "}
                <span>
                  iOS <ion-icon name="arrow-redo-outline"></ion-icon>
                </span>
              </Link>
              <Link
                to={
                  "https://play.google.com/store/apps/details?id=com.shazam.android"
                }
                target="blank"
              >
                {" "}
                <span>
                  Android <ion-icon name="arrow-redo-outline"></ion-icon>
                </span>
              </Link>
            </span>
          </h1>
        </div>
        <h1
          className="font-extrabold text-[28px] text-center  my-14 md:text-[32px]"
          style={{ fontFamily: "MyFont" }}
        >
          More ways to Identify and discover music
        </h1>
        <div className="flex mt-6 flex-wrap gap-8 justify-center w-[80%]">
          <div className="flex flex-col bg-white px-5 pt-5 rounded-3xl shadow-2xl grow max-w-[442px] ">
            <img src={controlCenter} className="max-w-[50px] mb-2" alt="" />
            <h1 className=" text-[20px]  " style={{ fontFamily: "MyFont" }}>
              Shazam on iOS Control Center
            </h1>
            <h1 className=" text-[15px]  text-gray-600">
              Identify songs directly from Control Center on your iPhone or on
              your iPad.
            </h1>
            <span
              className="mt-2 text-blue-600"
              style={{ fontFamily: "MyFont" }}
            >
              Learn more <ion-icon name="arrow-redo-outline"></ion-icon>
            </span>
            <img src={ios} className="max-w-[240px] mt-6 self-center" alt="" />
          </div>
          <div className="flex flex-col bg-white px-5 pt-5 rounded-3xl shadow-2xl grow max-w-[442px]">
            <img src={shazamBlack} className="max-w-[50px] mb-2" alt="" />
            <h1 className=" text-[20px]  " style={{ fontFamily: "MyFont" }}>
              Pop up Shazam on Android
            </h1>
            <h1 className=" text-[15px]  text-gray-600">
              Bring Shazam to your favorite Android apps with Pop Up Shazam
            </h1>
            <span
              className="mt-2 text-blue-600"
              style={{ fontFamily: "MyFont" }}
            >
              Learn more <ion-icon name="arrow-redo-outline"></ion-icon>
            </span>
            <img
              src={android}
              className="max-w-[240px] mt-6 self-center"
              alt=""
            />
          </div>

          <div className="flex flex-col bg-white px-5 pt-5 rounded-3xl shadow-2xl grow max-w-[442px] ">
            <img src={shazam} className="max-w-[50px] mb-2" alt="" />
            <h1 className=" text-[20px]  " style={{ fontFamily: "MyFont" }}>
              Shazam on Android Notification
            </h1>
            <h1 className=" text-[15px]  text-gray-600">
              Use Android Notification to identify music with a swipe and tap.
            </h1>
            <span
              className="mt-2 text-blue-600"
              style={{ fontFamily: "MyFont" }}
            >
              Learn more <ion-icon name="arrow-redo-outline"></ion-icon>
            </span>
            <img
              src={notification}
              className="max-w-[240px] mt-6 self-center"
              alt=""
            />
          </div>
          <div className="flex shadow-[#e9df2d] flex-col px-5 pt-5 rounded-3xl shadow-2xl grow max-w-[442px] bg-[#e9df2d] h-[590px]">
            <img
              src={snapchat}
              className="max-w-[140px] mb-2 mt-28 self-center"
              alt=""
            />
            <h1 className=" text-[20px]  pt-2" style={{ fontFamily: "MyFont" }}>
              Shazam on Snapchat
            </h1>
            <h1
              className=" text-[18px]  text-black"
              style={{ fontFamily: "MyFont" }}
            >
              Identify songs playing around you while on Snapchat
            </h1>
            <span
              className="mt-2 text-blue-600  mb-28"
              style={{ fontFamily: "MyFont" }}
            >
              Learn more <ion-icon name="arrow-redo-outline"></ion-icon>
            </span>
          </div>
          <div className="flex flex-wrap rounded-3xl shadow-black shadow-2xl max-w-[350px] bg-black grow gap-20 px-10 md:max-w-[900px] md:flex-nowrap">
            <h1
              className=" text-[30px] text-white  pt-10 md:pt-36"
              style={{ fontFamily: "MyFont" }}
            >
              Shazam from your wrist
              <br />
              <span className=" text-[16px]  text-white">
                Shazam is available for both Apple Watch and Android Wear .
              </span>
            </h1>

            <img
              src={watches}
              className="max-w-[250px] relative bottom-6 md:max-w-[400px]"
              alt=""
            />
          </div>
        </div>
        <div className="h-[100px] mt-20"></div>
      </div>
      <ListenButton></ListenButton>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}
