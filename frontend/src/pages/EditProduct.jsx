import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleProduct, updateProduct } from '../services/allAPIs';

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', price: '', category: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getSingleProduct(id);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!product.name || !product.price || !product.category) return alert('Fill all fields');

        try {
            await updateProduct(id, { ...product, price: Number(product.price) });
            navigate('/products');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-4" style={{ maxWidth: '500px' }}>
            <div className="card p-4 shadow-sm">
                <h4 className="mb-3">Edit Product</h4>
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
                    <button type="submit" className="btn btn-warning w-100 mb-2">Update Product</button>
                    <button type="button" className="btn btn-secondary w-100" onClick={() => navigate('/products')}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;