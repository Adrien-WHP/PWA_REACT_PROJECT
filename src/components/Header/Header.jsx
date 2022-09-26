import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>
        <div className='header-content flex flex-c text-center texte-white'>
          <h2 className='header-title texte-capitalize'>Trouver le livre de votre choix</h2>
          <p className='header-texte fs-18 fw-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eius? Ipsam assumenda nisi vitae inventore. Repellat perspiciatis obcaecati ullam eos, facere corrupti quae praesentium odit.
          </p>
          <SearchForm/>
        </div>
      </header>
    </div>
  )
}
export default Header
