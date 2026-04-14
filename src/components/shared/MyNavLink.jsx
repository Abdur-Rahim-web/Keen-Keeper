import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive}) => `flex justify-center items-center gap-1 text-[#244D3F] font-bold rounded-xl p-2 ${isActive ? 'bg-[#244D3F] text-white ' : ''}`}> {children}</NavLink>
        </div>
    );
};

export default MyNavLink;