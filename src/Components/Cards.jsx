import React from 'react'
import '../Styles/Cards.css'
import { AiOutlineRise, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsFillShieldLockFill, BsFillPeopleFill } from "react-icons/bs";
import { BiMedal, BiRun } from "react-icons/bi";


const Cards = () => {
    return (
        <div className='cards_container'>
            <div className="long_info_container">
                <div 
                    className="long_info"
                    data-aos="fade-down-right"
                    data-aos-offset="10"
                    data-aos-delay="50"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top"
                >
                    <div className='icon_long_info icon'>
                        <BiMedal />
                    </div>
                    <h3 className="title_long_info">Experiencia</h3>
                    <p className="text_long_info">Nuestra práctica implementando todo tipo de proyectos tecnológicos
                        nos ayuda a tomar mejores decisiones con ello no solo financiamos tu proyecto también
                        podemos sumergirnos en el para potencializar tus resultados.</p>
                </div>
                <div
                    className="long_info2"
                    data-aos="fade-down"
                    data-aos-offset="10"
                    data-aos-delay="50"
                    data-aos-duration="300"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top">
                    <div className='icon_long_info icon2'>
                        <BsFillShieldLockFill />
                    </div>
                    <h3 className="title_long_info">Seguridad y Confianza</h3>
                    <p className="text_long_info">Somos una entidad confiable, con experiencia que estamos aquí para ser
                        una pieza clave para llevar a buen puerto tus proyectos quitando la burocracia de
                        entidades tradicionales, recordando que nosotros disminuimos tu riesgo. </p>
                </div>
                <div 
                    className="long_info3"
                    data-aos="fade-down-left"
                    data-aos-offset="10"
                    data-aos-delay="50"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="bottom"
                    >
                    <div className='icon_long_info icon3'>
                        <AiOutlineRise />
                    </div>
                    <h3 className="title_long_info">Impulsa el crecimiento de tu negocio</h3>
                    <p className="text_long_info">Adquisición de Activos
                        Utiliza un tu financiamiento para adquirir o renovar tu equipo de cómputo, telefonía, cctv,
                        controles de acceso, redes, servidores o cualquier otro elemento de hardware informatico que
                        ayude a optimizar tu empresa  la empresa o al personal.</p>
                </div>
            </div>
            <div className="short_info_container">
                <div 
                    className="short_info"
                    data-aos="fade-up-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top"
                    >
                    <div className='icon_short_info icon4'>
                        <BiRun />
                    </div>
                    <h3 className="title_short_info">Agilidad</h3>
                    <p className="text_short_info">Contamos con atención personalizada, respuesta rápida y solución a tus necesidades.</p>
                </div>
                <div 
                    className="short_info2"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top"
                    >
                    <div className='icon_short_info icon5'>
                        <AiOutlineAppstoreAdd />
                    </div>
                    <h3 className="title_short_info">Implementa Nuevos Sistemas</h3>
                    <p className="text_short_info">Invierte en innovación y desarrolla o implementa productos y servicios nuevos de
                        tecnologia para dar mas herramientas a tu negocio.</p>
                </div>
                <div 
                    className="short_info3"
                    data-aos="fade-up-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top"
                    >
                    <div className='icon_short_info icon6'>
                        <BsFillPeopleFill />
                    </div>
                    <h3 className="title_short_info">Equipo de Profesionales</h3>
                    <p className="text_short_info">Especialistas en el otorgamiento de asesoría financiera y tecnologica para que tu
                        inversión te de mas por tu dinero.</p>
                </div>
            </div>
        </div>
    )
}

export default Cards