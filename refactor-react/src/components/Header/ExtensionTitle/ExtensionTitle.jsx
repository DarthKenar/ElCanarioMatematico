import React from "react";
import "./ExtensionTitle.css"
export default function ExtensionTitle(props){
  return(
    <h1 className="extension-title">{props.name}</h1>
  )
}