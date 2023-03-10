import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import GameProfile from '../pages/GameProfile.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import SearchResult from '../pages/SearchResult.jsx';
import UserList from '../pages/UserList.jsx';
import UserProfile from '../pages/UserProfile.jsx';
import MyProfile from '../pages/MyProfile.jsx';



export default function App(props) {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/gameprofile:id' element={<GameProfile/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/results:params' element={<SearchResult />} />
          <Route path='/userlist' element={<UserList />} />
          <Route path='/userprofile:id' element={<UserProfile />} />
          <Route path='/myprofile' element={<MyProfile />} />
      </Routes>
    </BrowserRouter>

  );

}