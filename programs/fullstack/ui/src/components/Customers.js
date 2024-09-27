import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Customers = () => {
    const [id,setId]=useState()
    const [name,setUser]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState()
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
  
    return (
    <>
    <div>
        <h1>Customer Master</h1>
        
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