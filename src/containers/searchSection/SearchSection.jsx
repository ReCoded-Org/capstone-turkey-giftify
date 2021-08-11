import React, { useState } from 'react';
import Boards from '../../components/boards/Boards';
import "./SearchSection.css";

function SearchSection () {

    const [selectedItem, setSelectedItem] = useState([])

    // const [selectedCategory, setSelectedCategory] = useState([])
    console.log(selectedItem)



    const [input, setInput] = useState ("");
    const [output, setOutput] = useState ([]);

    function handleChange(event){
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const searchResult = selectedItem
        .filter((val) => {
              if(input === ""){
                return (val)
              } else if (val.item.toLowerCase().includes(input.toLowerCase())){
                return (val)
              } else if (val.type.toLowerCase().includes(input.toLowerCase())){
                return (val)
              }
            })
            .map((item) => { 
              return(
                <div key = {item.id}className = "oneCard"> 
                  <h3>{item.item}</h3> 
                  <p>Use Duration: {item.useDuration} </p>
                  <br/>
                  <img className = "itemImage"  src={item.imageURL} alt = "clothes" />
                </div>
                  )
            })
            setOutput(searchResult)
    }

    return(
        <div>
            <h2 className = "parag">Or would you like to search for yourself ?</h2>

            <form className = "form" onSubmit= {handleSubmit} >
                <label>
                    <input className = "searchBar" type="text" name="name" onChange={handleChange} value={input} />
                </label>
                <input className = "submit" type="submit" value="Submit" />
            </form>

            <div className = "cards">
            {output}
        </div>
            <div><Boards setSelectedItem = {setSelectedItem}  /></div>
        </div>
    )
}
export default SearchSection