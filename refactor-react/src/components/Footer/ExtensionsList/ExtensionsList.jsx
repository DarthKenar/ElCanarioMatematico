import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box,
    List
  } from '@chakra-ui/react'
import "./ExtensionsList.css"
import { MdCheckCircle, MdSettings } from "react-icons/md";
import ExtensionsListItem from "./ExtensionListItem/ExtensionListItem";
import ExtensionListItemCafesito from "./ExtemsionListItemCafesito/ExtensionListItemCafesito";
export default function ExtensionsList(){
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
            <ExtensionsListItem name="Regla de 3 Simple" icon={MdCheckCircle} colorIcon="green.500" url="https://chromewebstore.google.com/detail/regla-de-3-simple/pjdhmokbkjedajookmkadhanpombpinb"/>
            <ExtensionsListItem name="Promedio Simple" icon={MdCheckCircle} colorIcon="green.500" url="https://chromewebstore.google.com/detail/promedio-simple/anmkfmddehkanhkjoheklnkkhdinimkc"/>
            <ExtensionsListItem name="Promedio Ponderado (próximamente)" icon={MdSettings} colorIcon="orange.500" url="https://f-vega.com/"/>
            <ExtensionListItemCafesito/>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}