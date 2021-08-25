import React, {useState, useEffect} from 'react';
import db from "./../../firebase";
import { Card } from "react-bootstrap";

const RequestsPage = () => {

    // need redux
    // hangi user loggedin
    const[userId, setUserId] = useState("2")
    const[usersProducts, setUsersProducts] = useState([])

    let categoriesName = []   

        const getElements = async () => {
    
            const categoriesPath = db.collection('categories')
            await categoriesPath.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    categoriesName.push(doc.id)
                    categoriesName.map((category) => {
                        return categoriesPath.doc(`${category}`).collection('items').where("userID", "==", userId).get()
                        .then((querySnapshot) => {
                                querySnapshot.forEach((doc) =>{
                                    setUsersProducts((prevState) => {
                                        return {...prevState, [doc.id] : [doc.data().itemName, doc.data().image]}
                                    })
                                })
                            })                        
                        
                    })

                })
            })
        }



        useEffect(() => {
            getElements()
            // eslint-disable-next-line
          }, []);

          
          console.log("usersProducts: ", usersProducts);
        //   Object.values(usersProducts).map((info) => (
        //     console.log("usersProducts info[0]: ", info)
        //     ));

        //   console.log("usersProductsImage: ", usersProductsImage);
        //   Object.values(usersProductsImage).map((info) => (
        //     console.log("usersProductsImage info[0]: ", info)
        //     ));



    return(
        <div className="requstsPageContainer">

        </div>
    )
}

export default RequestsPage


{
    /*
    

[
  [
    [
      "tshirt"
    ],
    [
      "shoe"
    ],
    [
      "tools"
    ],
    [
      "Coffee Pot"
    ],
    [
      "Backpack"
    ]
  ],
  [
    [
      "tshirt_imtagggge"
    ],
    [
      "shoe_img"
    ],
    [
      "tools_zaten"
    ],
    [
      "https://www.grandbazaarist.com/wp-content/uploads/2020/11/Turkish-Electric-Coffee-Maker-Beko-Black.jpg"
    ],
    [
      "https://i.sportisimo.com/products/images/1243/1243145/450x450/pacsafe-pacsafe-go-15l-backpack_10.jpg"
    ]
  ]
]

    */
}