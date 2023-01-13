import React from 'react'
import '../Styles/DLandingPage.css'
import BussinesCard from './BussinesCard'
import Nav from './Nav'

const DLandingPage = () => {
  return (
    <div className='container'>
        <Nav/>
        <img className='Image_landing_Page'  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/62705578169901.5c9ccafbbdec8.jpg" alt="" ></img>
        <BussinesCard/>
    </div>
  )
}

export default DLandingPage