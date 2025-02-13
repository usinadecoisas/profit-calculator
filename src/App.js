import React from 'react';
import Dashboard from './components/Dashboard';
import ProductForm from './components/ProductForm';
import SupplierForm from './components/SupplierForm';
import ProfitHistory from './components/ProfitHistory';
import TaxRulesUpload from './components/TaxRulesUpload';

const App = () => {
  return (
    <div className="app">
      <Dashboard />
      <ProductForm />
      <SupplierForm />
      <ProfitHistory />
      <TaxRulesUpload />
    </div>
  );
};

export default App;