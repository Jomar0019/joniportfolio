import { useState } from "react";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Nav = () => {

    const [ nav, setNav ] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className="w-full shadow-md fixed">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center h-[70px] px-6 md:px-0">
        <h1 className="text-2xl font-bold">Joni Malazarte</h1>
        <ul className="hidden md:flex gap-6 font-semibold ">
            <li>Home</li>
            <li>About Me</li>
            <li>Books</li>
            <li>Reviews</li>
            <li>Contact</li>
        </ul>
        {/* Menu  */}
        <div className='cursor-pointer z-10 md:hidden flex' onClick={handleNav}>
            {
                !nav ? <RiMenu3Fill size={28}/> : <RiCloseFill size={30}/>
            }
        </div>
        
        {/* Mobile Nav  */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-12 bg-white'}>
            <li className="text-3xl cursor-pointer">Home</li>
            <li className="text-3xl cursor-pointer">About Me</li>
            <li className="text-3xl cursor-pointer">Books</li>
            <li className="text-3xl cursor-pointer">Reviews</li>
            <li className="text-3xl cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
