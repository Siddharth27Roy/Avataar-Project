import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { Items } from '../../CarouselData/Data'
import '../Pages.css'

function Electronics() {

  const items = Items;
  const newItems = items.filter((item) => (item.Type === 'Electronics'))

  return (
    <div className='container'>
      <div className='inner-container'>
        <p className='title'>Electronics</p>
        <p className='para'>Explore and Discover a variety of products</p>
      </div>

      <Carousel items={newItems}/>
    </div>
  )
}

export default Electronics
