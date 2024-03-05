import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";


const Footer=()=>{
    return(
        <>
        <div className="w-full h-12 items-center px-9">
        <div className="flex gap-9 justify-between lg:justify-start">
            <div>
            <p  className="text-xl sm:text-md" style={{fontFamily:"Madimi One"} }>CONTACT US</p>
            </div>
            <div className="items-center flex gap-4">
            <MdMailOutline className="text-black w-8 h-8 hover:text-navbar-100 cursor-pointer "/>
             <FaInstagram className="text-black w-8 h-8 hover:text-navbar-100 cursor-pointer"/>
             <TbBrandFacebook className="text-black w-8 h-8 hover:text-navbar-100 cursor-pointer"/>
             <FiYoutube className="text-black w-8 h-8 hover:text-navbar-100 cursor-pointer"/>
             
             
            </div>
        </div>

        </div>

        </>
    )
}

export default Footer;