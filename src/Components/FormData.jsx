import React, {useState, useRef} from 'react'
import '../Styles/FormData.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import emailjs from '@emailjs/browser';
import fourthImage from '../assets/img/cuartaImagen.jpg'


const FormData = () => {
    const [formDone, setFormDone] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0r11df5', 'template_gg6gesk', e.target, 'OyDDYych_DnmG-L-G')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setFormDone(true);

                setTimeout(() => {
                    setFormDone(false)
                },5000 );
        e.target.reset()
      };

    return (
        <div className="contenedor" style={{backgroundImage:`linear-gradient( to bottom right, rgba(46, 69, 122, 0.3) 0% , rgba(0, 0, 0, 0.6) 100%), url(${fourthImage})`}}>
            {/* <img src={fourthImage} alt="ImagenDeContacto" className='image_form' /> */}
        <Formik
        
            initialValues={{
                nombre: '',
                bussines: '',
                number: '',
                email: ''
            }}

            validate={(valores) => {
                let errors = {}

                if(!valores.nombre){
                    errors.nombre = 'Por favor ingrese un nombre'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errors.nombre = 'El nombre solo puede contener letras y espacios'
                }

                if(!valores.bussines){
                    errors.bussines = 'Por favor ingrese el nombre de la empresa'
                } 

                if(!valores.number){
                    errors.number = 'Por favor ingrese un numero de telefono'
                }

                if(!valores.email){
                    errors.email = 'Por favor ingrese un correo'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                    errors.email = 'Solo puede contener un correo electronico'
                }
                return errors
            }}
        >
            {({ errors }) => (
                <Form className='formulario' ref={form} onSubmit={sendEmail}>
                    <h3 className='Titulo_formulario'>Contactanos</h3>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <Field
                            type="text"
                            id='nombre'
                            name='nombre'
                            placeholder='Nombre'
                        />
                        <ErrorMessage name='nombre' component={() => (
                            <div className='error'>{errors.nombre}</div>
                        )}/>
                    </div>
                    <div>
                        <label htmlFor="bussines">Compañia</label>
                        <Field
                            type="text"
                            id='bussines'
                            name='bussines'
                            placeholder='Compañia'
                        />
                    </div>
                    <ErrorMessage name='business' component={() => (
                            <div className='error'>{errors.bussines}</div>
                        )}/>
                    <div>
                        <label htmlFor="number">Telefono</label>
                        <Field
                            type="number"
                            id='number'
                            name='number'
                            placeholder='Telefono'
                        />
                    </div>
                    <ErrorMessage name='number' component={() => (
                            <div className='error'>{errors.number}</div>
                        )}/>
                    <div>
                        <label htmlFor="email">Correo</label>
                        <Field
                            type="email"
                            id='email'
                            name='email'
                            placeholder='Correo'
                        />
                    </div>
                    <ErrorMessage name='email' component={() => (
                            <div className='error'>{errors.email}</div>
                        )}/>
                    <button type='submit'>Enviar</button>
                    {formDone && <p className='exito'> Nos pondremos en contacto pronto!</p>}
                </Form>
            )}
        </Formik>
        </div>
    )
}

export default FormData;