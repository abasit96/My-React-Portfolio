import React from 'react';
import Navbar from './Navbar';

function Header({setCurrentPage}) {
    return (
        <Navbar setCurrentPage={setCurrentPage}/>
    );
}

export default Header;