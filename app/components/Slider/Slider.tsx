import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay , EffectCoverflow } from "swiper/modules";
import { dataSample } from "../ShopComponents/Shopping";
import ListingCard from "../ShopComponents/ListingCard";
const samples = dataSample;

export default function Slider({receivedData}:any) {

  // const [thisData , setThisData] = useState(receivedData)
  // useEffect(() => {
  //   if(receivedData){
  //   setThisData(receivedData)
  //   }
  // },[receivedData]);
  
  // useEffect(() => {
  //   const refreshTimer = setTimeout(() => {
  //     // Force a refresh by updating the state
  //     setThisData([...thisData]);
  //   }, 1000);

  //   // Clear the timer to avoid memory leaks
  //   return () => clearTimeout(refreshTimer);
  // }, [thisData]);

  
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
