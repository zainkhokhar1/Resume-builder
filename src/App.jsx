
import './App.css'
import Navbar from './components/Navbar.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home.jsx';
import First from './templates/First.jsx';
import Signup from './screens/Signup.jsx';
import UpdateUserDetails from './screens/UpdateUserDetails.jsx';

function App() {

  return (
    <div className='bg-slate-50'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/create/:id' element={<h1>Create</h1>} />
          <Route path='/myresumes' element={<h1>My Resumes</h1>} />
          <Route path='/templates' element={<h1>Templates</h1>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/user/update' element={<UpdateUserDetails />} />


          {/* just for checking template route */}
          <Route path='/template/first' element={<First />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App;
