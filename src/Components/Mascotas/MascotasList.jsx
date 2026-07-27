import MascotasForm from "./MascotasForm";
import { Link } from "react-router-dom";
function MascotasList({lista, onAdd, cargando}) {
    if ( cargando){
        return <p>Cargando Lista de las mascotas...</p>
    }
    

    return(
        <>
        <h2>Lista mascotas</h2>

        <MascotasForm onAdd={onAdd}/>
        {
            lista.map(m =>(
                <div key={m.id}>
                <img src={m.imagen} style={{width: "500px"}}></img>
                <h3>{m.nombre}</h3>
                <h3>{m.descripcion}</h3>
                <h3>{m.tipo_animal}</h3>
                <h3>{m.estado}</h3>
                <div>
                    <Link to={`/mascotas/detalles/${m.id}`}>Ver Detalles </Link>
                </div>
                

                </div>
            ))
        }
        
        </>
    )
    
}
export default MascotasList;