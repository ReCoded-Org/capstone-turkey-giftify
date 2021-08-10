import React , {useState} from 'react';
import ClothesBoard from '../../components/clothesBoard/ClothesBoard';

function FilterBar ({searchValue}) {
console.log(searchValue)
    const [clothesSelection, setClothesSelection] = useState(false)
    
    
    function selectedComponent(){
          return (
              <div>{searchValue.map((item,index) => { 
                return(
                  <li key = {index} > Item {index +1 }: {item.itemType} {item.itemName} for {item.gender} </li> 
                    )
              })}</div>
          )
    }
    


return (
    <div>        
        <button onClick ={(event) => {event.preventDefault(); setClothesSelection(true)}}>Clothes</button>
        <button onClick ={(event) => {event.preventDefault(); setClothesSelection(false) }}>Furniture</button>
        <button onClick ={(event) => {event.preventDefault(); setClothesSelection(false)}}>Electrical Supplies</button>
        <button onClick ={(event) => {event.preventDefault();setClothesSelection(true) }}>All</button>    
  
        {clothesSelection ? selectedComponent() : null}
    </div>
  
)
}

export default FilterBar