import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/nav';
import { Route, Routes } from "react-router-dom";
import GetPage from './components/GetPage';
import DeletePage from './components/DeletePage';
import Postpage from './components/PostPage'
import UpdatePage from './components/UpdatePage';
function App() {
  return (
    <>
    <Nav/>
    <div classname="image">
    </div>
    <Routes>
    <Route exact path="/home" element={<home />} />
        <Route path="/Postpage" element={<Postpage />} />
        <Route path="/GetPage" element={<GetPage />} />
        <Route path="/UpdatePage" element={<UpdatePage />} />
        <Route path="/Deletepage" element={<DeletePage />} />
      </Routes>
  


  
    </>
  );
}

export default App;
