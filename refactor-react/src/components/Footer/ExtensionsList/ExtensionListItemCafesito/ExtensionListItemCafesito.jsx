import React from "react";

export default function ExtensionListItemCafesito(){
  return(
    <li>
      <a
        href="https://cafecito.app/darthkenar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          srcSet="https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x"
          src="https://cdn.cafecito.app/imgs/buttons/button_1.png"
          alt="Invítame un café en Cafesito.app"
        />
      </a>
    </li>
  )
}