import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./assets/componentes/Login/Login";
import UserRegister from "./assets/componentes/UserRegister/UserResgirter";
import Dashboard from './assets/componentes/Dashboard/Dahsboard';
import HivenRegister from './assets/componentes/HivenRegister/HivenRegister';
import RecuperarContraseña from './assets/componentes/Recuperar_contraseña/Recuperar_contraseña';
import ViewColmena from './assets/componentes/ViewColmena/ViewColmena';
// import ViewColmena from './assets/componentes/ViewColmena/ViewColmena';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para el Login */}
        <Route path="/" element={<Login />} />
        {/* Ruta para el Registro */}
        <Route path="/UserRegister" element={<UserRegister />} />
        {/* Ruta para el Dashboard */}
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* Ruta para el registro de colmena */}
        <Route path="/HivenRegister" element={<HivenRegister />} />
        {/*Ruta para editar colmena*/}
        
       <Route path='/ViewColmena' element={<ViewColmena/>} />
 
        {/* Ruta para recuperar contraseña */}
        <Route path="/RecuperarContraseña" element={<RecuperarContraseña />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
