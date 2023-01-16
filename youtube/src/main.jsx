import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { Feed, ChannelDetail, VideoDetail, SearchFeed } from './components'
import "./index.css"
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        {/*<Route path="/search/:searchTerm" element{<SearchFeed/>}/>*/}
      </Routes>
      
    
    </BrowserRouter>
  </React.StrictMode>,
)
