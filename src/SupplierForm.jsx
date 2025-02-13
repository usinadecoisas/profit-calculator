import React, { useState } from 'react';
import { addSupplier } from '../utils/api';

const SupplierForm = () => {
  const [supplier, setSupplier] = useState({
    name: '',
    cnpj: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSupplier(supplier).then(response => {
      // Handle response
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" name="name" value={supplier.name} onChange={handleChange} />
      </label>
      <label>
        CNPJ:
        <input type="text" name="cnpj" value={supplier.cnpj} onChange={handleChange} />
      </label>
      <label>
        Endereço:
        <input type="text" name="address" value={supplier.address} onChange={handleChange} />
      </label>
      <label>
        Telefone:
        <input type="text" name="phone" value={supplier.phone} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={supplier.email} onChange={handleChange} />
      </label>
      <button type="submit">Adicionar Fornecedor</button>
    </form>
  );
};

export default SupplierForm;