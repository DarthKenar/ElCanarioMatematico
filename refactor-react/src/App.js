import './App.css';

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Footer/>
    </ChakraProvider>
  )
}

export default App;
