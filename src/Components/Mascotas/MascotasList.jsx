import {Link} from "react-router-dom"

function MascotasList({lista}) {
    
    

    return(
        <>
        <h2>Lista mascotas</h2>

        <Link to={"formulario/"}>Registrar Mascota</Link>
        {
            lista.map(m =>(
                <div key={m.id}>
                <h3>{m.nombre}</h3>
                <img src={m.imagen}></img>
                </div>
            ))
        }
        
        </>
    )
    
}
export default MascotasList;