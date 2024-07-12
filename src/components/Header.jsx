import React from 'react'
import "../styles/Header.css"
const Header = () => {
  return (
   <>
   <div className="headerblue">
    <h1>📧 support@repay.com</h1>
</div>
   <div className="headerContainer">
    <div className="logo">
<img src="./banner-logo.png" alt="" />
    </div>
    <div className="HeaderContent">

    <nav>
        <ul class="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#transfer">Transfer Money</a></li>
            <li><a href="#transfer">Blog</a></li>
        </ul>
    </nav>
    </div>
    <div className="HeaderButtons">
        <button className="LogIn">Log In</button>
        <button className="SignUp">Sign Up</button>
    </div>
   </div>
   
   </>
  )
}

export default Header
