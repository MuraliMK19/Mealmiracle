import React, { useState } from 'react'

export default function Ask() {
    
    const backgr={
        backgroundImage:"url('https://cdn.pixabay.com/photo/2020/06/14/15/55/landscape-5298395_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: 'fixed',
        height: "100vh"
    }
    const addtotable=()=>{
        let username= document.getElementById("username").value;
        let numpeople= document.getElementById("numofpeople").value;
        let mobile= document.getElementById("mobile").value;
        let address= document.getElementById("address").value;
        let city= document.getElementById("city").value;
        let district= document.getElementById("district").value;
        let pincode=document.getElementById("pincode").value;
        
        let obj={
            names:username,
            numberofpeople:numpeople,
            mobilenumber:mobile,
            addressofperson:address,
            location:city,
            pincodes:pincode,
            districts:district
        }
        const passdata=[]
        passdata.push(obj);
        let str = JSON.stringify(passdata);
        localStorage.setItem("data",str)
        alert("Thanks for raising your interest on donating food. You'll be contacted soon by the Donors.")
    }
    return (
        <div style={backgr}> 
            <form className='form-control w-50 mx-auto' style={{backgroundColor:"rgb(100,100,100,.5)"}}>
            <label className='text-white' style={{fontWeight:"bolder", fontSize:"20px"}} >
                Name:
                <input type="text" id='username' name="name" required className="form-control" style={{width:"100%"}}/>
            </label>
            <br />

            <label className='text-white' style={{fontWeight:"bolder", fontSize:"20px"}}>
                Number of People Need Help:
                <input type="number" id='numofpeople' name="numberOfPeople" required className="form-control" style={{width:"100%"}}/>
            </label>
            <br />

            <label className='text-white' style={{fontWeight:"bolder", fontSize:"20px"}}>
                Mobile Number:
                <input type="tel" id='mobile' name="mobileNumber" required className="form-control" style={{width:"100%"}} />
            </label>
            <br />

            <label className='text-white' style={{fontWeight:"bolder", fontSize:"20px"}}>
                Address:
                Line 1:
                <textarea
                    name="address" id='address' required className="form-control"
                    style={{width:"100%"}}/>
            </label >
            <br />
            <label className='text-white' style={{fontWeight:"bolder", fontSize:"20px"}}>
                City:
                <input type="text" id='city' name="City" required className="form-control" style={{width:"100%"}}/>
            </label>
            <br />
            <label className='text-white' style={{fontWeight:"bolder", fontSize:"20px"}}>
                District:
                <input type="text" id='district' name="District" required className="form-control" style={{width:"100%"}} />
            </label>
            <br />

            <label className='text-white' style={{fontWeight:"bolder", fontSize:"20px"}}>
                Pincode:
                <input type="text" id='pincode' name="pincode" required className="form-control" style={{width:"100%"}}/>
            </label>
            <br />

            <button type="submit" className='btn btn-warning m-3' onClick={addtotable}>Submit</button>
            </form>
        </div>
    )
}
