import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductList() {

    const [products, setproducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('https://react-test-tr7o.onrender.com/products')
        setproducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`https://react-test-tr7o.onrender.com/products/${id}`)

        setproducts(products.filter((product) => product.id !== id))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className='mt-4'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h1>Product Catalog</h1>
                </div>

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>

                                <td>
                                    <button className='btn btn-warning btn-sm ms-2'>
                                        Edit
                                    </button>

                                    <button
                                        className='btn btn-danger btn-sm ms-2'
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductList