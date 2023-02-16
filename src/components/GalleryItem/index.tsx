import React, { useCallback, useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const GalleryItem: React.FC<{ title: string, image: string, hasTVPreferredFocus: boolean }> = ({ title, image, hasTVPreferredFocus }) => {
  const [focus, setFocus] = useState(false)

  const onFocus = useCallback(() => {
    console.log('Focused item ', title)
    setFocus(true)
  }, [title])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [title])

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}

      style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
    >
      <View>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
        {focus && (
          <Text>
            {title}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 5,
    borderRadius: 15,
    marginHorizontal: 10
  },
  wrapperFocused: {
    borderColor: 'rgb(232, 65, 175)'
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default GalleryItem
