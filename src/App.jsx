import { BrowserRouter as Router, Routes, Route, NavLink, } from "react-router-dom";
import MascotasPage from "./Page/MascotasPage";
import MascotasForm from "./Components/Mascotas/MascotasForm";


function App() {
  return (
    <>
    
      <Router>
        <nav>
          <NavLink to="/mascotas/">Mascotas</NavLink>
        </nav>
      <h1>Holaaaaaaaaaa</h1>

        <Routes>
          <Route path="mascotas/" element={<MascotasPage />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
