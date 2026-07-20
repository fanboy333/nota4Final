import { useState } from "react";

function MascotasForm() {

    // estados para guardar los datos ingresados en el formulario
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null);

    return (
        <>
            <h2>Registrar Mascota</h2>

            <form>

                {/* para ingresar el nombre de la mascota */}
                <div>
                    <label>Nombre</label><br />
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <br />

                {/* para ingresar una descripcion */}
                <div>
                    <label>Descripción</label><br />
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    ></textarea>
                </div>

                <br />

                {/* para seleccionar una imagen */}
                <div>
                    <label>Imagen</label><br />
                    <input
                        type="file"
                        onChange={(e) => setImagen(e.target.files[0])}
                    />
                </div>

                <br />

                {/*boton del formulario (por ahora sin funcionalidad) */}
                <button type="submit">
                    Registrar Mascota
                </button>

            </form>
        </>
    );
}

export default MascotasForm;