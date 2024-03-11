import React from 'react'
import Home from '../Pages/Home/Home'
import { Routes, Route } from "react-router-dom";
import Library from '../Pages/Library/Library'
import YourVideo from '../Pages/YourVideo/YourVideo'
import WatchHistory from '../Pages/WatchHistory/WatchHistory'
import Watchlater from '../Pages/WatchLater/Watchlater'
import LikedVideo from '../Pages/LikedVideo/LikedVideo'
import VideoPage from "../Pages/VideoPage/VideoPage"
import Chanel from "../Pages/Chanel/Chanel"
import Search from "../Pages/Search/Search"
import Login from "../Component/Navbar/Login/Login"
function AllRoutes({ setEditCreateChanelBtn,setVidUploadPage }) {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/WatchHistory" element={<WatchHistory />} />
      <Route path="/WatchLater" element={<Watchlater />} />
      <Route path="/LikedVideo" element={<LikedVideo />} />
      <Route path="/YourVideos" element={<YourVideo />} />
      <Route path="/videopage/:vid" element={<VideoPage />} />
      <Route path="/seacrh/:searchQuery" element={<Search />} />
     <Route 
     path="/chanel/:Cid"
     element={<Chanel setVidUploadPage={setVidUploadPage} 
    setEditCreateChanelBtn={setEditCreateChanelBtn}/>}
     />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default AllRoutes