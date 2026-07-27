import { BrowserRouter as Router, Routes, Route, NavLink, } from "react-router-dom";
import MascotasPage from "./Page/MascotasPage";
import MascotasDetalle from "./Components/Mascotas/MascotasDetalle";


function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
          <div className="container">
            <NavLink to="/mascotas/" className="navbar-brand fw-bold">
              Mascotas App
            </NavLink>
            <div className="navbar-nav">
              <NavLink 
                to="/mascotas/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active fw-semibold' : ''}`}
                end
              >
                Lista de Mascotas
              </NavLink>
            </div>
          </div>
        </nav>

        <div className="container pb-5">
          <Routes>
            <Route path="mascotas/" element={<MascotasPage />} />
            <Route path="mascotas/detalles/:id" element={<MascotasDetalle/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
