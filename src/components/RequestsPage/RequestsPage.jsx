import React, {useState, useEffect} from 'react';
import db from "./../../firebase";

const RequestsPage = () => {

    const[userId, setUserId] = useState("2")
    const[usersElements, setUsersElements] = useState([])

        const nameRef = db
        .collection('categories')
        .doc('clothing')
        .collection('items')
        // .doc('oDl10Lun1w94lowtpbRc')


        const getElements = async () => {
            const itemRef = await db
            .collection('categories')
            .doc('clothing')
            .collection('items')

            // PREVSTATE IS NOT WORKING YET
            itemRef.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setUsersElements((prevState) => {
                        return {...prevState, ...Object.values(doc.data())}
                    })
                })
            })

            console.log("usersElements: ", usersElements);

            // // TEST1
            // // const snapshot = await nameRef.get()
            // // return snapshot.docs.map(doc =>{
            // //     console.log("doc.data: ", doc.data())

            // //     setUsersElements((prevState) =>{
            // //         return {...prevState, ...Object.values(doc.data())}
            // //     })

            // //     // let query = nameRef.where("userID", "==", "2")

            // //     // console.log("query: ", query)

            // //     // if(userId === doc.data().userID){
            // //     //     console.log("Match: ", doc.data());
            // //     //     setUsersElements((prevState) =>{
            // //     //         return {...prevState, ...Object.values(doc.data())}
            // //     //     })
            // //     // }
            // //     // else{
            // //     //     console.log("No match")
            // //     // }
            // // })

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