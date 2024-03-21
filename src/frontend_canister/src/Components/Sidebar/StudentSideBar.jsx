/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { BiLogOutCircle } from "react-icons/bi";
import { logoutStart } from '../Reducers/InternetIdentityReducer';

import IndonesiaLogo from "../../../assets/Vectors/logo.png";
import { useSidebar } from '../../hooks/useSidebar';

const SideBar = ({ setClickCounter }) => {
    let navLinkStyle = "w-full flex items-center py-2.5 my-3 px-2 lg:px-4 rounded-md transition duration-200 hover:bg-purple-500 hover:text-white text-[#696969]";
    let navLinkStyleActive = "w-full flex items-center py-2.5 my-3 px-2 lg:px-4 rounded-md bg-purple-500 text-white";

    const sidebarStruct = useSidebar()

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);

        try {
            dispatch(logoutStart());
            setIsLoading(false);
            window.location.href =
                process.env.DFX_NETWORK === "ic" ?
                    '/' :
                    `/?canisterId=${process.env.FRONTEND_CANISTER_CANISTER_ID}`;
        } catch (error) {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="relative flex-col hidden h-full px-2 space-y-6 py-7 lg:px-3 md:flex">

                <div className='flex flex-row items-center justify-center'>
                    <a href="#" className="w-20 h-10 space-x-2 text-white md:w-auto md:h-20 lg:px-4">
                        <img src={IndonesiaLogo} alt="Logo" className='object-contain w-full h-full' />
                    </a>
                </div>

                <nav className="flex flex-col items-start justify-start w-full">
                    <div className='w-full'>
                        {
                            sidebarStruct.map((item) => (
                                <NavLink key={item.id} to={item.path}
                                    className={({ isActive }) => isActive ? navLinkStyleActive : navLinkStyle}
                                    onClick={() => {
                                        setClickCounter(p => p + 1)
                                    }}>
                                    {item.icon}
                                    <span className="hidden sidebar_text_style lg:block">{item.name}</span>
                                </NavLink>
                            ))
                        }
                    </div>
                </nav>

                <div className='absolute left-0 flex flex-col items-center justify-center w-full px-3 bottom-2'>

                    <button
                        className="flex items-center justify-center w-full gap-2 py-2 text-gray-600 rounded-lg hover:bg-red-500 hover:text-white"
                        onClick={() => { !isLoading && handleLogout() }}>
                        <BiLogOutCircle size={28} />
                        <span className='hidden text-medium lg:block'>Log Out</span>
                    </button>
                </div>
            </div>
        </>

    )
}

export default SideBar;
