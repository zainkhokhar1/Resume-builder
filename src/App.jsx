
import './App.css'
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx'
import ShowResume from './components/ShowResume.jsx';

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <ShowResume />
    </div>
  )
}

export default App;
