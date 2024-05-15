import { Grid, GridItem, NumberInput, Divider, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Center } from "@chakra-ui/react"
export default function Body(){
  return(
    <>
      <Grid templateColumns='repeat(7, 1fr)' gap={6}>
        <GridItem pl='2' colStart={1} colEnd={4} >
          <NumberInput defaultValue={15} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <GridItem colStart={4} colEnd={4}>
          <Center height='50px'>
            <Divider orientation='vertical' bg='red' />
          </Center>
        </GridItem>
        <GridItem pr='2' colStart={5} colEnd={8}>
          <NumberInput defaultValue={15} min={0}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
      </Grid>
      <Divider orientation='horizontal' />
      <Grid templateColumns='repeat(7, 1fr)' gap={6}>
        <GridItem pl='2' colStart={1} colEnd={4} >
          <NumberInput defaultValue={15} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <GridItem colStart={4} colEnd={4}>
          <Center height='50px'>
            =>
          </Center>
        </GridItem>
        <GridItem pr='2' colStart={5} colEnd={8}>
          <NumberInput defaultValue={15} min={0}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
      </Grid>
    </>
  )
}