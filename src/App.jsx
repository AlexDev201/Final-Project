import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./assets/componentes/Login/Login";
import UserRegister from "./assets/componentes/UserRegister/UserResgirter";
import Dashboard from './assets/componentes/Dashboard/Dahsboard';
import HivenRegister from './assets/componentes/HivenRegister/HivenRegister';
import RecuperarContraseña from './assets/componentes/Recuperar_contraseña/Recuperar_contraseña';
import ViewColmena from './assets/componentes/ViewColmena/ViewColmena';
import Recoleccion from './assets/componentes/Recoleccion/Recolecion';
import ConfirmCell from './assets/componentes/ConfirmCell/ConfirmCell';
import OTP_Code from './assets/componentes/OTP_Code/OTP_Code';
import Monitoreo from './assets/componentes/Monitoreo/Monitoreo';
import ConfirmPassword from './assets/componentes/ConfirmPassword/ConfirmPassword';
import EditUser from './assets/componentes/EditUser/EditUser';
import ViewApicultor from './assets/componentes/ViewApicultor/ViewApicultor';
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

        {/*Ruta para ingresar numero de telefono    */}
        <Route path="/ConfirmCell" element={<ConfirmCell />}/>

        {/*Ruta para el OTP Code*/}
        <Route path='/OTP_Code' element={<OTP_Code />} />

        {/*Ruta para el monitoreo*/}
        <Route path='/Recoleccion' element = {<Recoleccion />} />

        {/* Ruta para recoleccion    */}
        <Route path='/Monitoreo' element= {<Monitoreo />} />

        {/*Ruta para la confirmacion de contraseña   */}
        <Route path='/ConfirmPassword' element={<ConfirmPassword />} />

        {/*Ruta para editar usuario o apicultor*/}
        <Route path='/EditUser' element={<EditUser /> } />

        {/* Ruta para View Apicultor */}
        <Route path='/ViewApicultor' element={<ViewApicultor/>} />
      </Routes>

     
    </BrowserRouter>
  );
}

export default App;
