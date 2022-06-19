import { Route, Routes } from "react-router-dom"
import { Cart } from "../Pages/Cart"
import { Body } from "./Body";
import { Login } from "../Pages/Login";
import { Products } from "../Pages/Products";
import { Signup } from "../Pages/Signup";
import { Product } from '../Pages/Product';

export const Allroutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Body/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/products/:id" element={<Product/>}></Route>
        </Routes>
    );
};
