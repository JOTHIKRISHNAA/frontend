import React, { useState } from 'react';
import "./Postpage.css"

function PostPage() {
  const [id, setid] = useState('');
  const [customerAddress, setcustomerAddress] = useState('');
  const [customerName, setcustomerName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [foodname, setfoodname] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const post = { id, customerAddress, customerName,  phoneNumber, foodname };
    try {
      const response = await fetch('http://localhost:8080/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Post created successfully');
      // clear the form
      setid('');    
      setcustomerAddress('');
      setcustomerName('');
      setphoneNumber('');
      setfoodname('');
      setError(null);
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Error creating post. Please try again later.');
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" style={{width:250}} value={id} onChange={(event) => setid(event.target.value)}/>
        <label htmlFor="customer_name">CustomerName:</label>
        <input type="text" id="customerName" style={{width:250}} value={customerName} onChange={(event) => setcustomerName(event.target.value)}/>
        <label htmlFor="customerAddress">CustomerAddress:</label> 
        <input type="text" id="customerAddress" style={{width:250}} value={customerAddress} onChange={(event) => setcustomerAddress(event.target.value)}/>
        <label htmlFor="phoneNumber">PhoneNumber:</label>
        <input type="text" id="phoneNumber" style={{width:250}} value={phoneNumber} onChange={(event) => setphoneNumber(event.target.value)}/>
        <label htmlFor="foodname">FoodName:</label>
        <input type="text" id="foodname" style={{width:250}} value={foodname} onChange={(event) => setfoodname(event.target.value)}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostPage;