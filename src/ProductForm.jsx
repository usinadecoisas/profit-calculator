import React, { useState } from 'react';
import { addProduct } from '../utils/api';

const ProductForm = () => {
  const [product, setProduct] = useState({
    sku: '',
    cost: '',
    price: '',
    dateAcquired: '',
    description: '',
    supplier: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product).then(response => {
      // Handle response
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        SKU:
        <input type="text" name="sku" value={product.sku} onChange={handleChange} />
      </label>
      <label>
        Custo de Entrada:
        <input type="number" name="cost" value={product.cost} onChange={handleChange} />
      </label>
      <label>
        Preço de Venda:
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </label>
      <label>
        Data de Aquisição:
        <input type="date" name="dateAcquired" value={product.dateAcquired} onChange={handleChange} />
      </label>
      <label>
        Descrição do Produto:
        <textarea name="description" value={product.description} onChange={handleChange}></textarea>
      </label>
      <label>
        Fornecedor:
        <input type="text" name="supplier" value={product.supplier} onChange={handleChange} />
      </label>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;