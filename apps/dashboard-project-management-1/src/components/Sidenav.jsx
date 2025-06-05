import React from 'react';

// ===
// Sidenav menus
const MENU_ITEMS = [
    { label: "Dashboard", icon: "chart-line" },
    { label: "Orders", icon: "file" },
    { label: "Products", icon: "file-fragment" },
    { label: "Customers", icon: "user-group" },
    { label: "Reports", icon: "file-lines" },
    { label: "Integrations", icon: "layer-group" }
];

const REPORTS = [
    "Current month",
    "Last quarter",
    "Social engagement",
    "Year-end sale"
];
// === End Sidenav menus

/**
 * Sidenav
 * Created on 6/3/25
 */
const Sidenav = () => (
    <nav className="fixed left-0 top-[66px] w-[240px] h-full z-10 text-white bg-[#1b2431] shadow-none">
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                {MENU_ITEMS.map((menu, idx) => (
                    <li className="nav-item" key={idx}>
                        <a
                            className="border-l-2 border-transparent text-[#738297] py-2 px-3 hover:text-white hover:border-l-blue-400 flex items-center"
                            href="#"
                        >
                            <i
                                className={
                                    "fa-solid fa-" +
                                    menu.icon +
                                    " text-xl w-8 text-center"
                                }
                            ></i>
                            {menu.label}
                        </a>
                    </li>
                ))}
            </ul>

            <h6 className="sidebar-heading flex justify-between items-center pl-3 mt-4 mb-1 text-[#738297]">
                <span>Saved reports</span>
                <a className="flex items-center text-[#738297]" href="#">
                    <i className="zmdi zmdi-plus-circle-o"></i>
                </a>
            </h6>

            <ul className="nav flex-column mb-2">
                {REPORTS.map((label) => (
                    <li key={label}>
                        <a
                            className="border-l-2 border-transparent text-[#738297] py-2 px-3 hover:text-white hover:border-l-blue-400 flex items-center"
                            href="#"
                        >
                            <i className="fa-solid fa-file-lines text-xl text-xl w-8 text-center"></i>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);

export default Sidenav;
