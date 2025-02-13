import React, { useState } from 'react';
import { uploadTaxRules } from '../utils/api';

const TaxRulesUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadTaxRules(file).then(response => {
      // Handle response
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload de Regras Tributárias:
        <input type="file" onChange={handleFileChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default TaxRulesUpload;