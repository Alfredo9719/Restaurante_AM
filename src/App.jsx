import './App.css'
import Footer from './components/Footer'
import Section from './components/Section'
import Header from './components/Header'
import { useState } from 'react'
import {db} from './config/database';
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    dia: "",
    hora:"",
    personas: ""
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  const reservar = async (event) => {
    event.preventDefault();
    // console.log(formulario);
    //"formulario" a firebase
    await addDoc(collection(db, "reservacion"), formulario);
    //profesor si ve esto no pude resetear el fomulario espero me pueda ayudar!!
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h4 className='text-center'>Lo mas pedido de nuestro menu tapatio</h4>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Section source='https://www.travelreport.mx/wp-content/uploads/2018/12/gastronom%C3%ADa-de-Guadalajara.jpg' texto='Torta Ahogada' />
            </div>
            <div className="col-md-4">
              <Section source='https://infotogo.mx/wp-content/uploads/2020/11/Donde-comer-birria.jpg' texto='Birria' />
            </div>
            <div className="col-md-4">
              <Section source='https://www.cardamomo.news/__export/1682630698898/sites/debate/img/2023/04/27/mejores_tacos_en_guadalajara.png_242310155.png' texto='Tacos de barbacoa' />
            </div>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col-md-12">
              
            </div>
            <div className="col-6">
            <h3 className='mb-3'>Menu:</h3>
              <img src="https://tortastradiciontapatia.com/images/menu1.jpg" alt="" width={"600px"}/>
            </div>

            <div className="col-6">

            <h3 className='mb-3'>Reservación</h3>

              <form onSubmit={reservar}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" name='nombre' onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Telefono</label>
                  <input type="text" className="form-control" name='telefono' onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Día</label>
                  <input type='date' className="form-control" rows="5" name='dia' onChange={handleInputChange}></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Hora</label>
                  <input type='time' className="form-control" rows="5" name='hora' onChange={handleInputChange}></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Numero de personas</label>
                  <input type="number" className="form-control" name='personas' onChange={handleInputChange} />
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button className='btn btn-primary'>Reservar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
