import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import InstagramLogo from './Components/InstagramLogo'
import Profile1 from './Components/Profile/Profile'
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    {/* {Protected-Routes}  */}
    <Route path='/' element={<ProtectedRoutes/>}>
    <Route path='/instalogo' element={<InstagramLogo/>}/>
    <Route path='/profile' element={<Profile1/>}/>
    </Route>
    
   </Routes>
   </BrowserRouter>
      
    </>
  )
}

export default App
