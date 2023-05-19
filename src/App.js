import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import { Route, Link, Routes } from 'react-router-dom'
import ProductList from "./components/products/ProductList";
import ProductCard from "./components/products/ProductCard";
function App() {

  const [products, setProducts] = useState({});


  useEffect(()=>{
    // console.log("useEffect() called");
   // axios.get, axios.post, axios.put, axios.delete
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      // console.log("res",res.data);
      setProducts(res.data);
    }).catch((error)=>{
      console.log(error);
    })
 
  }, []);

  return (
    <div className="App">
      
      <nav>
        <h1 className="store-header">
          <Link to="/" className="title">Abdiaziz Products</Link>

        </h1>
      
      <div className="nav-links">
        <Link to="/" >Home</Link>
        <Link to="/products" >Products</Link>
      </div>
      </nav>
      <Routes>
        <Route path="/products/:itemID" element={<ProductCard products={products}/>} />
        <Route path="/products" element={<ProductList products={products}/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
