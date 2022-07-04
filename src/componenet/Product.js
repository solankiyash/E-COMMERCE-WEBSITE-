
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../componenet/CartContext';
import { useContext } from 'react';




function Product() {
    const [data,setData] = useState([])
    const {dispatch} = useContext(CartContext);
    
  
    
    
   
  const {id} = useParams();
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setData(json))
  },[])
  
  return(
    <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
                <div className='Box1'>
                  <div className='image1'>
                      <img src={data.image} />
                    </div>
                  </div>
              </div>
                      <div className='col-md-6'>
                        <div className='text'>
                        {data.title}<br/>
                        </div>
                        <div className='text1'>
                        ${data.price}<br/>
                        </div>
                        <div className='text2'>
                          {data.category}
                        </div>
                        <div className='Button'>
                          <button className='btn btn-outline-dark' onClick={()=>dispatch({type:'ADD TO CART', id:data.id,data})}> Add to cart</button>
                        </div>
                      </div>
                     
                   
                
             
           
            
          </div>
    </div>
  )   
}

export default Product