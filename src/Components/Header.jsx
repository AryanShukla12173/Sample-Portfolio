import React from 'react';

const navItems = [
  { name: "Home" },
  { name: "Services" },
];

function Header() {
  return (
    <nav className='bg-black w-full flex flex-col md:flex-row justify-center md:justify-between items-center p-4'>
      <div className='text-white text-3xl font-bold mb-4 md:mb-0'>
        Logo
      </div>
      <ul className='flex flex-col md:flex-row gap-5 text-xl'>
        {navItems.map((item, index) => (
          <li key={index} className='text-white hover:bg-blue-600 transition duration-300 ease-in-out p-2 rounded-md'>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
