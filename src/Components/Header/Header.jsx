import React, { useState ,useEffect } from 'react'
import "./Header.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getPopular, getRandom, getRecentAnime, getTrending } from '../../actions/Anime';
import DropDown from '../../utils/navdropdownmaker/dropDown';

export default function Header() {

  return (
    <div className='header_part'>
      
<div className=''>

        <Navbar  fixed="top" expand="lg" className=' color_part'>
      <Container className='' >
     
        <Navbar.Brand href="/"  className='logo_side'>
          <label href="#" className='logo'>Amaterasu</label>
      
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav  ">
          <Nav className="me-auto text_size">
            <Nav.Link href="/" className='size spacing'>Home</Nav.Link>     
            <DropDown name="Trending" className='size spacing drop' getData={getTrending} />
            <DropDown name='Popular '  className='size spacing drop' getData={getPopular} />
      
      
            
           
          </Nav>
          <Nav>
           
            <Nav.Link eventKey={2} href="/search">
             Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
   
      </Container>
    </Navbar>
            </div>
    </div>
  )
}
