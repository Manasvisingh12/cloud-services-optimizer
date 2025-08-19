import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">☁ Cloud Optimizer</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
