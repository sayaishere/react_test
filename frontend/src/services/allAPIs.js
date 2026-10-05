import axios from 'axios';

const BASE_URL = 'https://react-test-tr7o.onrender.com/products';

export const getProducts = async () => {
    return await axios.get(BASE_URL);
};

export const getSingleProduct = async (id) => {
    return await axios.get(`${BASE_URL}/${id}`);
};

export const addProduct = async (data) => {
    return await axios.post(BASE_URL, data);
};

export const updateProduct = async (id, data) => {
    return await axios.put(`${BASE_URL}/${id}`, data);
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${BASE_URL}/${id}`);
};