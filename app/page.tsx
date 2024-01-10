'use client'
import Slider from "./components/Slider/Slider";
import Shopping, { dataSample } from "./components/ShopComponents/Shopping";

let windowsSize = window.innerWidth;

const changeSize = () =>{
 windowsSize = window.innerWidth
}

//checks whether the size of the page has changed and update the windowsSize
window.addEventListener('resize' , changeSize);

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-t from-[#04141c] to-[#15233b]">
        <div className="h-full pt-3 pb-14 ">
          {
            windowsSize > 1024 &&
           <Slider receivedData={dataSample}/>
          }
          {
            windowsSize < 1024 &&
            <Shopping />
          }
          {/* <Shopping /> */}
        </div>
      </div>
    </>
  );
}
