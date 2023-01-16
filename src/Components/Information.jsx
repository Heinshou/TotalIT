import React from 'react'
import '../Styles/Information.css'
import { BsGear } from "react-icons/bs";

const Information = () => {
    return (
        <>
            <div className='presentation'>
                <div className="presentation_animation">
                    <img className='presentation_image' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/62705578169901.5c9ccafbbdec8.jpg" alt="" ></img>
                </div>
                <div className="presentation_info">
                    <h2
                        className='presentation_title'
                        data-aos="flip-up"
                        data-aos-duration="1500"
                    >¿Por qué elegir Total IT Financial?</h2>
                    <p
                        className='presentation_text'
                        data-aos="flip-down"
                        data-aos-duration="1500"
                    >Somos especialistas otorgando financiamiento a empresas
                        del Sector PYME y EMPRESARIAL en el area de IT a nivel nacional, desde $500,000 a tasa
                        fija por debajo de la tasa publicada en banco de México. Ofrecemos soluciones financieras integrales y
                        planes hechos a la medida para renovación de equipo de computo, implementación de ERP, desarrollo de software,
                        redes informáticas o cualquier proyecto de IT que estén cotizando.</p>
                </div>
            </div>
            <div className='cards_container'>

            </div>
        </>
    )
}

export default Information