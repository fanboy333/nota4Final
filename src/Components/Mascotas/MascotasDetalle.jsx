import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mascotasApi from "../../MascotasApi/MascotasApi";
import ComMascotas from "../Comentarios/ComMascotas";
import EditarMascota from "./EditarMascota";

function MascotasDetalle() {
    const { id } = useParams();
    const [detalles, setDetalles] = useState(null);
    const [editando, setEditando] = useState(false);

    const traerDetalles = async () => {
        try {
            const response = await mascotasApi.get(`mascotas/${id}/`);
            if (response.status === 200) {
                setDetalles(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
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
            traerDetalles();
        } catch (error) {
            console.log(error);
        }
    };

    if (!detalles) {
        return <p>Cargando detalles...</p>;
    }

    return (
        <>
            <h2>Detalles de mascota</h2>
            {editando ? (
                <EditarMascota 
                    mascota={detalles} 
                    onUpdate={actualizarMascota}
                    onCancelar={() => setEditando(false)} 
                />
            ) : (
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
                                <td><img src={detalles.imagen} style={{width: "200px"}}/></td>
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
                    <button onClick={() => setEditando(true)} >Editar Mascota</button>
                </article>
            )}

            <ComMascotas mascotaId={id} />
        </>
    );
}

export default MascotasDetalle;