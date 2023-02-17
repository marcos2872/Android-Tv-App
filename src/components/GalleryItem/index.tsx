import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { Main, Image, Description } from './styled'

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
    <Main
      onFocus={onFocus}
      onBlur={onBlur}
      hasTVPreferredFocus={hasTVPreferredFocus}
    >
      <View>
        <Image
          source={{ uri: image }}
        />
        {/* {focus && ( */}
          <Description>
            {title}
          </Description>
        {/* )} */}
      </View>
    </Main>
  )
}

export default GalleryItem
