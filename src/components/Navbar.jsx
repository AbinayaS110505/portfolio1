import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
const navlinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" }
  ];
   const handleLogoClick = () => {
    setIsModalOpen(true);
  };
   const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="k w-full h-[10vh] flex shadow-xl drop-shadow-xl rounded-sm">
        <div className="w-1/2 flex px-8 text-2xl text-white font-bold items-center justify-start">
          Abinaya S
        </div>
        <div className='flex justify-end text-white font-bold w-1/2 items-center '>
          <ul className="flex justify-between gap-5 items-center text-white list-none px-8 ">
            {navlinks.map((navdata, index) => (
              <NavLink to={navdata.path} key={index} activeClassName="active">
                <li className='hover:text-lg'>{navdata.title}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="text-white px-7 py-3.5 cursor-pointer hover:text-black " onClick={handleLogoClick}>
          <FontAwesomeIcon icon={faUser} className="text-3xl" />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <h2 className="text-2xl font-bold mb-4 mt-3 ">You read my portfolio?</h2>
            <p>Thank you for taking the time to view my work. 😉</p>
            <button
              className="absolute top-2 right-4 text-xl font-bold text-gray-700 hover:text-white hover:bg-red-600 h-7 w-7 rounded-full"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
