import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/navigation';

import { FreeMode, Pagination, Autoplay , EffectCoverflow , Navigation} from "swiper/modules";
import { dataSample } from "../ShopComponents/Shopping";
import ListingCard from "../ShopComponents/ListingCard";
import SliderCard from "./SliderCard";

const sample = dataSample

export default function Slider() {

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
              340: {
                slidesPerView: 3,
                spaceBetween: 15,
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
            modules={[FreeMode, Pagination, Autoplay , EffectCoverflow , Navigation]}
            className="lg:max-w-[80%] md:max-w-[80%] sm:max-w-[80%] max-w-[80%]"
          >
            {sample.map((data:any) => (
              <SwiperSlide key={data.id}>
                <div className="mb-20 pt-4">
                  {/* because data is being passed to components it may have some flaws */}
                   <SliderCard imageSrc={data.SliderImage} itemId={data.id} discount={data.discount}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>       
      </div>
    </div>
  );
}
