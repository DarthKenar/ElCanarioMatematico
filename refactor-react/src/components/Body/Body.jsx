import { useState, useEffect } from 'react';
import { Grid, GridItem, NumberInput, Divider, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Center } from "@chakra-ui/react"
import {ChevronRightIcon} from '@chakra-ui/icons'

export default function Body(){

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const [response, setResponse] = useState(0);

  useEffect(() => {
    const localVal1 = Number(localStorage.getItem('val1'));
    const localVal2 = Number(localStorage.getItem('val2'));
    const localVal3 = Number(localStorage.getItem('val3'));
    const localValResponse = Number(localStorage.getItem('response'));
    console.log(localVal1)
    console.log(localVal2)
    console.log(localVal3)
    console.log(localValResponse)
    if (localVal1) setVal1(localVal1);
    if (localVal2) setVal2(localVal2);
    if (localVal3) setVal3(localVal3);
    if (localValResponse) setResponse(localValResponse);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const debugString = `Guardando val1: ${val1}, val2: ${val2}, val3: ${val3}`;
      localStorage.setItem('debug', debugString);
      localStorage.setItem('val1', val1);
      localStorage.setItem('val2', val2);
      localStorage.setItem('val3', val3);
      localStorage.setItem('response', response);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [val1, val2, val3, response]); // Dependencias del useEffect

  useEffect(() => {
    let res = val1 !== 0 ? (val3 * val2) / val1 : 0;
    setResponse(!isNaN(res) ? res : 0);
  }, [val1, val2, val3]);

  return(
    <>
      <Grid templateColumns='repeat(7, 1fr)' gap={6}>
        <GridItem pl='2' colStart={1} colEnd={4} >
          <NumberInput value={val1} defaultValue={0} onChange={(valueString) => { setVal1(parseFloat(valueString)); }}>
            <NumberInputField/>
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <GridItem colStart={4} colEnd={4}>
          <Center height='40px'>
            <ChevronRightIcon/>
          </Center>
        </GridItem>
        <GridItem pr='2' colStart={5} colEnd={8}>
          <NumberInput value={val2} defaultValue={0} onChange={(valueString) => { setVal2(parseFloat(valueString)); }}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
      </Grid>
      <Center height='40px'>
        <Divider orientation='horizontal' />
      </Center>
      <Grid pb='4' templateColumns='repeat(7, 1fr)' gap={6}>
        <GridItem pl='2' colStart={1} colEnd={4} >
          <NumberInput value={val3} defaultValue={0} onChange={(valueString) => { setVal3(parseFloat(valueString)); }}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <GridItem colStart={4} colEnd={4}>
          <Center height='40px'>
            <ChevronRightIcon/>
          </Center>
        </GridItem>
        <GridItem pr='2' colStart={5} colEnd={8}>
          <NumberInput value={response}>
            <NumberInputField disabled/>
          </NumberInput>
        </GridItem>
      </Grid>
    </>
  )
}