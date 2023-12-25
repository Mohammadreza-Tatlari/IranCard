'use client'
import Shopping from "./components/ShopComponents/Shopping";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-[#04141c] to-[#15233b]">
        <div className="min-h-screen pt-3 pb-28 ">
          {/* <Shopping /> */}
          <Slider />
        </div>
      </div>
    </>
  );
}
