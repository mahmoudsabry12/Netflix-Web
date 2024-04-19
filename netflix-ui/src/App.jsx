import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './pages/Login'
import  Signup from './pages/Signup'
import { Netflix } from './pages/Netflix'
import Player from './pages/Player'
function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Netflix />}/>
          <Route exact path='/player' element={<Player />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/signup' element={<Signup />}/>

        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
