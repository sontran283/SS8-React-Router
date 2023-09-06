import './App.css'
// Luyen Tap 1:
// import { Route, Routes } from 'react-router-dom'
// import Index from './LuyenTap1/Index'
// import Contact from "./LuyenTap1/Contact";
// import Portfolio from "./LuyenTap1/Portfolio";
// import Services from "./LuyenTap1/Services";
// import Team from "./LuyenTap1/Team";
// import About from "./LuyenTap1/About";


// Luyen Tap 2:
// import { Routes, Route, NavLink } from "react-router-dom";
// import Home from "./LuyenTap2/Home";
// import About from "./LuyenTap2/About";
// import Portfolio from "./LuyenTap2/Portfolio";
// import Contact from "./LuyenTap2/Contact";


// useNavigate_useParams
import { Routes, Route, Link } from 'react-router-dom';
import About from "./useNavigate-useParams/About";
import Home from "./useNavigate-useParams/Home";
import Product from "./useNavigate-useParams/Product";
import NotFoud from "./useNavigate-useParams/NotFoud";


function App() {
  return (
    <>
      {/* Luyen Tap 1 */}
      {/* <Routes>
        <Route path="/" element={<Index />} >
          <Route index element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes> */}


      {/*  Luyen Tap 2 */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="./index.html">
                  <NavLink to={"./"} className="nav-link">Home</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./about.html">
                  <NavLink to={"./About"} className="nav-link">About</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to={"./Portfolio"} className="nav-link">Portfolio</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to={"./Contact"} className="nav-link">Contact</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}


      {/* useNavigate_useParams */}
      <nav>
        <h3>this is header</h3>
        <Link to={"/"}>Home</Link> <br />
        <Link to={"/about"}>About</Link> <br />
        <Link to={"/product"}>Product</Link>
      </nav>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFoud />} />
        </Route>
      </Routes>
      <h3>this is footer</h3>

    </>
  )
}

export default App
