import React from "react";

//image
import img from "../assets/mail.jpg";

//components
import Card from "../component/card";
import Footer from "../component/footer";

//external css
import "./HomePage.css";

const NavLg=()=>{
  return(
    <>

    <div className="relative  gap-2 flex-grow" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    <div className="absolute right-12 mx-6 p-3" style={{ width: "35%", height: "90%" }}>
          <h1 className="w-full text-center text-3xl text-navbar-100 mx-9 my-2 font-bold tracking-wide" style={{ fontFamily: "Russo One" }}>LETS GET IN TOUCH</h1>
    </div>
    <div className="absolute  w-3/5 h-full">
          <img src={img} alt="mail" className="w-full items-center animated-image" />
    </div>
    <div className="absolute right-6 top-12 mx-9 my-2 p-3" style={{ width: "35%", height: "85%" }}>
        <Card />
      </div>
      <div className="fixed bottom-0 w-full animated-image">
        <Footer />
      </div>
    </div>
 
    </>
  )
}

const NavMd=()=>{
  return(
    <>
     <div className="relative  gap-2 flex-grow items-center" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

     <div className="p-3 w-full text-center m-4" >
          <h1 className="w-full text-center text-3xl text-navbar-100  font-bold tracking-wide" style={{ fontFamily: "Russo One" }}>LETS GET IN TOUCH</h1>
    </div>

      <div className="w-full">
      <img src={img} alt="mail" className="w-full items-center animated-image-md" />
      </div>

      <div className="w-full flex justify-center items-center" >
        <Card />
      </div>

      <div className="my-5 mx-2 w-full animated-image">
        <Footer />
      </div>

     </div>
    </>
  )
}

const NavSm=()=>{
  return(
    <>
      <div className="relative  gap-2 flex-grow items-center" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <div className="p-3 w-full text-center my-2" >
          <h1 className="w-full text-center text-3xl text-navbar-100  font-bold tracking-wide" style={{ fontFamily: "Russo One" }}>LETS GET IN TOUCH</h1>
      </div>

      <div className="h-full">
      <img src={img} alt="mail" className="w-full items-center animated-image-md" />
      </div>

      <div className="w-full flex justify-center items-center" >
        <Card />
      </div>

      <div className="my-3 mx-2 w-full animated-image">
        <Footer />
      </div>

      </div>

    </>
  )
  
}
const HomePage=()=>{
    return (
        <>

          <div className="bg-navCol_1-700 ">
              <div className="md:hidden">{
                  <NavSm/>
              }</div>

              <div className="hidden lg:hidden md:flex">{
                  <NavMd/>
              }</div>

              <div className="hidden lg:flex">{
                  <NavLg/>
               }</div>
          </div>
          </>
)

}

export default HomePage;
