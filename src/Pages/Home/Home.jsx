import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { FeaturedItems } from '../../CarouselData/Data';
import '../Pages.css'

function Home() {

  const items = FeaturedItems;

  return (
    <div className='container'>
      <div className='inner-container'>
        <p className='title'>Featured Products</p>
        <p className='para'>Explore and Discover a variety of products</p>
      </div>

      <Carousel items={items}/>
    </div>
  )
}

export default Home
