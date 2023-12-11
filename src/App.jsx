import './App.css'
import Footer from './components/Footer'
import Section from './components/Section'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h1 className='text-center'>Lo mas pedido de nuestro menu tapatio</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Section source='https://www.travelreport.mx/wp-content/uploads/2018/12/gastronom%C3%ADa-de-Guadalajara.jpg' texto='Torta Ahogada' />
            </div>
            <div className="col-md-4">
              <Section source='https://www.cardamomo.news/__export/1682630698898/sites/debate/img/2023/04/27/mejores_tacos_en_guadalajara.png_242310155.png' texto='Tacos de barbacoa'/>
            </div>
            <div className="col-md-4">
              <Section source='https://gourmetdemexico.com.mx/wp-content/uploads/2016/10/pozole_gdl.jpg' texto='Pozole'/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
