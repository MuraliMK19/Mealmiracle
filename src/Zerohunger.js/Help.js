import React, { useState, useEffect } from 'react';
import { Modal } from 'bootstrap';

export default function Help() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("data"));
    if (obj) {
      setData(obj);
    }
  }, []);

  const showHelp = () => {
    return data.map((x) => (
      <tr>
        <td>{x.names}</td>
        <td>{x.numberofpeople}</td>
        <td>{x.mobilenumber}</td>
        <td>{x.addressofperson}</td>
        <td>{x.location}</td>
        <td>{x.districts}</td>
        <td>{x.pincodes}</td>
        <td><button type="button" onClick={() => handleHelp()} className='btn border-dark'>Help now</button></td>
      </tr>
    ));
  };

  const handleHelp = () => {  
    const modal = new Modal(document.getElementById('helpModal'));
    modal.show();
  };

  return (
    <div style={{backgroundImage:"url('https://cdn.pixabay.com/photo/2019/10/19/16/30/poverty-4561704_1280.jpg')"}}>
      <div className='container '>
        {/* <button type='button' onClick={showHelp} className='btn bg-info m-2'>Show helps..</button> */}
        <div style={{ height: "700px"}}>
          <table className='table mx-auto' style={{ backgroundColor: "grey", width:"80%" }}>
            <thead>
              <tr>
                <th>Need help for</th>
                <th>People needs help</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>City</th>
                <th>District</th>
                <th>Pincode</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {showHelp()}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="helpModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Help Information</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
                <div className='d-flex justify-content-between'>

                    <button type='button' className='btn' style={{width:"300px", height:"300px", backgroundColor:'rgb(66, 245, 167,.5)', color:"black", fontWeight:"bolder"}}>
                        <img src='https://t3.ftcdn.net/jpg/03/32/58/10/360_F_332581030_Mfbe3YYwexIWUZQ3qNrSt0XFP35q6fxI.jpg' height={"100px"}/><br/> Pay them for Food</button>
                    <button type='button' className='btn' style={{width:"300px", height:"300px", backgroundColor:'rgb(204, 104, 169,.5)', color:"black", fontWeight:"bolder"}}>
                    <img src="https://cdn.pixabay.com/photo/2021/05/15/13/20/hunger-6255733_1280.png" alt="" height={"100px"} width={"100px"} /><br/>
                        Give a food</button>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
