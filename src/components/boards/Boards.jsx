import React, {useState, useEffect} from "react"
import { items } from "../AllItems/AllItems"
import "./Board.css";
function Boards ({setSelectedItem, setSelectedCategory}){

    const [selecetBoerd, setSelecetBoerd] = useState("")

    const allIems = items.map(item=> { return (item) })
    // const catagories = items.map(item=> { return (item.type) })

    useEffect(() => {
        setSelectedItem(allIems)
    }, [])
    // setSelectedItem(allIems)
    // setSelectedCategory(catagories)

    //Household Appliances Items
    const householdAppliances = items
    .filter( item => item.type === "Household Appliances" )
    .map(item=> {
    return (
        <div key = {item.id} className = "oneCard"> 
            <h3>{item.item}</h3> 
            <p>Use Duration: {item.useDuration} </p>
            <br/>
            <img className = "itemImage"  src={item.imageURL} alt = "Household Appliances" />
        </div>)    
    })

     // Furniture Items
    const furniture = items
    .filter( item => item.type === "Furniture" )
    .map(item=> {
        return (
        <div key = {item.id} className = "oneCard"> 
            <h3>{item.item}</h3> 
            <p>Use Duration: {item.useDuration} </p>
            <br/>
            <img className = "itemImage"  src={item.imageURL} alt = "furniture" />
        </div>)
    })

    // Clothes Items
    const clothes = items
    .filter( item => item.type === "Clothes" )
    .map(item=> {
        return (
        <div key = {item.id} className = "oneCard"> 
            <h3>{item.item}</h3> 
            <p>Use Duration: {item.useDuration} </p>
            <br/>
            <img className = "itemImage"  src={item.imageURL} alt = "clothes" />
        </div>)    
    })
 
     return ( 
    <div>
        <div className = "categories">
            <button className = "oneCategory householdAppliances" onClick ={(event) => {event.preventDefault(); setSelecetBoerd("householdAppliances")}}>Household Appliances</button>
            {selecetBoerd === "householdAppliances" ?
            <div>
            <h2>Household Appliances</h2>
            <div className = "cards">
                {householdAppliances}
            </div>
            </div>
            : null
            }
            <button className = "oneCategory furniture" onClick ={(event) => {event.preventDefault(); setSelecetBoerd("furniture")}}>Furniture</button>
            {selecetBoerd === "furniture" ?
            <div>
            <h2>Furniture</h2>
            <div className = "cards">
                {furniture}
            </div>
            </div>
            : null
            }
            <button className = "oneCategory clothes" onClick ={(event) => {event.preventDefault(); setSelecetBoerd("clothes")}}>Clothes</button>
            {selecetBoerd === "clothes" ?
            <div>
            <h2>Clothes</h2>
            <div className = "cards">
            {clothes}
            </div>
            </div>
            : null
            }
            <button className = "oneCategory" onClick ={(event) => {event.preventDefault(); setSelecetBoerd("All")}}>All</button>
        </div>
        {selecetBoerd === "All" ?
        <div>
        <h2>Household Appliances</h2>
        <div className = "cards">
            {householdAppliances}
        </div>

        <h2>Clothes</h2>
        <div className = "cards">
           {clothes}
        </div>
        <h2>Furniture</h2>
        <div className = "cards">
            {furniture}
        </div>
        </div>
        : null
        }

    </div>
) 
}

export default Boards