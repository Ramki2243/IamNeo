import React from 'react';

function Header(props) {
    
    
    return (
      <div className="header">
        <img
          src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png"
                alt="logo"
                className='logo'
        />
        <h1> Notes </h1>
      </div>
    );
}

export default Header;