import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getProducts = () => API.get('/productos');
export const createProduct = (product) => API.post('/productos', product);
export const updateProduct = (id, updatedProduct) => API.put(`/productos/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/productos/${id}`);
export const registerSale = (sale) => API.post('/ventas', sale);
export const getProductById = (id) => API.get(`/productos/buscar/${id}`);
export const getSales = () => API.get(`/ventas`);

export default API;
