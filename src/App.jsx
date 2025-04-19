import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Tentang from './components/tentang';
import Hasil from './components/hasil';
import './assets/css/App.css';
function App() {
  return (
    <>
      <Navbar />
      <div id='home'>
      <Header />
      </div>
      <div id='tentang' className='items-center flex flex-col justify-center'>
        <Tentang />
      </div>
      <div id='kalkulator'>
        <Hasil />
      </div>
      <Footer />
    </>
  )
}

export default App
