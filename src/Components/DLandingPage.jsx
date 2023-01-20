import React from 'react'
import '../Styles/DLandingPage.css'
import BussinesCard from './BussinesCard'
import Nav from './Nav'
import firstImage from '../assets/img/primeraImagen.jpg'

const DLandingPage = () => {
  return (
    <div className='landing_Page_container'>
        <Nav/>
        <img className='Image_landing_Page'  src={firstImage} alt="" ></img>
        <BussinesCard/>
    </div>
  )
}

export default DLandingPage