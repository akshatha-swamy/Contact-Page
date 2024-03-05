import React,{useState} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phone.css";



const Card = () => {
    const [ph, setPh] = useState("");
    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-full p-5 rounded-xl shadow-none lg:shadow-xl md:shadow-none ">
                <form>
                    <div className="flex flex-col mx-4">
                        <h1 className="flex justify-start py-2" style={{ fontFamily: "Play" }}>Name</h1>
                        <input type="text" name="name" className="w-full h-8 border-2 border-solid-navbar-200 p-2 outline-none text-xl shadow-md rounded-md" style={{ fontFamily: "Farsan" }} />
                    </div>
                    <div className="flex flex-col mx-4">
                        <h1 className="flex justify-start py-2" style={{ fontFamily: "Play" }}>Email</h1>
                        <input type="Email" name="name" className="w-full h-8 border-2 border-solid-navbar-200 p-2 outline-none text-xl shadow-md rounded-md" style={{ fontFamily: "Farsan" }} />
                    </div>
                    <div className="flex flex-col mx-4">
                        <h1 className="flex justify-start py-2" style={{ fontFamily: "Play" }}>Phone Number</h1>
                        <PhoneInput country={"in"} value={ph} onChange={setPh} />
                    </div>
                    <div className="flex flex-col mx-4">
                        <h1 className="flex justify-start py-2" style={{ fontFamily: "Play" }}>Message</h1>
                        <textarea type="" name="name" className="w-full h-20 border-2 border-solid-navbar-200 p-2 outline-none text-xl shadow-md rounded-md" style={{ fontFamily: "Farsan" }} /><br />
                    </div>
                    <div className="h-12 w-full flex justify-center items-center">
                        <button className="h-full w-2/5 text-lg border border-4 border-navbar-100 rounded-lg px-auto text-center text-navbar-100 hover:bg-navbar-100 hover:text-white" style={{ fontFamily: "Play" }}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Card;
