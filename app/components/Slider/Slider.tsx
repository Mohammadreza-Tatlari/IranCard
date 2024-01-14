import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/navigation';

import { FreeMode, Pagination, Autoplay , EffectCoverflow , Navigation} from "swiper/modules";
import { dataSample } from "../ShopComponents/Shopping";
import ListingCard from "../ShopComponents/ListingCard";
import SliderCard from "./SliderCard";
import axios from "axios";

const sample = dataSample

export default function Slider() {
  const [isOff,setIsOff] = useState(false)
  const queried = useRef(false)
  useEffect(() => {
    if (!queried.current) {
      queried.current = true;
      const checkOff = async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IRANMTAURL}/shop/isThereOff?when=${Date.now()}`)
        setIsOff(response.data == true)
      }

      checkOff().catch(console.error)
    }
  },[])
  return (
    <div className="p-3 ">
      <div className="flex flex-col items-center justify-center h-auto">
          <Swiper
          navigation={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
              coverflowEffect={{
                  rotate: 50,
                  stretch: 0 ,
                  depth: 10,
                  modifier: 1,
                  slideShadows: false
              }}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              140: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              450:{
                slidesPerView: 3,
                spaceBetween: 5,
              },
              700: {
                slidesPerView: 5, //can be changed to 4
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, EffectCoverflow , Navigation]}
            className="lg:max-w-[80%] md:max-w-[80%] max-w-[100%]"
          >
            {sample.map((data:any) => (
              <SwiperSlide key={data.id}>
                <div className="mb-20 lg:pt-4 pt-28 md:pt-20">
                  {/* because data is being passed to components it may have some flaws */}
                   <SliderCard imageSrc={data.SliderImage} itemId={data.id} discount={data.discount.amount} isOff={isOff}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>       
      </div>
    </div>
  );
}
