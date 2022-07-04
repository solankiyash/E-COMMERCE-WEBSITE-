
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'



function Products() {
  
    const [product,setProduct] = useState([])
   

  
   
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    },[])
    

  
 
    
  return (
      <>
    
    
    <div className='container'>
        <div className='row'>
            {
                product.map((curElem)=>{
                    return(
                        <div className='col-md-3'key={curElem.id}>
                                 <div className='Box'>
                                    <div className='image'>
                                            <img src={curElem.image}/>
                                            
                                    </div>
                                    <div>
                                        {curElem.title}
                                    </div>
                                        
                                        ${curElem.price}<br/>
                                        <Link to = {`/product/${curElem.id}`} className='btn btn-outline-dark'>Buy Now</Link>
                                        </div>
                                        
                        </div>
                        
                    )
                })
            }
        </div>


    </div>
    </>
  )
}

export default Products