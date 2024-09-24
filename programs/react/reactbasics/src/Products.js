import React from 'react'

const Products = () => {

    const products=[
        {
            code:1,
            name:'mobile',
            supplier:'Samsung',
            price:60000
        },
        {
            code:2,
            name:'tv',
            supplier:'Sony',
            price:70000
        },
        {
            code:3,
            name:'laptop',
            supplier:'Lenovo',
            price:80000
        }
]
  return (
    <div>
        <h1>Products</h1>
        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Supplier</th>
                <th>Price</th>
            </tr>
            {
                products.map((product)=><tr><td>{product.code}</td><td>{product.name}</td><td>{product.supplier}</td><td>{product.price}</td></tr>)
            }
        </table>


    </div>
  )
}

export default Products