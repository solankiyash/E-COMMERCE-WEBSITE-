import React from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'
function Cart() {

  const {shoppingCart,totalPrice,qty,dispatch} = useContext(CartContext)
  
  return (
    <div className='container'>
       <div className=''>
            {shoppingCart.length > 0 ? 
              shoppingCart.map(cart => (
                <div className='' key={cart.id}>
                  <div className='row'>
                      <div className='col-md-6'>
                        <div className='image'>
                         <img src={cart.image}/>
                         </div>
                          </div>
                        
                          <div className='col-md-6'>
                              <div className='text'>
                                {cart.title}<br/>
                                ${cart.price} 
                               <a  href='#' onClick={()=>dispatch({type:'INC',id:cart.id,cart})}><AiOutlinePlus className='icon-plus'/></a>
                                {cart.qty}
                               <a  href='#'onClick={()=>dispatch({type:'DEC',id:cart.id,cart})}><AiOutlineMinus className='icon-minus'/></a>
                               <a href='#'onClick={()=>dispatch({type:'DEL',id:cart.id,cart})}><MdDelete/></a>
                               <br/>
                                Totalprice : ${cart.price * cart.qty}<br/>
                                {/* <Link to="order" class="btn btn-secondary">Place Order</Link> */}
                               
                              </div>
                          </div>
                     
                        </div>
                  </div>
              ))
            : 'sorry your cart is curently empty'}
       </div>
       {shoppingCart.length > 0 ? 
       <div className='summery'>
            <h3>Cart Summary</h3>
            <div className='total-item'>
              <div className=''>
                Total items
                </div>
                <div className=''>{qty}</div>
                <div className=''>total price</div>
              </div>
             
         </div>
       
       
       :""}
    </div>
  )
}

export default Cart