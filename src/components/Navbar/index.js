import React from 'react';
import '../../assets/Css/navbar.css';
import SearchProduct from '../Search';
import Logo from '../../assets/Images/logo.PNG';
import Cart from '../../assets/Images/cart.PNG';

const MainNavbar = () => {

    // const [collapsed, setCollapsed] = useState(true);
    // const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <>
    <div className="main-container">
        <div className="logo">
            <a href="/">
                <img src={Logo} alt="logo" />
            </a>
        </div>
        <div className="search-component">
            <SearchProduct />
        </div>
        <div className="group-button">
            <button className="navbar-button">SIGN UP</button>
            <button className="navbar-button">LOG IN</button>
            <a href="" className="navbar-button">
                <img src={Cart} alt="cart"/>
            </a>
        </div>
    </div>
    </>
    )
}

export default MainNavbar;