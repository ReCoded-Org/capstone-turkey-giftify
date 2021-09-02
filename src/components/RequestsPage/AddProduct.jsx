import React, { useState, useEffect } from "react";
import db from "./../../firebase";
import "./AddProduct.css"

const AddProduct = () => {

    const [userId, setUserId] = useState("2");
    let categoriesName = [];

    const getCategories = async () => {
        const categoriesPath = db.collection("categories");
        await categoriesPath.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log("categoriesName: ", categoriesName);
                return categoriesName.push(doc.id)
                console.log("doc.id", doc.id);
            })
        })

    }

    const handleSubmit = (e) =>{

        e.preventDefault()
    }
    

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line
      }, []);

    return(
        <div>
            <p>TEST</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Product's Name: 
                    <input type="text" />
                </label>
                <label>
                    Product's Category: 
                    <select>
                        <option>DROPDOWN GELECEK</option>
                    </select>
                </label>
                <label>
                    Product's Short Brief: 
                    <input type="text" />
                </label>
            </form>
        </div>
        
    )
}

export default AddProduct