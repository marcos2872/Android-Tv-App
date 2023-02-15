import React from 'react'
// import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import Routes from './routes'
import theme from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
