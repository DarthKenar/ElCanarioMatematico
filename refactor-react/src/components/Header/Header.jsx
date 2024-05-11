import React from "react";
import "./Header.css"
import { Flex, Box, Spacer } from '@chakra-ui/react'
import PortfolioLogoButton from "./PortfolioLogoButton/PortfolioLogoButton";
import ExtensionTitle from "./ExtensionTitle/ExtensionTitle";
import CrazySmile from "./CrazySmile/CrazySmile.jsx";
import "./Header.css"
export default function Header(){
    return(

        <Flex p='4'>
            <Box>
                <PortfolioLogoButton/>
            </Box>
            <Spacer/>
            <Box>
                <ExtensionTitle name="Esto es un Título"/>
            </Box>
            <Spacer/>
            <Box>
                <CrazySmile/>
            </Box>
        </Flex>
    )
}