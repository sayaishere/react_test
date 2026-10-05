import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../services/allAPIs';

function AddProduct() {
    const [product, setProduct] = useState({ name: '', price: '', category: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!product.name || !product.price || !product.category) return alert('Fill all fields');

        try {
            await addProduct({ ...product, price: Number(product.price) });
            navigate('/products');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-4" style={{ maxWidth: '500px' }}>
            <div className="card p-4 shadow-sm">
                <h4 className="mb-3">Add Product</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Name"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Category"
                        value={product.category}
                        onChange={(e) => setProduct({ ...product, category: e.target.value })}
                        required
                    />
                    <button type="submit" className="btn btn-primary w-100 mb-2">Add Product</button>
                    <button type="button" className="btn btn-secondary w-100" onClick={() => navigate('/products')}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;