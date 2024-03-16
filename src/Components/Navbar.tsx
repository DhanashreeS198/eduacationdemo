import React from 'react';

const Nav = () => {
  return (
    <>
      <nav className="bg-gray-800 py-4 fixed top-0 w-full z-10  ">
  <div className="container mx-auto flex justify-between items-center ">
    <div className="text-white text-lg font-bold lg:text-left text-center">ZMT Edtech</div> {/* Center align text on small screens */}
    <ul className="hidden lg:flex"> {/* Hide the menu on small screens and show on large screens */}
      <li className="mx-4">
        <a href="/" className="text-white hover:text-gray-400">Home</a>
      </li>
      <li className="mx-4">
        <a href="about" className="text-white hover:text-gray-400">About</a>
      </li>
      <li className="mx-4">
        <a href="contact" className="text-white hover:text-gray-400">Contact</a>
      </li>
    </ul>
    <button className="lg:hidden focus:outline-none"> {/* Button to toggle the menu on small screens */}
      <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
</nav>

    </>
  );
};

export default Nav;
