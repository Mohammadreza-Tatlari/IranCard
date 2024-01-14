import React from 'react'
import ListingCard from './ListingCard'

//images of this data sample needs modification
export const dataSample = [
  {
    id: "1",
    title:"250",
    price: "5,000",
    imagesrc: '/slides/1.png', ///images/5.png
    SliderImage: '/slides/1.png',
    discount: {
    isDiscounted: false ,
    amount: 0,
    discountedPrice: "5,000"} 
  },
  {
    id: "2",
    title:"500",
    price: "10,000",
    imagesrc: '/slides/2.png', ///images/10.png
    SliderImage: '/slides/2.png',
    discount: {
    isDiscounted: false ,
    amount: 10,
    discountedPrice: "9,000"} 
    
  },
  {
    id: "3",
    title:"1000",
    price: "20,000",
    imagesrc: '/slides/3.png', ///images/20.png
    SliderImage: '/slides/3.png',
    discount: {
    isDiscounted: false ,
    amount: 20,
    discountedPrice: "16,000"} 
    
  },
  {
    id: "4",
    title:"2000",
    price: "38,000",
    imagesrc: '/slides/4.png', ///images/38.png
    SliderImage: '/slides/4.png',
    discount: {
    isDiscounted: true ,
    amount: 20,
    discountedPrice: "30,000"} 
    
  },
  {
    id: "5",
    title:"5000",
    price: "90,000",
    imagesrc: '/slides/5.png', ///images/5.png
    SliderImage: '/slides/5.png',
    discount: {
    isDiscounted: true ,
    amount: 20,
    discountedPrice: "72,000"} 
    
  },
  {
    id: "6",
    title:"7500",
    price: "129,000",
    imagesrc: '/slides/6.png', ///images/129.png
    SliderImage: '/slides/6.png',
    discount: {
    isDiscounted: true ,
    amount: 30,
    discountedPrice: "90,000"} 
    
  },
  {
    id: "7",
    title:"10000",
    price: "165,000",
    imagesrc: '/slides/7.png', ///images/165.png
    SliderImage: '/slides/7.png',
    discount: {
    isDiscounted: true ,
    amount: 30,
    discountedPrice: "116,000"} 
  },
  {
    id: "8",
    title:"20000",
    price: "315,000",
    imagesrc: '/slides/8.png', ///images/315.png
    SliderImage: '/slides/8.png',
    discount: {
    isDiscounted: true ,
    amount: 30,
    discountedPrice: "221,000"} 
    
  },
  
]
export default function Shopping() {
  return (
    <>
      <div className='h-full grid grid-cols-2 mx-1 xl:mx-32 2xl:mx-60 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {dataSample.map((data) => (
        <ListingCard key={data.title}
        itemId={data.id}
        title={data.title}
        price={data.price}
        discount={data.discount}
        imageSrc={data.imagesrc}/>
        ))}
        </div>
    </>
  )
}
