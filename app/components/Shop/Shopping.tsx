import React from 'react'
import ListingCard from './ListingCard'

const dataSample = [
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
  {
    name: 'name1',
  },
]
export default function Shopping() {
  return (
    <>
      <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
      {dataSample.map((data) => (
        <ListingCard key={data.name}/>
        ))}
        </div>
    </>
  )
}
