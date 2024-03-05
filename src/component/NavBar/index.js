import React from "react";

const Navbar=()=>{
    return(
        <>
        <div className="w-full h-16  flex justify-end items-center px-6">
            <ul className="flex gap-9 text-xl items-center text-navbar-100 font-bold">
                <li className="px-4 cursor-pointer hover:text-black ">HOME</li>
                <li className="px-4 cursor-pointer hover:text-black ">ABOUT</li>
                <li className="px-4 cursor-pointer hover:text-black ">CONTACT US</li>

            </ul>
        </div>

        </>
    )
}

export default Navbar;