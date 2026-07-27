import MascotasList from "../Components/Mascotas/MascotasList";
import mascotasApi from "../MascotasApi/MascotasApi";
import { useEffect, useState } from "react";
function MascotasPage(){


const  [mascotasList, setMascotasList] = useState([]);
const [ cargando, setCargando] = useState(true);

    const fetchMascotas = async () => {
        setCargando(true);
        try{
        const response = await mascotasApi.get('mascotas/')
        console.log(response.data);
        setMascotasList(response.data);
        } catch (error){
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
            } finally {
                setCargando(false);
        }
        
    }
    const addMascotas =  async (mascota) => {
        try{
        const response = await mascotasApi.post('mascotas/', mascota);
        console.log(response.data);
        alert("Mascota agregada con exito")
        }catch(error){
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
        }finally{
        fetchMascotas();   
        }
    }

    useEffect(() => {
        fetchMascotas();

    }, [])




    return(
        <>
        <h1>Pagina de Mascotas</h1>
        <MascotasList lista={mascotasList} onAdd={addMascotas} cargando={cargando}/>
        </>
    )
}

export default MascotasPage;