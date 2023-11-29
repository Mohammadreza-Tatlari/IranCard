import React from 'react'
import ListingCard from './ListingCard'

const dataSample = [
  {
    title:"200",
    price: 10,
    discount: {
    isDiscounted: true ,
    amount: 20} 
  },
  {
    title:"500",
    price: 20,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    title:"500",
    price: 20,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    title:"500",
    price: 20,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    title:"500",
    price: 20,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    title:"500",
    price: 20,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  {
    title:"500",
    price: 20,
    discount: {
    isDiscounted: true ,
    amount: 20} 
  },
  {
    title:"500",
    price: 20,
    discount: {
    isDiscounted: true ,
    amount: 20} 
    
  },
  
]
export default function Shopping() {
  return (
    <>
      <div className='pt-24 grid grid-cols-1 mx-16 xl:mx-44 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {dataSample.map((data) => (
        <ListingCard key={data.title}
        title={data.title}
        price={data.price}
        discount={data.discount}/>
        ))}
        </div>
    </>
  )
}
