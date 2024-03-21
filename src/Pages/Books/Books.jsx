import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { Items } from '../../CarouselData/Data'
import '../Pages.css'

function Books() {

  const items = Items;
  const newItems = items.filter((item) => (item.Type === 'Books'))

  return (
    <div className='container'>
      <div className='inner-container'>
        <p className='title'>Books</p>
        <p className='para'>Explore and Discover a variety of products</p>
      </div>

      <Carousel items={newItems}/>
    </div>
  )
}

export default Books
