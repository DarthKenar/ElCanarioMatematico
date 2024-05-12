import './App.css';

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Container } from '@chakra-ui/react'

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Body from './components/Body/Body.jsx';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Container maxW='2xl'>
        <Body/>
      </Container>
      <Footer/>
    </ChakraProvider>
  )
}

export default App;
