import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import GalleryItem from '../../components/GalleryItem'

interface propsType {
  array: Array<{
    url: string
    title: string
    description: string
  }>
}

const Gallery: React.FC<propsType> = ({ array }) => {
  return (
    <ScrollView horizontal style={styles.row}>
      {array.map((curr, index) => (
        <GalleryItem
        key={index}
        title={curr.title}
        image={curr.url}
        hasTVPreferredFocus={index === 0}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 50
  }
})

export default Gallery
