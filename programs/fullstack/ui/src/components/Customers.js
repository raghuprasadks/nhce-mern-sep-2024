import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Customers = () => {
    const [id,setId]=useState()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState()
    const [location,setLocation]=useState('')

    const [customers,setCustomers]=useState([])

    const url ='http://localhost:3000/customer/'

    const getCustomers=()=>{
        axios.
        get(url)
        .then(data=>setCustomers(data.data))
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getCustomers()
    },[])

    const addCustomer=(event)=>{
        console.log('add Customer')
        event.preventDefault()
        let customer = {name,email,mobile,location}
        axios.post(url,customer)
        .then((data)=>{
            console.log(data)
            getCustomers()
        })
        .catch((error)=>console.log(error))
        reset()
    }

    const reset=()=>
    {
        setName('')
        setEmail('')
        setMobile('')
        setLocation('')
    }
  
    return (
    <>
    <div>
        <h1>Customer Master</h1>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Mobile</label>
        <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/><br/>
        <label>Location</label>
        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/><br/>


        <button onClick={addCustomer}>Add Customer</button>
        
        
        
    </div>
    <div>
        <table>
            <theader>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Location</th>
                </tr>
            </theader>
            <tbody>
                {customers.map((customer)=>
                <tr key={id}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.mobile}</td>
                    <td>{customer.location}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Customers