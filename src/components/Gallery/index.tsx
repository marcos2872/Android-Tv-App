import React from 'react'
import GalleryItem from '../../components/GalleryItem'
import { Main, Scroll, Title } from './styled'

interface propsType {
  array: {
    name: string
    images: Array<{
      url: string
      title: string
      description: string
    }> }
  rowNumber?: number
}

const Gallery: React.FC<propsType> = ({ array, rowNumber }) => {
  return (
    <Main>
      <Title>{array.name}</Title>
      <Scroll horizontal>
        {array.images.map((curr, index) => (
          <GalleryItem
          key={index}
          title={curr.title}
          image={curr.url}
          hasTVPreferredFocus={rowNumber === 0 && index === 0}
          />
        ))}
      </Scroll>
    </Main>
  )
}

export default Gallery
