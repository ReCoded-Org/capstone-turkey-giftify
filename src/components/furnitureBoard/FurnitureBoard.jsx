import React from 'react';
import { useState} from 'react';

function FurnitureBoard ({setSearchValue, setAllItems}) {

  const [items, setItems] = useState([
    {itemName: "Shirt", gender: "Man", itemType: "Clothes"},
    {itemName: "Jaket", gender: "Boy", itemType: "Clothes"},
    {itemName: "bag", gender: "Woman", itemType: "Clothes"},
    {itemName: "Dress", gender: "Girl", itemType: "Clothes"}
  ])
  setSearchValue(items)

  const clothesItem = items.map((item,index) => { 
    return(
      <li key = {index} > Item {index +1 }: {item.itemType} {item.itemName} for {item.gender} </li> 
     )
  })

  return(
    <div>
      <h5>Clothes Board</h5>
      <ul>
        {clothesItem}
      </ul>
    </div>
  )
}

export default FurnitureBoard