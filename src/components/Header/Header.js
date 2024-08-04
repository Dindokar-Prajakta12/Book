import React from 'react';
import Navbar from '../navbar/Navbar';
import SearchForm from '../searchForm/SearchForm';
import "./Header.css"

const Header = () => {
  return (
    <div className='holder'>
      <header className='holder'>
      <Navbar/>
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'> find your book of choices</h2><br/>
          <p className='header-text fs-18'>A book is a medium for recording information in the form of writing or images.
             Books are typically composed of many pages, bound together and protected by a cover.
             Modern bound books were preceded by many other written mediums, such as the codex, the scroll and the tablet.
          </p>
          <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header
