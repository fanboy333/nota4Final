import { useEffect, useState } from "react";
import mascotasApi from "../../MascotasApi/MascotasApi";

function EditarMascota({ mascota, onUpdate, onCancelar }) {
    const [estados, setEstados] = useState([]);

    const [descripcion, setDescripcion] = useState(mascota.descripcion);
    const [selectedEstados, setEstado] = useState(mascota.estado);
    
    const [imagen, setImagen] = useState(null);
    useEffect(() => {
    const fetchEstados = async () => {
        try {
            const response = await mascotasApi.get("choices/");
            console.log(response.data.estado);
            setEstados(response.data.estado);  
        } catch (error) {
            console.log(error);
            if (error.response) {
                if (error.response.status === 400) {
                    alert("Error 400 los datos estan mal o incompletos");
                }
                if (error.response.status === 404) {
                    alert("Error 404 no encontrado");
                }
            } else {
                alert("Ocurrio un error");
            }
        }
    };

    
        fetchEstados();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
           !descripcion.trim("")
        ) {
            alert("Descripcion no puede estar vacio");
            return;
        }

        const formData = new FormData();
        formData.append("descripcion", descripcion);
        formData.append("estado", selectedEstados);     
        if (imagen) {
            formData.append("imagen", imagen);
        }

        onUpdate(formData);
    };
    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h4 className="fw-bold mb-3">Editar Mascota</h4>
            
            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Descripción</label>
                <textarea 
                    className="form-control" 
                    rows="3" 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Estado</label>
                <select 
                    className="form-select" 
                    value={selectedEstados} 
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="">Sin Estado</option>
                    {estados.map(e => <option value={e.value} key={e.value}>{e.label}</option>)}
                </select>
            </div>

            <div className="mb-4">
                <label className="form-label fw-semibold small mb-1">Nueva Imagen (opcional)</label>
                <input 
                    type="file" 
                    className="form-control" 
                    onChange={(e) => setImagen(e.target.files[0])} 
                />
            </div>

            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary fw-bold px-4">
                    Guardar Cambios
                </button>
                <button type="button" className="btn btn-outline-secondary px-4" onClick={onCancelar}>
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export default EditarMascota;