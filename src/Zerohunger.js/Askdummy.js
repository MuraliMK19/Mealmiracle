// import React from 'react'
import React, { useState } from 'react'


export default function Askdummy() {
    const backgr = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2020/06/14/15/55/landscape-5298395_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: 'fixed',
        height: "100vh"
    }
    const [helplist, setHelplist] = useState([])
    // const helplist=[]
    const addtotable = () => {
        const username = document.getElementById("username").value;
        console.log("hi");
        const numpeople = document.getElementById("numofpeople").value;
        const mobile = document.getElementById("mobile").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("username").value;
        const pincode = document.getElementById("pincode").value;
        const obj = {
            names: username,
            numberofpeople: numpeople,
            mobilenumber: mobile,
            addressofperson: address,
            location: city,
            pincodes: pincode
        }
        
        setHelplist([...helplist, obj])
    }
    console.log(helplist)
    return (
        <div style={backgr}>
            <form className='form-control w-50 mx-auto' style={{ backgroundColor: "rgb(100,100,100,.5)" }}>
                <label className='text-white' style={{ fontWeight: "bolder", fontSize: "20px" }} >
                    Name:
                    <input type="text" id='username' name="name" required className="form-control" style={{ width: "350px" }} />
                </label>
                <br />

                <label className='text-white' style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    Number of People Need Help:
                    <input type="number" id='numofpeople' name="numberOfPeople" required className="form-control" style={{ width: "350px" }} />
                </label>
                <br />

                <label className='text-white' style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    Mobile Number:
                    <input type="tel" id='mobile' name="mobileNumber" required className="form-control" style={{ width: "350px" }} />
                </label>
                <br />

                <label className='text-white' style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    Address:
                    Line 1:
                    <textarea
                        name="address" id='address' required className="form-control"
                        style={{ width: "350px" }} />
                </label >
                <br />
                <label className='text-white' style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    City:
                    <input type="text" id='city' name="City" required className="form-control" style={{ width: "350px" }} />
                </label>
                <br />
                <label className='text-white' style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    District:
                    <input type="text" id='district' name="District" required className="form-control" style={{ width: "350px" }} />
                </label>
                <br />

                <label className='text-white' style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    Pincode:
                    <input type="text" id='pincode' name="pincode" required className="form-control" style={{ width: "350px" }} />
                </label>
                <br />

                <button type="submit" className='btn btn-warning m-3' onClick={addtotable}>Submit</button>
            </form>
        </div>
    )
}
