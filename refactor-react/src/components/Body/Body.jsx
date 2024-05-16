import { useState, useEffect } from 'react';
import { Grid, GridItem, NumberInput, Divider, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Center } from "@chakra-ui/react"
import {ChevronRightIcon} from '@chakra-ui/icons'

export default function Body(){
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const [response, setResponse] = useState(0);

  useEffect(() => {
    let res = val1 !== 0 ? (val3 * val2) / val1 : 0;
    setResponse(!isNaN(res) ? res : 0);
  }, [val1, val2, val3]);

  return(
    <>
      <Grid templateColumns='repeat(7, 1fr)' gap={6}>
        <GridItem pl='2' colStart={1} colEnd={4} >
          <NumberInput defaultValue={0} onChange={(valueString) => { setVal1(parseFloat(valueString)); }}>
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
          <NumberInput defaultValue={0} onChange={(valueString) => { setVal2(parseFloat(valueString)); }}>
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
          <NumberInput defaultValue={0} onChange={(valueString) => { setVal3(parseFloat(valueString)); }}>
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