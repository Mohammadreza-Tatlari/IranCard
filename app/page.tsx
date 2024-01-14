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
      <div className="min-h-screen bg-[url('https://f4.bcbits.com/img/a0675344416_16.jpg')] bg-cover bg-center ">
        <div className="bg-slate-400/40 min-h-screen">
        <div className="h-full pt-3 pb-14 ">
        <Slider/>
          {/* {
            windowsSize > 1024 &&
           <Slider/>
          }
          {
            windowsSize < 1024 &&
            <Shopping />
          }
          <Shopping /> */}
        </div>
        </div>
      </div>
    </>
  );
}
