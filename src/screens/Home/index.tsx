import { StyleSheet, ScrollView, SafeAreaView, View } from 'react-native'
import React from 'react'
import { imagesEurope, imagesAfrican, imagesAmerican, imagesAsian } from '../../mock/images'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Gallery from '../../components/Gallery'

const Home: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Gallery array={imagesEurope} />
              <Gallery array={imagesAfrican}/>
              <Gallery array={imagesAmerican}/>
              <Gallery array={imagesAsian} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default Home
