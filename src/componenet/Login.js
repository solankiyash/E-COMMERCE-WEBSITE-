
import React from 'react'
import {useState} from 'react'
function Login() {
  const [username,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const item = {username,password}
  
  const login =  () =>
 {
 
    console.warn(item)
    fetch('https://jsonplaceholder.typicode.com/posts?email=yash@gmail.com&password=123456'+item.email,{
            method:'POST',
            body:JSON.stringify({
                username: "yash@gmail.com",
                password: "123456"
                            })
            
        })
           .then((res)=>{
             console.log(res)
             if(res===item){

             }
             else{
                alert("please")
             }
           })
            .then(json=>item(json))
 }

  return (
    <div className='form'>
        <input type='text' placeholder='username'value={username} onChange={(e)=>setEmail(e.target.value)}></input><br/>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
        <div className='btn btn-outline-dark'onClick={()=>{login()}}>Submit</div>
    </div>
  )
}

export default Login