import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mascotasApi from "../../MascotasApi/MascotasApi";
import ComMascotas from "../Comentarios/ComMascotas";

function MascotasDetalle() {
    const { id } = useParams();
    const [detalles, setDetalles] = useState(null);

    const traerDetalles = async () => {
        try {
            const response = await mascotasApi.get(`mascotas/${id}/`);
            if (response.status === 200) {
                setDetalles(response.data);
            }
        } catch (error) {
            console.error("Error al traer los detalles:", error);
        }
    };

    useEffect(() => {
        if (id) {
            traerDetalles();
        }
    }, [id]);

    if (!detalles) {
        return <p>Cargando detalles...</p>;
    }

    return (
        <>
            <h2>Detalles de mascota</h2>
            <article>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Descripción</th>
                            <th>Estado</th>
                            <th>Tipo de Animal</th>
                            <th>Raza</th>
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Tamaño</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{detalles.nombre}</td>
                            <img src={detalles.imagen} style={{width: "100px"}}/>
                            <td>{detalles.descripcion}</td>
                            <td>{detalles.estado}</td>
                            <td>{detalles.tipo_animal}</td>
                            <td>{detalles.raza}</td>
                            <td>{detalles.edad} años</td>
                            <td>{detalles.sexo}</td>
                            <td>{detalles.tamano}</td>
                        </tr>
                    </tbody>
                </table>
            </article>

            {/* Sección de comentarios */}
            <ComMascotas mascotaId={id} />
        </>
    );
}

export default MascotasDetalle;