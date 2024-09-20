import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
function Navbar() {
  return (
    <div className="k w-full h-[10vh]  flex  shadow-xl drop-shadow-xl rounded-sm">
      <div className="w-1/2 flex px-8 text-2xl  text-white font-bold items-center  justify-start">
      Abinaya S</div>
      <div className='flex  justify-end text-white font-bold w-1/2 items-center'>
      <ul className="flex justify-between gap-5 items-center px-8 ">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/projects">Projects </Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
        
      </ul>
      </div>
      <div className="text-white px-7 py-3.5">
        <FontAwesomeIcon icon={faUser} className="text-3xl" /> 
      </div>
    </div>
  );
}

export default Navbar;