import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import AddBlog from "./AddBlog";
import './NavBar.css'


const NavBar = () => {
    return (
      <>
      <div>
      <Navbar  className="nav">
         <Container>
            <div className="soap2day">
           <Navbar.Brand className="navHead" as={Link} to={'/'}><h1>Soap2day</h1></Navbar.Brand>
           </div>
           <Nav className="content">
             <Nav.Link className="navCont" as={Link} to={'/'}>HOME</Nav.Link>
             <Nav.Link className="navCont" as={Link} to={"/About"}>ABOUT</Nav.Link>
             <Nav.Link className="navCont" as={Link} to={"/AddBlog"}>FEEDBACK</Nav.Link>
  
           </Nav>
         </Container>
       </Navbar>
     </div>
     
     <div className="bodyTo">
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/AddBlog" element={<AddBlog/>}/>
  
     </Routes>
   </div>
   </>
    )
  }
  
  export default NavBar