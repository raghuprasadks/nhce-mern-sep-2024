import React,{useState} from 'react'

const Customers = () => {

    const [code,setCode]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [customers,setCustomers]=useState([])

    const addCustomer=(e)=>{
        e.preventDefault()
        let customer = {code,name,email,mobile}
        console.log("add customer ",customer)
        setCustomers([...customers,customer])
        reset()
    }

    const reset=()=>{
        setCode('')
        setName('')
        setEmail('')
        setMobile('')
    }

    const deleteCustomer=(code)=>{
        console.log("delete customer : code ",code)
        let afterdelete = customers.filter((customer)=>customer.code != code)
        setCustomers(afterdelete)
    }

  return (
    <div>
        <h1>Customer Master</h1>
        <label>Code</label><br/>
        <input type="text" value={code} onChange={(e)=>setCode(e.target.value)}></input> <br/>
        <label>Name</label><br/>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input> <br/>
        <label>Email</label><br/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input> <br/>
        <label>Mobile</label><br/>
        <input type="text" value={mobile}  onChange={(e)=>setMobile(e.target.value)}></input> <br/>
        <button onClick={addCustomer}>Add Customer</button>
        {/**
        <p>you have entered : code - {code} name - {name}</p>
        <p>you have entered : email - {email} name - {mobile}</p>
         */}
        <p>Total number of customers. {customers.length}</p>
        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Delete</th>
            </tr>
            {
                customers.map((customer)=><tr key={customer.code}>
                    <td>{customer.code}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.mobile}</td>
                    <td><button onClick={()=>deleteCustomer(customer.code)}>Delete</button></td>
                </tr>)
            }
        </table>
    </div>
  )
}

export default Customers