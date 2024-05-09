import React from "react";
import { ListItem, ListIcon } from "@chakra-ui/react";

export default function ExtensionsListItem(props){
  return(
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <ListItem>
        <ListIcon as={props.icon} color={props.colorIcon} />
        {props.name}
      </ListItem>
    </a>
  )
}