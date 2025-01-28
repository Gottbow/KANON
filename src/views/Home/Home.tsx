import Contactos from './Contactos/contactos'
import Portada from './Portada/portada'
import Servicios from './Servicios/servicios'
import Footer from './Footer/footer'

function Home() {
  return (
    <div>
      <Portada />
      <Servicios />
      <Contactos />
      <Footer />
    </div>
  )
}

export default Home
