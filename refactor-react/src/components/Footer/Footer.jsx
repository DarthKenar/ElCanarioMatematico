import React from "react";
import "./Footer.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
    List, ListItem, ListIcon
  } from '@chakra-ui/react'
import { MdCheckCircle, MdSettings } from "react-icons/md";

export default function Footer(){
    return(
        <Accordion allowToggle>
        <AccordionItem>
            <h2>
                <AccordionButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="svg-title"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                    <Box as='span' flex='1' textAlign='left'>
                    Más extensiones
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <List spacing={3}>
                    <a href="https://chromewebstore.google.com/detail/regla-de-3-simple/pjdhmokbkjedajookmkadhanpombpinb" target="_blank" rel="noopener noreferrer">
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Regla de 3 Simple
                        </ListItem>
                    </a>
                    <a href="https://chromewebstore.google.com/detail/promedio-simple/anmkfmddehkanhkjoheklnkkhdinimkc" target="_blank" rel="noopener noreferrer">
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Promedio Simple
                        </ListItem>
                    </a>
                    <a href="https://f-vega.com/" title="promedio ponderado" target="_blank" rel="noopener noreferrer">
                        <ListItem>
                            <ListIcon as={MdSettings} color='orange.500' />
                            Promedio ponderado (próximamente)
                        </ListItem>
                    </a>
                </List>
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
    )

}