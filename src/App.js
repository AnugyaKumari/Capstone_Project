import React from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/Product/index";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails"
import Cart from "./components/Cart";
import Employee from "./components/Employee";
import Login from "./components/Login";
import Register from "./components/Register";

const  App = () => {
  return (
    // <>
    // <Navbar/>
    // <Product/>
    // </>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Login />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/product/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/employee" element={<Employee />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
);
}
export default App; 