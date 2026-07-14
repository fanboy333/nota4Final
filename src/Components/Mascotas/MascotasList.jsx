import { useEffect, useState } from "react";
import mascotasApi from "../../MascotasApi/MascotasApi";
import { Link } from "react-router-dom";


function MascotasList(){
    const [mascotasList, setMascotasList]= useState([]);

//aquí obtenemos la lista de mascotas desde la api y actualiza el estado
    const fetchMascotas = async () => {
        try{
            const response = await mascotasApi.get('mascotas/')
            console.log(response.data.results)
            setMascotasList(response.data.results);
        } catch (error){
            console.log(error);
        }
    };    


    useEffect(() => {
        fetchMascotas();

    }, [])
    return(

        <>
        <h2>Registrar mascota</h2>

        <Link to={"formulario/"}>Registrar mascota</Link>
        {
            mascotasList.map(m=>(
                <div key={m.id}>
                <h3>{m.nombre}</h3>
                <img src={m.imagen} alt="foto del paciente" />
                </div>
            ))
        }
        
        </>
    )
}
export default MascotasList