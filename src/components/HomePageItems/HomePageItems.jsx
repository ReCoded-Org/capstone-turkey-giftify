import React from "react"
import { Row, Col } from "react-bootstrap"
import "./HomePageItems.scss"
import HomePageItemCard from "../HomePageItemCard/HomePageItemCard"
// import db from "../../firebase";

function HomePageItems () {
// Should read some data from database and store it in state, 
// and pass it to HomePageItemCard so they can display

const exampleItems = [{itemName:"Coffee Pot", id: 1} , {itemName:"A veeerrryyy long name", id:2} , 
{itemName:"Coffee Pot", id:3} , {itemName:"Coffee Pot", id:4}, {itemName:"Coffee Pot", id: 5} , 
{itemName:"Coffee Pot", id:6} , {itemName:"Coffee Pot", id:7} , {itemName:"Coffee Pot", id:8}]

    return (
      <Row xs={2} md={3} xl={4} className="homePageItems">
        {exampleItems.map(e => 
        (<Col key={e.id}><HomePageItemCard itemName={e.itemName} id={e.id} /></Col>)
        )}        
      </Row>
    )
}

export default HomePageItems
