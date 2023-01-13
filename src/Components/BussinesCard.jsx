import React from 'react'
import '../Styles/BussinesCard.css'

const BussinesCard = () => {
  return (
    <div className='bussines_card'>
        <img 
            className='Logo' 
            src="https://www.svgrepo.com/show/433958/nodes.svg" 
            alt="" >
        </img>
        <h1 className='Title'>
                <span className='Title1'>Total</span>
                <span className='Title2'> IT </span>
                <span className='Title3'>Financial</span>
            </h1>
</div>
  )
}

export default BussinesCard