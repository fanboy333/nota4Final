import { useEffect, useState } from "react";
import mascotasApi from "../../MascotasApi/MascotasApi";

function ComMascotas({ mascotaId }) {
    const [comentarios, setComentarios] = useState([]);

    const traerComentarios = async () => {
        try {
            const response = await mascotasApi.get("comentarios/");
            console.log(response.data);
            
            const todosLosComentarios = response.data;
            const filtrados = todosLosComentarios.filter(c => c.mascota === parseInt(mascotaId));
            setComentarios(filtrados);
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
                alert("Error: no hay conexion");
            }
        }
    };
    useEffect(() => {
        traerComentarios();
    }, [mascotaId]);
    let ConComentarios;
    if (comentarios.length === 0){
        ConComentarios = <p>No hay comentarios</p>
    } else {
        ConComentarios = (
            <ul>{comentarios.map((c) =>(
                <li key={c.id}> <strong>{c.autor}:</strong>{c.contenido}</li> 
            ))}</ul>
        )
    }

    return (
        <div>
            <h2>Comentarios de la Mascota</h2>
            {ConComentarios}
        </div>
    );
}

export default ComMascotas;