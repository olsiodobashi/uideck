import React from 'react';

/**
 * Navbar
 * Created on 6/3/25
 */
const Navbar = () => (
    <nav className="fixed bg-[#1b2431] top-0 left-0 flex flex-row justify-between p-2 items-center space-x-4 w-full z-10">
        <a className="text-white text-nowrap px-3" href="#">
            Logo
        </a>
        <input
            className="rounded-md w-full bg-[#313D4F] text-white px-4 py-2 max-w-2/3"
            type="text"
            placeholder="Search"
            aria-label="Search"
        />
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
                <a className="nav-link text-[#738297] hover:text-white" href="#">
                    <img
                        src="https://picsum.photos/50/50"
                        className="rounded-full shadow-md w-[40px] h-[40px]"
                        alt={"Placeholder image"}/>
                </a>
            </li>
        </ul>
    </nav>
);

export default Navbar;
