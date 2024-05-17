import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        MyApp
      </div>
      <div className="flex space-x-4">
        <button className="bg-[rgb(101,185,198)] text-white text-xl rounded-full w-8 h-8">
          <i className="fas fa-bell"></i>
        </button>
        <button className="text-white bg-[rgb(101,185,198)] text-xl rounded-full w-8 h-8">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
