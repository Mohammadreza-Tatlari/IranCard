import React from 'react'
import ListingCard from './ListingCard'

export const dataSample = [
  {
    id: "0",
    title:"250",
    price: "5,000",
    imagesrc: '/images/5.png',
    discount: {
    isDiscounted: false ,
    amount: 20,
    discountedPrice: "50,000"} 
  },
  {
    id: "2",
    title:"500",
    price: "10,000",
    imagesrc: '/images/10.png',
    discount: {
    isDiscounted: false ,
    amount: 20,
    discountedPrice: "50,000"} 
    
  },
  {
    id: "3",
    title:"1000",
    price: "20,000",
    imagesrc: '/images/20.png',
    discount: {
    isDiscounted: false ,
    amount: 20,
    discountedPrice: "50,000"} 
    
  },
  {
    id: "4",
    title:"2000",
    price: "38,000",
    imagesrc: '/images/38.png',
    discount: {
    isDiscounted: true ,
    amount: 20,
    discountedPrice: "50,000"} 
    
  },
  {
    id: "5",
    title:"5000",
    price: "90,000",
    imagesrc: '/images/90.png',
    discount: {
    isDiscounted: true ,
    amount: 15,
    discountedPrice: "50,000"} 
    
  },
  {
    id: "6",
    title:"7500",
    price: "129,000",
    imagesrc: '/images/129.png',
    discount: {
    isDiscounted: true ,
    amount: 20,
    discountedPrice: "50,000"} 
    
  },
  {
    id: "7",
    title:"10000",
    price: "165,000",
    imagesrc: '/images/165.png',
    discount: {
    isDiscounted: true ,
    amount: 20,
    discountedPrice: "50,000"} 
  },
  {
    id: "8",
    title:"20000",
    price: "315,000",
    imagesrc: '/images/315.png',
    discount: {
    isDiscounted: true ,
    amount: 20,
    discountedPrice: "50,000"} 
    
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
