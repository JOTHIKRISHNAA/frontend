import React, { useState, useEffect } from "react";
import './Update.css';
import axios from "axios";

function UpdatePage() {
  const [update, setUpdate] = useState({
    id: "",
    customerName: "",
    customerAddress: "",
    phoneNumber: "",
    foodname: "",
  });

  const handleChange = (event) => {
    setUpdate({ ...update, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8080/put', update).then((res) => {
      console.log(res.data);
      setUpdate({ id: "", customerName: "",customerAddress:"", phonenumber: "", foodname: "" });
    });
  };

  return (
    <div>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <br></br>
          <input type="number" name="id" style={{width:250}} value={update.id} onChange={handleChange} />
        </label>
        <label>
          CustomerName:
          <br></br>
          <input type="text" name="customerName" style={{width:250}} value={update.customerName} onChange={handleChange} />
        </label>
        <label>
            CustomerAddress:
            <br></br>
          <input type="text" name="customerAddress" style={{width:250}} value={update.customerAddress} onChange={handleChange} />
        </label>
        <label>
           PhoneNumber:
           <br></br>
          <input type="numbertext" name="phoneNumber" style={{width:250}} value={update.phoneNumber} onChange={handleChange} />
        </label>
        <label>
          FoodName:
          <br></br>
          <input type="text" name="foodname" style={{width:250}} value={update.foodname} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
}
export default UpdatePage;