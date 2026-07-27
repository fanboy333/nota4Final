import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mascotasApi from "../../MascotasApi/MascotasApi";
import ComMascotas from "../Comentarios/ComMascotas";
import EditarMascota from "./EditarMascota";

function MascotasDetalle() {
    const { id } = useParams();
    const [detalles, setDetalles] = useState(null);
    const [editando, setEditando] = useState(false);
useEffect(() => {
    const traerDetalles = async () => {
        try {
            const response = await mascotasApi.get(`mascotas/${id}/`);
            if (response.status === 200) {
                setDetalles(response.data);
            }
        } catch (error) {
            console.log(error);
            if (error.response) {
                if (error.response.status === 400) {
                    alert("Error 400");
                }
                if (error.response.status === 404) {
                    alert("Error 404");
                }
            } else {
                alert("Error: no hay conexion");
            }
        }
    };

    
        if (id) {
            traerDetalles();
        }
    }, [id]);

    const actualizarMascota = async (datos) => {
        try {
            const response = await mascotasApi.patch(`mascotas/${id}/`, datos);
            console.log(response.data);
            alert("Mascota editada con exito");
            setEditando(false);
            setDetalles(response.data);
        } catch (error) {
            console.log(error);
            if (error.response) {
                if (error.response.status === 400) {
                    alert("Error 400");
                }
                if (error.response.status === 404) {
                    alert("Error 404");
                }
            } else {
                alert("Error no hay conexion");
            }
        }
    };

    if (!detalles) {
        return (
            <div className="text-center my-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-2 text-muted">Cargando detalles...</p>
            </div>
        );
    }

    return (
        <div className="container py-2">
            <h2 className="mb-4 text-dark fw-bold">Detalles de Mascota</h2>
            {editando ? (
                <div className="card shadow-sm border-0 p-4 mb-4">
                    <EditarMascota 
                        mascota={detalles} 
                        onUpdate={actualizarMascota}
                        onCancelar={() => setEditando(false)} 
                    />
                </div>
            ) : (
                <div className="card shadow-sm border-0 overflow-hidden mb-4">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img 
                                src={detalles.imagen} 
                                className="img-fluid w-100 h-100" 
                                alt={detalles.nombre}
                                style={{ minHeight: "250px", maxHeight: "400px", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body p-4 d-flex flex-column h-100">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h2 className="card-title text-primary fw-bold mb-0">{detalles.nombre}</h2>
                                    <span className="badge bg-success px-3 py-2 text-capitalize fs-6">{detalles.estado}</span>
                                </div>
                                
                                <p className="card-text text-muted mb-4">{detalles.descripcion}</p>

                                <div className="row g-2 mb-4">
                                    <div className="col-6 col-sm-4">
                                        <div className="bg-light p-2 rounded text-center border">
                                            <span className="text-secondary small d-block">Tipo</span>
                                            <strong className="text-dark">{detalles.tipo_animal}</strong>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="bg-light p-2 rounded text-center border">
                                            <span className="text-secondary small d-block">Raza</span>
                                            <strong className="text-dark">{detalles.raza || "N/A"}</strong>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="bg-light p-2 rounded text-center border">
                                            <span className="text-secondary small d-block">Edad</span>
                                            <strong className="text-dark">{detalles.edad} años</strong>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="bg-light p-2 rounded text-center border">
                                            <span className="text-secondary small d-block">Sexo</span>
                                            <strong className="text-dark text-capitalize">{detalles.sexo}</strong>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4">
                                        <div className="bg-light p-2 rounded text-center border">
                                            <span className="text-secondary small d-block">Tamaño</span>
                                            <strong className="text-dark text-capitalize">{detalles.tamano}</strong>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <button 
                                        onClick={() => setEditando(true)} 
                                        className="btn btn-warning fw-bold px-4 text-dark"
                                    >
                                         Editar Mascota
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="card shadow-sm border-0 p-4 mb-4">
                <ComMascotas mascotaId={id} />
            </div>
        </div>
    );
}

export default MascotasDetalle;