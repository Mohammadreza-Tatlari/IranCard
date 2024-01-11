import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay , EffectCoverflow } from "swiper/modules";
import { dataSample } from "../ShopComponents/Shopping";
import ListingCard from "../ShopComponents/ListingCard";
const samples = dataSample;

export default function Slider({receivedData , usedInHome}:any) {


  return (
    <div className="p-3 ">
      <div className="flex flex-col items-center justify-center h-auto">
          <Swiper
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
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay , EffectCoverflow]}
            className="max-w-[%90] lg:max-w-[80%] "
          >
            {samples.map((data:any) => (
              <SwiperSlide key={data.id}>
                <div className="mb-20">
                  {/* because data is being passed to components it may have some flaws */}
                  <ListingCard
                    itemId={data.id}
                    title={data.title}
                    price={data.price}
                    discount={data.discount}
                    imageSrc={data.imagesrc}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>       
      </div>
    </div>
  );
}
