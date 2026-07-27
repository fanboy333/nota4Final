import { useEffect, useState } from "react";
import mascotasApi from "../../MascotasApi/MascotasApi";

function EditarMascota({ mascota, onUpdate, onCancelar }) {
    const [estados, setEstados] = useState([]);

    const [descripcion, setDescripcion] = useState(mascota.descripcion);
    const [selectedEstados, setEstado] = useState(mascota.estado);
    
    const [imagen, setImagen] = useState(null);
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

    useEffect(() => {
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
            
            <label>Descripcion <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea></label>
           

            <label>Estado:<select value={selectedEstados} onChange={(e) => setEstado(e.target.value)}>
                    <option value={""}>Sin Estado</option>
                    {estados.map(e => <option value={e.value} key={e.value}>{e.label}</option>)}</select>
            </label>           
            <label>imagen <input type="file" onChange={(e) => setImagen(e.target.files[0])} /></label>
            <button type="submit">Guardar Cambios</button>
            <button type="button" onClick={onCancelar}>Cancelar</button>
        </form>
    );
}

export default EditarMascota;