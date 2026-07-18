import MascotasList from "../Components/Mascotas/MascotasList";
import mascotasApi from "../MascotasApi/MascotasApi";
import { useEffect, useState } from "react";
function MascotasPage(){


const  [mascotasList, setMascotasList] = useState([]);

    const fetchMascotas = async () => {
        try{
        const response = await mascotasApi.get('mascotas/')
        console.log(response.data);
        setMascotasList(response.data);
        } catch (error){
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchMascotas();

    }, [])




    return(
        <>
        <h1>Pagina de Mascotas</h1>

        

        <MascotasList lista={mascotasList}/>
        </>
    )
}

export default MascotasPage;