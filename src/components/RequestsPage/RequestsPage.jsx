import React, {useState, useEffect} from 'react';
import db from "./../../firebase";

const RequestsPage = () => {

    const[userId, setUserId] = useState("2")
    const[usersElements, setUsersElements] = useState([])
    let categoriesName = []   

        // const nameRef = db
        // .collection('categories')
        // .doc('clothing')
        // .collection('items')
        // .doc('oDl10Lun1w94lowtpbRc')


        const getElements = async () => {
            //YAY ITS WORKING
            // // const itemRef = await db
            // // .collection('categories')
            // // .doc('clothing')
            // // .collection('items')

            // // itemRef.where("userID", "==", userId).get()
            // //     .then((querySnapshot) => {
            // //         querySnapshot.forEach((doc) =>{
            // //             setUsersElements((prevState) => {
            // //                 console.log("data: ", doc.data().itemName)
            // //                 return {...prevState, [doc.id] : [(doc.data().itemName)]}
            // //             })
            // //         })
            // //     })
            // //     .catch((error) => {
            // //         console.log("Error getting documents: ", error);
            // //     });

            // //     console.log("usersElements: ", usersElements);
            

                     
            const categoriesPath = db.collection('categories')
            //bug
            await categoriesPath.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    categoriesName.push(doc.id)
                    categoriesName.map((category) => {
                        // console.log(`categoriesPath.doc("${category}")`)
                        categoriesPath.doc(`'${category}'`).where("userID", "==", userId).collection('items').get()
                        .then((querySnapshot) => {
                                querySnapshot.forEach((doc) =>{
                                    setUsersElements((prevState) => {
                                        console.log("data: ", doc.data().itemName)
                                        return {...prevState, [doc.id] : [(doc.data().itemName)]}
                                    })
                                })
                            })                        
                        
                    })
                    // categoriesName.map((categories) => {
                    //     categoriesPath.doc(categories).where("userID", "==", userId).get()
                    //     .then((querySnapshot) => {
                    //     querySnapshot.forEach((doc) =>{
                    //         setUsersElements((prevState) => {
                    //             console.log("data: ", doc.data().itemName)
                    //             return {...prevState, [doc.id] : [(doc.data().itemName)]}
                    //         })
                    //     })
                    // })
                    // })
                })
            })
            
            console.log("categoriesName: ", categoriesName)

        }



        useEffect(() => {
            getElements()
            // eslint-disable-next-line
          }, []);

          
          console.log("usersElements: ", usersElements);


    return(
        <p>TEST</p>
    )
}

export default RequestsPage