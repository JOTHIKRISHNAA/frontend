import React, { useState, useEffect } from 'react';
import "./get.css"
function GetPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/get')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>YOUR ORDERS</h1>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>CustomerName</th>
          <th>PhoneNumber</th>
          <th>Address</th>
          <th>FoodName</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.customerName}</td>
            <td>{post.phoneNumber}</td>
            <td>{post.customerAddress}</td>
            <td>{post.foodname}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default GetPage;