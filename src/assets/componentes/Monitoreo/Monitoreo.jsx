import { Link } from 'react-router-dom';
function Monitoreo(){
    function Header(){
        return(
            <header className="header">
                <img src="#" alt="loguito" className="logo" />
                <ul>
                    <li>Crear Colmena</li>
                    <li>Visualizar Colmena</li>
                    <li>Escanear QR</li>
                </ul>
            </header>
        )
    };

    function MainMonitoreo(){
        return(
            <main className="main_dashboard">
            <h2>Recoleccion</h2>
            <label htmlFor="fecha_nacimiento">Fecha de recoleccion</label>
            <input type="datetime-local"/>
            <label htmlFor="produccion_miel">Produccion de miel</label>
            <input type="text" placeholder="Ingrese la cantidad de miel en kg" />
            <label htmlFor="produccion_polen">Produccion de polen</label>
            <input type="text" placeholder="Ingrese la cantidad de polen en mg" />
            <button>
                <button onClick={() => navigate('/')}>Registrar</button>
            </button>
            </main>
        )
    }
    function Aside() {
        return(
            <aside>
                <h2>Apicultor</h2>
                <img src="#" alt="imagen_perfil" className="imagen_perfil"/>
                <h3>Giovanny Molina</h3>
                <select name="relacion" id="colmenas_relacionadas">
                    <option value="" disabled selected>Colmenas Relacionadas</option>
                    <ul>
                        <li></li>
                    </ul>
                </select>
            </aside>
        );
    }

    function Footer(){
        return(
            <footer className="footer">
                <h2>Copyright</h2>
                <h2>Todos los derechos reservados</h2>
            </footer>
        )
    }

    return(
        <>
        <Header/>
        <MainMonitoreo/>
        <Aside/>
        <Footer/>
        </>
    )
}
export default Monitoreo;
