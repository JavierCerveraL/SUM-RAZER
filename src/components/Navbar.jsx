import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-between items-center w-full mb-6 pt-3 px-1">
        <h2 className="leading-10 text-2xl font-inter inset-9 font-extrabold text-gray-100">
          <span className="text-sky-500 text-4xl summ">+</span> RAZER
        </h2>
        {/* <img src={logo} alt="sumz_logo" className="w-28 object-contain" /> */}

        <button
          className="black_btn"
          type="button"
          onClick={() => window.open('https://github.com/')}
        >
          Github
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
