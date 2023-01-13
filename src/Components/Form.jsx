import React from 'react'
import '../Styles/Form.css'

const Form = () => {
    return (
        <div className='form_container'>
            <form className='form' action="">
                <div className="input_container">
                    <label htmlFor="" className="form_label">NOMBRE</label>
                    <input 
                    className='form_input' 
                    type="text"
                    placeholder='Nombre' 
                    />
                </div>
                <div className="input_container">
                    <label htmlFor="" className="form_label">NOMBRE DE LA EMPRESA</label>
                    <input 
                    className='form_input' 
                    type="text" 
                    placeholder='Nombre de la Empresa'
                    />
                </div>
                <div className="input_container">
                    <label htmlFor="" className="form_label">EMAIL</label>
                    <input 
                    className='form_input' 
                    type="email"
                    placeholder='Email' 
                    />
                </div>
                <div className="input_container">
                    <label htmlFor="" className="form_label">TELEFONO</label>
                    <input 
                    className='form_input' 
                    type="number"
                    placeholder='Telefono'
                     />
                </div>
                <button className='form_button'>Enviar</button>
            </form>
        </div>
    )
}

export default Form