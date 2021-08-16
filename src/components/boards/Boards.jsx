import React, {useState} from "react";
import Cards from "../Cards/Cards";
import "./Board.css";

function Boards({ allItems , testSearchValue }) {
  const [selectedItems, setSelectedItems] = useState("")

 // Categories
   const category = Object.keys(allItems).map((categ, index) => {
    return (
      <button
       onClick = {(event) => {
            event.preventDefault();
            setSelectedItems(allItems[categ].map((info) => { return (info.itemName)}))
            setSelectedItems(categ) 
          }
          }
          key={index}>{categ}</button>
    )
  })

  // Filter Cards by search
  const cardsBySearch = Object.keys(allItems) 

  ////// Q /////////
  .filter((value) => {
    if (value.toLowerCase().includes(testSearchValue.toLowerCase())) {
      return value;
    } else  {
      return value;
    }
  })

  .map((item,index) => {
    return(
      <div key={index} className="oneCard">
        {allItems[item]
        .filter((value) => {
          if (testSearchValue === "") {
            return null;
          } else if (value.itemName.toLowerCase().includes(testSearchValue.toLowerCase())) {
            return value;
          } else if (value.condition.toLowerCase().includes(testSearchValue.toLowerCase())) {
            return value;
          }else {
            return null
          }
        })
        .map((info) => {
          return (
            <div key = {index}> 
            <div key = {index} className="cards">

             <h3>{info.itemName}</h3>
             <p>{info.description}</p>
             <p>{info.condition}</p>
             <br />
             <img className="itemImage" src={info.image} alt={info.itemName} />
           </div>    
           </div>
          )
        })}

      </div>
    )
  })

  //  filter Cards by category
  const items = Object.keys(allItems)
  .filter(type => type.includes(selectedItems) ) 
  .map((item,index) => {
    return(
      <div key={index} className="oneCard">

        {allItems[item].map((info) => {
          
          return (
            <div key = {index}> 
              {selectedItems === "" ? null : (
           
           <div key = {index} className="cards">

             <h3>{info.itemName}</h3>
             <p>{info.description}</p>
             <p>{info.condition}</p>
             <br />
             <img className="itemImage" src={info.image} alt={info.itemName} />

           </div>
       
         )}
            </div>
          )
        })}
      </div>
    )
  })

  return (
    <div>
    <Cards category= {category}  items = {items} cardsBySearch = {cardsBySearch}/>
    </div>
  );
}

export default Boards;
