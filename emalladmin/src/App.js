import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Brand from './components/Brand';
import Product from './components/Product';
import EditBrand from './components/EditBrand';
import ProductList from './components/ProductList';
import { useEffect, useState } from 'react';
import MasterContext from './components/MasterContext';
import axios from 'axios';

function App() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    loadCategories();
  }, [])
  const loadCategories = async () => {
    try {
      let response = await axios.get("http://localhost:3000/category/list");
      if (response.data.status)
        setCategoryList(response.data.result);
    }
    catch (err) {
      console.log(err);
    }
  }
  return <>
    <Header />
    <main className="tm-main">
    <MasterContext.Provider value={{categoryList: categoryList}}>
      <Routes>
        <Route path="/category" element={<Category setCategoryList={setCategoryList}/>}  />
        <Route path="/brand" element={<Brand />} />
        <Route path="/product" element={<Product />} />
        <Route path="/edit-brand" element={<EditBrand />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
      </MasterContext.Provider>
    </main>

  </>
}
export default App;
