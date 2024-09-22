import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
function Navbar() {
  const navlinks=[
    {
      title:"Home",
      path:"/"
    },
    {
      title:"Projects",
      path:"/projects"
    },
    {
      title:"Contact",
      path:"/contact"
    }

  ]
  return (
    <div className="k w-full h-[10vh]  flex  shadow-xl drop-shadow-xl rounded-sm">
      <div className="w-1/2 flex px-8 text-2xl  text-white font-bold items-center  justify-start">
      Abinaya S</div>
      <div className='flex  justify-end text-white font-bold w-1/2 items-center hover:'>
      <ul className="flex justify-between gap-5 items-center  text-white list-none px-8 ">
         {
          navlinks.map((navdata,index)=>(
            <NavLink to={navdata.path} key={index}>
              <li>{navdata.title}</li>
            </NavLink>
          ))
         }
      </ul>
      </div>
      <div className="text-white px-7 py-3.5">
        <FontAwesomeIcon icon={faUser} className="text-3xl" /> 
      </div>
    </div>
  );
}

export default Navbar;