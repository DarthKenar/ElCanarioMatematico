import './App.css';

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Container } from '@chakra-ui/react'

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Container maxW='2xl'>
        Contenido de la extension
      </Container>
      <Footer/>
    </ChakraProvider>
  )
}

export default App;
