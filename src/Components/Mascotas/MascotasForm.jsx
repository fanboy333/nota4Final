import { useEffect, useState } from "react";
import mascotasApi from "../../MascotasApi/MascotasApi";

function MascotasForm({onAdd}){
    const [estados, setEstados] = useState([]);
    const [tipoAnimal, setAnimal] = useState([]);
    const [tiposexo, setTipoSexo] = useState([]);
    const [tamano, setTamano]= useState([]);
    const [error, setError] = useState("");


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
            console.log(error);
            if (error.response) {
                if (error.response.status === 400) {
                    alert("Error 400 los datos estan mal o incompletos");
                }
                if (error.response.status === 404) {
                    alert("Error 404 no encontrado");
                }
            } else {
                alert("Error No hay conexion");
            }
        }
    }
    useEffect(()=>{
        fetchEstados();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(
            !nombre.trim("") || !edad || !descripcion.trim("") || !raza.trim("") ||
            !selectedEstados ||  !selectedTipoMascota ||  !selectedSexo ||!selectedTamano || !imagen
          ) {
            alert("Ningun campo debe estar vacio");
            return;
          }
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
    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Nombre</label>
                <input 
                    type="text" 
                    className="form-control form-control-sm" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Edad (años)</label>
                <input 
                    type="number" 
                    className="form-control form-control-sm" 
                    value={edad} 
                    onChange={(e) => setEdad(e.target.value)} 
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Raza</label>
                <input 
                    type="text" 
                    className="form-control form-control-sm" 
                    value={raza} 
                    onChange={(e) => setRaza(e.target.value)} 
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Descripción</label>
                <textarea 
                    className="form-control form-control-sm" 
                    rows="2" 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Estado</label>
                <select 
                    className="form-select form-select-sm" 
                    value={selectedEstados} 
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="">Seleccione estado</option>
                    {estados.map(e => <option value={e.value} key={e.value}>{e.label}</option>)}
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Tipo de Animal</label>
                <select 
                    className="form-select form-select-sm" 
                    value={selectedTipoMascota} 
                    onChange={(e) => setTipoMascotaSelecionada(e.target.value)}
                >
                    <option value="">Seleccione tipo</option>
                    {tipoAnimal.map(e => <option value={e.value} key={e.value}>{e.label}</option>)}
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Sexo</label>
                <select 
                    className="form-select form-select-sm" 
                    value={selectedSexo} 
                    onChange={(e) => setSexoSeleccionado(e.target.value)}
                >
                    <option value="">Seleccione sexo</option>
                    {tiposexo.map(e => <option value={e.value} key={e.value}>{e.label}</option>)}
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Tamaño</label>
                <select 
                    className="form-select form-select-sm" 
                    value={selectedTamano} 
                    onChange={(e) => setTamanoSeleccionado(e.target.value)}
                >
                    <option value="">Seleccione tamaño</option>
                    {tamano.map(e => <option value={e.value} key={e.value}>{e.label}</option>)}
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold small mb-1">Imagen</label>
                <input 
                    type="file" 
                    className="form-control form-control-sm" 
                    onChange={(e) => setImagen(e.target.files[0])} 
                />
            </div>

            <button type="submit" className="btn btn-primary btn-sm w-100 fw-bold py-2 mt-2">
                Registrar Mascota
            </button>
        </form>
    );

}
export default MascotasForm;