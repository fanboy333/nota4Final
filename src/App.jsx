import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import MascotasPage from "./Page/MascotasPage"
import MascotasForm from "./Components/Mascotas/MascotasForm"
function App() {
  return(
    <>
    <Router>
    <nav>

      <NavLink to="mascotas/">Mascotas</NavLink>
    </nav>
    <Routes>
      <Route path ="mascotas/" element={<MascotasPage/>}/>
      
      <Route path="mascotas/formulario/" element={<MascotasForm />}/>
  
    </Routes>
    </Router>
    </>
    
  ) 
}

export default App
