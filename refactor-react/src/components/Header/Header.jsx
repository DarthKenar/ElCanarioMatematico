import React from "react";
import "./Header.css"
import { Flex, Box, Spacer } from '@chakra-ui/react'

export default function Header(){
    return(
        <Flex>
            <Box>
                <button>A</button>
            </Box>
            <Spacer/>
            <Box>
                <button>B</button>
            </Box>
            <Spacer/>
            <Box>
                <button>C</button>
            </Box>
        </Flex>
    )
}