import React from "react";
import { ListItem, ListIcon, Link} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function ExtensionsListItem(props){
  return(
      <ListItem>
          <ListIcon as={props.icon} color={props.colorIcon} />
          <Link href={props.url} isExternal>
            {props.name} <ExternalLinkIcon mx='2px' />
          </Link>
      </ListItem>
  )
}