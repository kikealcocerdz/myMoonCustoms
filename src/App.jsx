import './App.css'
import './index.css'
import NavBar from '../components/NavBar'
import MainPage from './pages/MainPage'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import {SocialButton} from '../components/SocialButton.jsx'

function App() {
    return (
      <main className='snap-y snap-mandatory relative w-full h-screen overflow-auto'>
        <div className='snap-center'>
          <MainPage />
        </div>
        <div className='snap-center'>
          <Gallery />
        </div>
        <div className='snap-center'>
          <Contact />
        </div>
      </main>
    );
}
export default App
