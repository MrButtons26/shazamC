import appleMusic from "../assets/appleMusic.svg";
export default function Banner() {
  return (
    <div className=" cursor-pointer bottom-0 fixed h-[60px] w-[100%] bg-[#d00000] px-10 flex py-2.5 justify-center">
      <img src={appleMusic} alt="" />
      <h1 className="ml-10 font-bold text-white mt-1.5 text-[16px]">
        Get up to 2 months free of Apple Music
        <span className="relative top-1 ml-1">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </span>
      </h1>
    </div>
  );
}
