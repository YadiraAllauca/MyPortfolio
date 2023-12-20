import React from 'react';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {}
          <a href="#">
            <img src={Logo} alt="" style={{ width: "180px", height: "150px" }} />
          </a>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
