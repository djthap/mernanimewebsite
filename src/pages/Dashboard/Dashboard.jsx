import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import "./Dashboard.css"

export default function Dashboard({Child}) {

  return (
    <div className='backgroud'>
      <Header/>
      <div className='child_section'>

      {
        Child
      }
      </div>
      <Footer/>

    </div>
  )
}
