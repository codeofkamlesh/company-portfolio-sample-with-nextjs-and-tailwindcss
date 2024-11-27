import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between bg-black text-white px-6 py-4">
      <div className="text-lg font-bold">Company Logo</div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-0">
        <div>Products</div>
        <div>Solutions</div>
        <div>Pricing</div>
        <div>Resources</div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 space-x-0 md:space-x-4">
        <button className="bg-[#11ff80] text-black px-4 py-2 rounded-lg font-bold">
          Login
        </button>
        <button className="bg-[#d72307] flex items-center justify-center py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
          Try Writepace Free 
        </button>
      </div>
    </header>
  );
};

export default Header;
