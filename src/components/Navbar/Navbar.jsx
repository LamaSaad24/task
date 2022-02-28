import React, {useEffect, useState} from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [navbar, setNavbar]= useState(false);


  const handleNavbarColor = () =>{
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
  }

  useEffect( () => {
    window.addEventListener("scroll", handleNavbarColor)
  })

  return (
    <>
    {console.log(navbar)}
      <nav className={`navbar navbar-expand-lg fixed-top  navbar-dark py-3 ${navbar ? "bg-white": "bg-dark" }   ${classes["b-bottom"]} ${classes["header-navbar"]}`}>
        <div className="container">
          <Link className="navbar-brand text-capitalize" to="/">logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-3 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link  text-white ${classes["active-link"]} `} aria-current="page" to="home">الصفحة الرئيسية</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/projects">مشاريعنا</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="#">المعرض</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/order">تواصل معنا</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/about">من نحن</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/service">الخدمات</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
