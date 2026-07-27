import MascotasForm from "./MascotasForm";
import { Link } from "react-router-dom";

function MascotasList({lista, onAdd, cargando}) {
    if (cargando) {
        return (
            <div className="text-center my-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-2 text-muted">Cargando lista de mascotas...</p>
            </div>
        );
    }

    return (
        <div className="row">
            {/* Columna izquierda: Formulario de Registro */}
            <div className="col-lg-4 mb-4">
                <div className="card shadow-sm border-0">
                    <div className="card-header bg-primary text-white py-3">
                        <h5 className="mb-0 fw-bold">Registrar Mascota</h5>
                    </div>
                    <div className="card-body">
                        <MascotasForm onAdd={onAdd} />
                    </div>
                </div>
            </div>

            {/* Columna derecha: Lista de Mascotas */}
            <div className="col-lg-8">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="text-dark fw-bold mb-0">Nuestras Mascotas</h3>
                    <span className="badge bg-secondary px-3 py-2 rounded-pill">
                        {lista.length} Registradas
                    </span>
                </div>

                <div className="row row-cols-1 row-cols-md-2 g-3">
                    {lista.map(m => (
                        <div className="col" key={m.id}>
                            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                                <img 
                                    src={m.imagen} 
                                    className="card-img-top" 
                                    alt={m.nombre} 
                                    style={{ height: "200px", objectFit: "cover" }} 
                                />
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h5 className="card-title fw-bold text-primary mb-0">{m.nombre}</h5>
                                        <span className="badge bg-info text-dark text-capitalize">
                                            {m.estado || "Sin Estado"}
                                        </span>
                                    </div>
                                    <p className="card-text text-muted small flex-grow-1">
                                        {m.descripcion && m.descripcion.length > 90 
                                            ? `${m.descripcion.substring(0, 90)}...` 
                                            : m.descripcion || "Sin descripción."}
                                    </p>
                                    <div className="mt-auto pt-2 border-top d-flex justify-content-between align-items-center">
                                        <span className="text-secondary small">
                                            {m.tipo_animal || "Otro"}
                                        </span>
                                        <Link to={`/mascotas/detalles/${m.id}`} className="btn btn-outline-primary btn-sm px-3">
                                            Ver Detalles
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MascotasList;