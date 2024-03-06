import React,{useState} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import "./phone.css";



const Card = () => {
    
    const [phone, setPhone] = useState('');
   const[name,setName]=useState('');
   const[email,setEmail]=useState('');
   const[message,setMessage]=useState('');

    const onSubmit=(e)=>{
        e.preventDefault(); // Prevent default form submission behavior
        axios.post(`https://sheet.best/api/sheets/3f06c792-8e25-43b5-afab-d81383d5be53`, { name, email, phone, message })
            .then(response => {
                console.log("Data sent successfully:", response);
                // Optionally, you can reset the form fields after successful submission
                setName('');
                setEmail('');
                setPhone('+91');
                setMessage('');
                
            })
            .catch(error => {
                console.error("Error sending data:", error);
                // Handle error appropriately
            });
    }



    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-full p-5 rounded-xl shadow-none lg:shadow-xl md:shadow-none ">
                <form>
                    <div className="flex flex-col mx-4">
                        <h1 className="flex justify-start py-2" style={{ fontFamily: "Play" }}>Name</h1>
                        <input type="text" className="w-full h-8 border-2 border-solid-navbar-200 p-2 outline-none text-xl shadow-md rounded-md" onChange={(e)=>setName(e.target.value)} placeholder="name"  style={{ fontFamily: "Farsan" }} required value={name}/>
                    </div>
                    <div className="flex flex-col mx-4">
                        <h1 className="flex justify-start py-2" style={{ fontFamily: "Play" }}>Email</h1>
                        <input type="Email"  className="w-full h-8 border-2 border-solid-navbar-200 p-2 outline-none text-xl shadow-md rounded-md"onChange={(e)=>setEmail(e.target.value)}  placeholder="abc@gmail.com" style={{ fontFamily: "Farsan" }} value={email} required/>
                    </div>
                    <div className="flex flex-col mx-4">
                        <h1 className="flex justify-start py-2" style={{ fontFamily: "Play" }}>Phone Number</h1>
                        <PhoneInput country={"in"} value={phone} onChange={(phone) => {
                            setPhone(phone)}} required/>
                    </div>
                    <div className="flex flex-col mx-4">
                        <h1 className="flex justify-start py-2" style={{ fontFamily: "Play" }}>Message</h1>
                        <textarea  className="w-full h-20 border-2 border-solid-navbar-200 p-2 outline-none text-xl shadow-md rounded-md" onChange={(e)=>setMessage(e.target.value)} placeholder="enter the message" style={{ fontFamily: "Farsan" }} value={message} required/><br />
                    </div>
                    <div className="h-12 w-full flex justify-center items-center">
                        <button className="h-full w-2/5 text-lg border border-4 border-navbar-100 rounded-lg px-auto text-center text-navbar-100 hover:bg-navbar-100 hover:text-white" style={{ fontFamily: "Play" }}onClick={onSubmit}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Card;
