import React, { useEffect, useState } from 'react'
import "./Villas.scss"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/index"

export default function Villas() {
  const [products, setProducts] = useState([]);
  console.log(products);
  const getAllProducts = async()=>{
    let pros = [];
    const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  let obj = doc.data();
  obj.id = doc.id;
pros.push(obj);
});
setProducts(pros);
  };
  useEffect(() =>{
    getAllProducts();
  }, []);
  return (
    <div>
      {
        products.map((pro)=>{
          return(
            <div key={pro.id}>
              <img src={pro.imgUrl}/>
              <h1 >{pro.name}</h1>
              <h1>{pro.price}$</h1>
              </div>
          )
        })
      }
    </div>
  )
}
