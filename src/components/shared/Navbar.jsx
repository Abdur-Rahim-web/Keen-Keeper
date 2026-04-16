import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoMdHome, IoMdTime } from 'react-icons/io';
import { NavLink } from 'react-router';
import MyNavLink from './MyNavLink';
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 '>
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {/* <NavLink to={'/'} className={({isActive}) => `flex justify-center items-center gap-1 text-[#244D3F] font-bold rounded-xl p-2 ${isActive ? 'bg-[#244D3F] text-white ' : ''}`}><IoMdHome /> Home</NavLink>

                        <NavLink to={'/timeline'} className={({isActive}) => `flex justify-center items-center gap-1 text-[#244D3F] font-bold rounded-xl p-2 ${isActive ? 'bg-[#244D3F] text-white ' : ''}`}><IoMdTime /> Timeline</NavLink>

                        <NavLink to={'/stats'} className={({isActive}) => `flex justify-center items-center gap-1 text-[#244D3F] font-bold rounded-xl p-2 ${isActive ? 'bg-[#244D3F] text-white ' : ''}`}><ImStatsDots /> Stats</NavLink> */}

                        {/* from MyNavLink component */}
                        <MyNavLink to={"/"}><IoMdHome />Home</MyNavLink>
                        <MyNavLink to={"/timeline"}><IoMdTime />Timeline</MyNavLink>
                        <MyNavLink to={"/stats"}><ImStatsDots />Stats</MyNavLink>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;