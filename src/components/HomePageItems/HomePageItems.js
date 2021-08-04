import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import HomePageItemCard from "../HomePageItemCard/HomePageItemCard"



function HomePageItems () {
    return(
        <div>
        <Row xs={2} md={3} xl={4} className="g-4">        
            <Col>
                <HomePageItemCard/>
            </Col>
            <Col>
                <HomePageItemCard/>
            </Col>       
        </Row>
        </div>
    )
}

export default HomePageItems

