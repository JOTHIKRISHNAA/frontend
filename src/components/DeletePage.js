// import React, { useState } from 'react';
// import "./Delete.css";
// import axios from 'axios';

// function DeletePage() {
//   const [id, setid] = useState('');

//   const handleChange = (event) => {
//     setid(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Call delete API with the ID
//     console.log('Deleting post with ID ${id}');
//     axios.delete('http://localhost:8080/del?id=${id}',DeletePage)
//       .then(() => {
//         console.log('Post with ID ${id} has been deleted');
//         // Reset the ID input field
//         setid('');
//       })
//       .catch(error => {
//         console.error('Error deleting post with ID ${id}: ${error}');
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         ID:
//         <br></br>
//         <input type="text" value={id} onChange={handleChange} />
//       </label>
//       <button type="submit">Delete</button>
//     </form>
//   );
// }

// export default DeletePage;
import React, { useState } from 'react';
import './Delete.css';
import axios from 'axios';

const DeletePage = () => {
  const [id, setid] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/del?id=${id}`,DeletePage)
      .then(response => {
        alert('Order deleted successfully!');
        setid('');
         
      })
      .catch(error => {
        alert('Failed to delete movie.');
        console.error(error);
      });
  };

  return (
    <div>
      <h1>DELETE ORDER  </h1>
      <form>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={event => setid(event.target.value)}
          />
        </div>
         
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default DeletePage;