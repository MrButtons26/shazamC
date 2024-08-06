import shazam from "../assets/shazam.png";
export default function ListenButton() {
  return (
    <div className="container-grid fixed bottom-20 right-10">
      <img className="max-h-[60px]" src={shazam} alt="" />
      <div className="bg-white w-[85px] h-[85px] rounded-full"></div>
    </div>
  );
}
