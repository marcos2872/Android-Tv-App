import React from 'react'
import { imagesEurope, imagesAfrican, imagesAmerican, imagesAsian } from '../../mock/images'
import Gallery from '../../components/Gallery'
import { Container, Main, Scroll } from './styled'

const Home: React.FC = () => {
  return (
      <Main>
        <Scroll
          contentInsetAdjustmentBehavior="automatic"
          >
            <Container>
              <Gallery array={imagesEurope} rowNumber={0} />
              <Gallery array={imagesAfrican}/>
              <Gallery array={imagesAmerican}/>
              <Gallery array={imagesAsian} />
          </Container>
        </Scroll>
      </Main>
  )
}

export default Home
