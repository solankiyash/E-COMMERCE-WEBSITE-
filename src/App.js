import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componenet/Navbar';
import Products from './componenet/Products';
import Product from './componenet/Product';
import Cart from './componenet/Cart'
import CartContextProvider from './componenet/CartContext'
import Login from './componenet/Login';




function App() {
  return (
    <>
   
    
    <CartContextProvider>    
    <Navbar/>
      <Routes>
      <Route exact path="/products" element={ <Products/>}/>
      <Route exact path="/product/:id" element={ <Product/>}/>
      <Route exact  path='/cart' element = {<Cart/>} />
      <Route exact  path='/login' element = {<Login/>} />
    </Routes>
    </CartContextProvider>




    

   
   
   
   
    </>
  );
}

export default App;
