// // //  import { Link } from "react-router-dom";
// // import axios from "axios";
// // import React, { Component } from "react";
// // class Fooddelivery extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       CustomerName:'',
// //       Address:'',
// //       PhoneNumber:'',

// //     };
// //   }

// //   handlefirstNameChange = (event) => {
// //     this.setState({ CustomerName: event.target.value });
// //   };

// //   handleLastNameChange = (event) => {
// //     this.setState({ Address: event.target.value });
// //   };
// //   // handlemailidChange = (event) => {
// //   //   this.setState({ mailid: event.target.value });
// //   // };
// //   handlenumberChange = (event) => {
// //     this.setState({ PhoneNumber: event.target.value });
// //   };
// //   // handlepassChange = (event) => {
// //   //   this.setState({ pass: event.target.value });
// //   // };

// //   handleSubmit = (event) => {
// //     event.preventDefault();
// //     const data = {
// //       CustomerName: this.state.CustomerName,
// //       Address: this.state.Address,
// //       // mailid: this.state.mailid,
// //       PhoneNumber: this.state.PhoneNumber
// //       // pass: this.state.pass
// //     };
// //     axios.post('http://localhost:8080/post', data)
// //   };
// //     render(){
// //       return(
// //         <div className="logLogin" >
// //       <div className="reg">    
// //           <form id="regform" name="suForm" onSubmit={this.handleSubmit}>    
// //             <label className="name" ><b>Customer Name:</b>
// //             </label>
            
// //             <input type="text" name="uname" id="uname" placeholder="Customer Name" value={this.state.CustomerName} onChange={this.handlefirstNameChange} />    
// //             <br></br><br></br>
// //             <label className="name" id="lname2"><b>Address:</b>
// //             </label>
          
// //             <input type="text" id="uname" placeholder="Address" value={this.state.Address} onChange={this.handleLastNameChange} /> 
// //             <br></br><br></br>
// //             {/* <label className="name" id="name" ><b>Email ID:</b>
// //             </label>
// //             <input type="email" id="uname" placeholder="Email Id" value={this.state.mailid} onChange={this.handlemailidChange} />  */}
// //             <label className="name" id="lname" ><b>Contact No:</b>
// //             </label>
// //             <input type="text" id="uname" placeholder="Number" value={this
// //             .state.number} onChange={this.handlenumberChange} /> 
// //             <br></br><br></br>
// //             {/* <label className="name" id="name1" ><b>Password:</b>
// //             </label>
// //             <input type="password" id="uname" value={this.state.pass} onChange={this.handlepassChange} />  */}
// //             {/* <label className="name" id="lname1"><b>Confirm:</b>
// //             </label>
// //             <input type="password" id="uname"/> */}
// //             {/* <br></br><br></br> */}
// //             <button className="button" type="submit">Submit</button>
// //           </form>
// //         </div></div>
// //   );
// //             }
// //           }
// // export default Fooddelivery;
// import axios from "axios";
// import React, { Component } from "react";
// import './food.css';


// class FoodDeliveryForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       customerName: '',
//       address: '',
//       phoneNumber: '',
//       errorMessage: '',
//     };
//   }

//   handleCustomerNameChange = (event) => {
//     this.setState({ customerName: event.target.value });
//   };

//   handleAddressChange = (event) => {
//     this.setState({ address: event.target.value });
//   };

//   handlePhoneNumberChange = (event) => {
//     this.setState({ phoneNumber: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       customerName: this.state.customerName,
//       address: this.state.address,
//       phoneNumber: this.state.phoneNumber,
//     };
//     fetch('http://localhost:8080/post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(response => {
//         console.log(response);
//         // reset the form
//         this.setState({
//           customerName: '',
//           address: '',
//           phoneNumber: '',
//           errorMessage: '',
//         });
//       })
//       .catch(error => {
//         console.log(error);
//         this.setState({ errorMessage: 'Error submitting form. Please try again.' });
//       });
//   };

//   render() {
//     return (
      
//       <div className="foodDeliveryForm">
//         <h1>FOOD DELIVERY</h1>
//         {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
//         <form onSubmit={this.handleSubmit}>    
//           <label htmlFor="customerName"><b>Customer Name:</b></label>
//           <input type="text" id="customerName" placeholder="Customer Name" value={this.state.customerName} onChange={this.handleCustomerNameChange} style={{width:300}} />    
//           <br /><br />

//           <label htmlFor="address"><b>Address:</b></label>
//           <input type="text" id="address" placeholder="Address" value={this.state.address} onChange={this.handleAddressChange}style={{width:300}} /> 
//           <br /><br />

//           <label htmlFor="phoneNumber"><b>Contact No:</b></label>
//           <input type="text" id="phoneNumber" placeholder="Number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}style={{width:300}} /> 
//           <br /><br />

//           <button type="submit" >Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default FoodDeliveryForm;