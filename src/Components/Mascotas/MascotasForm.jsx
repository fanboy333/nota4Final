import { useEffect, useState } from "react";
import mascotasApi from "../../MascotasApi/MascotasApi"

function MascotasForm({onAdd}){
    const [estados, setEstados] = useState([]);
    const [tipoAnimal, setAnimal] = useState([]);
    const [tiposexo, setTipoSexo] = useState([]);
    const [tamano, setTamano]= useState([]);


    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion]= useState("");
    const [edad, setEdad] = useState("");
    const [raza, setRaza] = useState("");
    const [selectedEstados, setEstado]= useState("");

    const [selectedTipoMascota, setTipoMascotaSelecionada] = useState("");
    const [selectedSexo, setSexoSeleccionado] = useState ("");
    const [selectedTamano, setTamanoSeleccionado] = useState ("")
    
    const [imagen, setImagen] = useState(null);

    const fetchEstados = async () =>{
        try{
        const response = await mascotasApi.get("choices/")
        console.log(response.data.estado);
        setEstados(response.data.estado);
        setAnimal(response.data.tipo_animal);
        setTipoSexo(response.data.sexo);
        setTamano(response.data.tamano);
        }catch(error){
            console.log(error)

        }
    }
    useEffect(()=>{
        fetchEstados();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre, edad, descripcion, raza, selectedEstados, selectedTipoMascota, selectedSexo, selectedTamano, imagen);
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("edad", edad);
        formData.append("descripcion", descripcion);
        formData.append("raza", raza);
        formData.append("estado", selectedEstados);
        formData.append("tipo_animal", selectedTipoMascota);
        formData.append("sexo", selectedSexo);
        formData.append("tamano", selectedTamano);
        formData.append("imagen", imagen);
        console.log(formData);
        onAdd(formData);
    };
    return(

        <form onSubmit={handleSubmit} encType="multipart/form-data">

            <label>Nombre:<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /></label>

            <label>Edad:<input type="number" value={edad} onChange={(e)=> setEdad(e.target.value)} /></label>

            <label>Descripcion <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea></label>
            
            <label>Raza:<input type="text" value={raza} onChange={(e) => setRaza(e.target.value)} /></label>

            


            <label>Estado:
                <select value={selectedEstados} onChange={(e) =>setEstado(e.target.value)}>
                    <option value={""}>Sin Estado</option>
                    {
                        estados.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                    }
                </select>
            </label>
            <label>Tipo animal:
                <select value={selectedTipoMascota} onChange={(e) => setTipoMascotaSelecionada(e.target.value)}>
                    <option value={""}>Sin Estado</option>
                    {
                        tipoAnimal.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                    }
                </select>
            </label>
            <label>Sexo:
                <select value={selectedSexo} onChange={(e) => setSexoSeleccionado(e.target.value)}>
                    <option value={""}>Sin Estado</option>
                    {
                        tiposexo.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                    }
                </select>
            </label>
            <label>Tamaño:
                <select value={selectedTamano} onChange={(e) => setTamanoSeleccionado(e.target.value)}>
                    <option value={""}>Sin Estado</option>
                    {
                        tamano.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                    }
                </select>
            </label>
            <label>imagen 
                <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
            </label>

            <button type="submit">Guardar</button>
        </form>
    )

}
export default MascotasForm;