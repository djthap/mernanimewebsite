import React from 'react'
import { BrowserRouter as Router, useNavigate as navigator } from 'react-router-dom'
import RouteList from './RouteList'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {

  return (
    <div className='app'>

   <Router>
    <RouteList/>
   </Router>
    </div>
  )
}
