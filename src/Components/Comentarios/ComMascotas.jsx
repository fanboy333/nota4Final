import { useEffect, useState } from "react";
import mascotasApi from "../../MascotasApi/MascotasApi";

function ComMascotas({ mascotaId }) {
    const [comentarios, setComentarios] = useState([]);

    const traerComentarios = async () => {
        try {
            const response = await mascotasApi.get("comentarios/");
            const todosLosComentarios = response.data.value;
            const filtrados = todosLosComentarios.filter(c => c.mascota === Number(mascotaId));
            
            setComentarios(filtrados);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        traerComentarios();
    }, [mascotaId]);

    return (
        <div>
            <h2>Comentarios de la Mascota</h2>
            {comentarios.length === 0 ? (
                <p>No hay comentarios</p>
            ) : (
                <ul>
                    {comentarios.map((c) => (
                        <li key={c.id}>
                            <strong>{c.autor}:</strong> {c.contenido}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ComMascotas;