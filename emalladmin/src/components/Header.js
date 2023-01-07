import { Link } from "react-router-dom";

export default function Header(){
    return <header className="tm-header" id="tm-header">
    <div className="tm-header-wrapper">
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
        <div className="tm-site-header">
            <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>            
            <h1 className="text-center">Admin Dashboard</h1>
        </div>
        <nav className="tm-nav" id="tm-nav">            
            <ul>
                <li className="tm-nav-item active">
                  <Link to="/category" className="tm-nav-link">
                    <i className="fas fa-home"></i>
                    Categories
                  </Link>
                </li>
                <li className="tm-nav-item active">
                  <Link to="/brand" className="tm-nav-link">
                    <i className="fas fa-home"></i>
                    Brands
                  </Link>
                </li>
                <li className="tm-nav-item active">
                  <Link to="/product-list" className="tm-nav-link">
                    <i className="fas fa-home"></i>
                    Product List
                  </Link>
                </li>
                <li className="tm-nav-item active">
                  <Link to="/product" className="tm-nav-link">
                    <i className="fas fa-home"></i>
                    Add Product
                  </Link>
                </li>
            </ul>
        </nav>
      
       
    </div>
</header>
}