import React, { useState } from 'react';

function SearchSection ({searchValue}) {
    // console.log(searchValue)
    const [input, setInput] = useState ("");
    const [output, setOutput] = useState ([]);

    function handleChange(event){
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const searchResult = searchValue
        .filter((val) => {
              if(input == ""){
                return val
              } else if (val.itemName.toLowerCase().includes(input.toLowerCase())){
                return val
              } else if (val.itemType.toLowerCase().includes(input.toLowerCase())){
                return val
              }  else if (val.gender.toLowerCase().includes(input.toLowerCase())){
                return val
              }
            })
            .map((item,index) => { 
              return(
                <li key = {index} > Item {index +1 }: {item.itemType} {item.itemName} for {item.gender} </li> 
                  )
            })
            setOutput(searchResult)
    }

    return(
        <div>
            <h3>Or would you like to search for yourself ?</h3>
            <form onSubmit= {handleSubmit} >
                <label>
                    <input type="text" name="name" onChange={handleChange} value={input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {output}

        </div>
    )
}
export default SearchSection