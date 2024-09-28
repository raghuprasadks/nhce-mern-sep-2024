import React,{useState} from 'react'
import axios from 'axios'

const SignUp = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')

    let url = "http://localhost:3000/user"

    const signUp=async (event)=>{
        event.preventDefault()
        let user = {name,email,mobile,password}
        let response = await axios.post(url,user)
        if (response){
            setMessage('Successful Signup')
        }else{
            setMessage('Signup failed')
        } 
        reset()   
    }

    const reset=()=>{
        setName('')
        setEmail('')
        setMobile('')
        setPassword('')
        setMessage('')
    }

  return (
    <div>
        <h1>SignUp</h1>
        <label>Name</label><br/>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <label>Email</label><br/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <label>Mobile</label><br/>
        <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        <br/>
        <label>Password</label><br/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <button onClick={signUp}>Sign Up</button>
        <h2>{message}</h2>   
    </div>
  )
}

export default SignUp