import React from 'react'
import ListingCard from './ListingCard'

export const dataSample = [
  {
    id: "1",
    title:"200",
    price: 1000,
    discount: {
    isDiscounted: true ,
    amount: 20} 
  },
  {
    id: "2",
    title:"500",
    price: 200000,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    id: "3",
    title:"500",
    price: 30000,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    id: "4",
    title:"500",
    price: 40000,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    id: "5",
    title:"500",
    price: 450000,
    discount: {
    isDiscounted: true ,
    amount: 15} 
    
  },
  {
    id: "6",
    title:"500",
    price: 3600000,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    id: "7",
    title:"500",
    price: 2420000,
    discount: {
    isDiscounted: true ,
    amount: 20} 
  },
  {
    id: "8",
    title:"500",
    price: 500000,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  
]
export default function Shopping() {
  return (
    <>
      <div className='grid grid-cols-1 mx-16 xl:mx-44 2xl:mx-72 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      {dataSample.map((data) => (
        <ListingCard key={data.title}
        itemId={data.id}
        title={data.title}
        price={data.price}
        discount={data.discount}/>
        ))}
        </div>
    </>
  )
}
