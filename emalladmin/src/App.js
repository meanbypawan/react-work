import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Brand from './components/Brand';
import Product from './components/Product';
import EditBrand from './components/EditBrand';

function App() {
  return <>
    <Header />
    <main className="tm-main">
      <Routes>
        <Route path="/category" element={<Category/>} />
        <Route path="/brand" element={<Brand/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/edit-brand" element={<EditBrand/>}/>
      </Routes>
    </main>

  </>
}
export default App;
