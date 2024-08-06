import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Banner from "../components/Banner";
import ListenButton from "../components/ListenButton";
export default function HomePage() {
  const [it, setIt] = useState(false);
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
      <div ref={ref} className="h-[700px] bg-black text-white">
        {inView && "hello"}
      </div>
      <ListenButton></ListenButton>
      <Banner></Banner>
    </>
  );
}
