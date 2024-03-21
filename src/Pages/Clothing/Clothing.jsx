import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { Items } from '../../CarouselData/Data'
import '../Pages.css'

function Clothing() {

  const items = Items;
  const newItems = items.filter((item) => (item.Type === 'Clothing'))

  return (
    <div className='container'>
      <div className='inner-container'>
        <p className='title'>Clothing</p>
        <p className='para'>Explore and Discover a variety of products</p>
      </div>

      <Carousel items={newItems}/>
    </div>
  )
}

export default Clothing
