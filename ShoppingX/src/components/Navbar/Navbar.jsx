import React from 'react'
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
// import DarkMode from './DarkMode';
import "../../index.css";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#Services",
    },
    {
        id: 3,
        name: "Women Wear",
        link: "/#",
    },
    {
        id: 3,
        name: "Men Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Electronics",
        link: "/#",
    }
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "New Arrivals",
        link: "/#",
    },
    {
        id: 3,
        name: "Best Sellers",
        link: "/#",
    }
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white md:bg-black dark:bg-gray-900/10 dark:text-black text-white duration-200 relative z-40">
        
        {/* upper Navbar */}
        <div className="bg-orange-200 py-2">
            <div className="container flex justify-between items-center">
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="Logo" className="w-10"/>
                        Mall
                    </a>
                </div>

                {/* search bar*/}
                <div className="flex justify-between items-center gap-4">
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border bg-white px-2 py-1 focus:outline-none focus:border-1 focus:border-[#fea928]"/>
                        <IoMdSearch className="text-gray-500 group-hover:text-[#fea928] absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>

                    {/* order button */}
                    <button onClick={() => alert("Ordering not available yet")} className="bg-gradient-to-r from-[#fea928] to-[#ed8900] transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                        <span className="group-hover:block hidden transition-all duration-200">Order</span>
                        <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                    </button>

                    {/* Dark mode switch */}
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </div>
        {/* lower Navbar */}
        <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
                {
                    Menu.map((data)=>(
                        <li key={data.id}>
                            <a href={data.link} className='inline-block px-4 hover:text-orange-300 duration-200'>{data.name}</a>
                        </li>
                    ))
                }
                {/* Simple Dropdown and Links */}
                <li className='group relative cursor cursor-pointer'>
                    <a href="/#" className="flex items-center gap-[2px] py-2">Trending
                        <span>
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                        <ul>
                            {DropdownLinks.map((data) => (
                                <li key={data.id}>
                                    <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-orange-300/20'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;