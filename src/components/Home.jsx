import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
function Home() {
const [products, setProducts]=useState([])


useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then(res =>{
let data= res.data

setProducts(data)

})
},[])

  return (
    <>
      <section className="container">
        <div className="imge-dev mt-5">
          <img src="img/image 2.png" alt="" />
        </div>
        <p className="title1">
          A few words about this blog platform, Ghost, and how this site was
          made
        </p>
        <p className="text">
          Why Ghost (& Figma) instead of Medium,
          <br /> WordPress or other options?
        </p>
        <hr className="hr" />

        <div className="cards  " style={{width:"100%"}}>
          <h1 className="text-center text_title ">All articles</h1>

          <div className="row justify-content-center container d-flex">
            {
              products.map(pro=>(
              <Link  className="card col-md-6   mt-5 " to={`/single/${pro.id}`} key={pro.id}>
              <img style={{width:"60%",height:"60%"}}
                src={pro.image}
                className="card-img-top card_img justify-content-center"
                alt={pro.title}
              />
              <div className="card-body">
                <h5 className="card-title mt-3 text-center ">
                 {pro.title}
                </h5>
                <h5 className="price_pro"> price:${pro.price}</h5>
              </div>
            </Link>
           
              ))
            }
          
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
