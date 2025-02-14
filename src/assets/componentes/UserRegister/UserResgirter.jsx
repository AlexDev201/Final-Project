import React, { useState } from 'react';
import Styled from 'styled-components';
import { Navigate } from 'react-router-dom'; // Asegúrate de que Navigate esté importado


/*Estilos de formulario de registro*/

const Wrapper = Styled.div`
display: flex;
flex-direction: column;
min-height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la pantalla */
`;



const Header = Styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f9d77e;
    padding: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height:60px;
    border-radius:12px;
`;

const Logo = Styled.img`
    height: 50px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
`;

const Title = Styled.h1`
    margin: 0;
    color: #4e342e;
    font-size: 1.2rem;
    text-align: center;
`;
const Main = Styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: radial-gradient(circle, white, white);
    padding: 1rem;
`;

const RegisterContainer = Styled.div`
        background-color:beige;
        border-radius: 15px;
         box-shadow:  0 0 20px 5px rgba(0, 0, 0, 0.74);
        padding: 2rem;
        max-width: 500px;
        width: 100%;
        text-align: center;
        border: 1px solid b;
`;



const FormTitle = Styled.h2`
        text-align: center;
        padding-bottom: 1rem;
`;

const FormRegister = Styled.form`
        display: flex;
        flex-direction: column;

`;

const Label = Styled.label`
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #795548;
        text-align: left;
`;


const Input = Styled.input`
        width: 100%;
        padding: 0.75rem;
        margin-bottom: 1.5rem;
        border: 1px solid #ffcc80;
        border-radius: 10px;
        font-size: 1rem;
        background-color: #fffde7;
        color: #4e342e;
        transition: border-color 0.3s;
        &:focus {
        outline: none;
        border-color: #ffb300;
`;

const Button = Styled.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.3s;
    width: 100%;
    margin-top: 0.5rem;

    &:hover {
        background-color: #f79d60;
    }

    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }
`;






const Footer = Styled.footer`
    background-color: #f9d77e;
    color: #4e342e;
    text-align: center;
    padding: 0.3rem;
    font-size: 0.75rem;
    border-radius:12px;
`;







function UserRegister() {
  const [formData, setFormData] = useState({
    nombre: '',
    identificacion: '',
    correo: '',
    telefono: '',
    fecha_nacimiento: '',
    contacto_emergencia: '',
    password: '',
    confirmPassword: '',
  });
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación para asegurarse de que todos los campos estén llenos
    for (let key in formData) {
      if (formData[key] === '') {
        alert(`El campo ${key} es obligatorio.`);
        return;
      }
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Guardamos los datos en el localStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Actualizamos el estado para redirigir
    setRedirectToLogin(true);
  };

  // Redirigir a la página de inicio de sesión si el estado es true
  if (redirectToLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Wrapper>
      <Header className="header">
        <Logo src="src/img/Colmenares_del_eje_logo.png" alt="logo" />
        <h1 className="header-title">Colmenares del Eje</h1>
      </Header>

      <Main className="main-register">
        <RegisterContainer className="register-container">
          <FormTitle className="form-title">Regístrate</FormTitle>
          <FormRegister  onSubmit={handleSubmit}>
            <Label htmlFor="nombre" className="label">Nombre</Label>
            <Input
              type="text"
              id="nombre"
              placeholder="Ingrese su nombre completo"
              className="input"
              value={formData.nombre}
              onChange={handleInputChange}
            />

            <Label htmlFor="identificacion" className="label">Identificación</Label>
            <Input
              type="text"
              id="identificacion"
              placeholder="Ingrese su identificación"
              className="input"
              value={formData.identificacion}
              onChange={handleInputChange}
              required
            />

            <Label htmlFor="correo" className="label">Correo</Label>
            <Input
              type="email"
              id="correo"
              placeholder="Ingrese su correo"
              className="input"
              value={formData.correo}
              onChange={handleInputChange}
              required
            />

            <Label htmlFor="telefono" className="label">Teléfono</Label>
            <Input
              type="text"
              id="telefono"
              placeholder="Ingrese su teléfono"
              className="input"
              value={formData.telefono}
              onChange={handleInputChange}
              required
            />

            <Label htmlFor="fecha_nacimiento" className="label">Fecha de nacimiento</Label>
            <Input
              type="date"
              id="fecha_nacimiento"
              className="input"
              value={formData.fecha_nacimiento}
              onChange={handleInputChange}
              required
            />

            <Label htmlFor="contacto_emergencia" className="label">Contacto de emergencia</Label>
            <Input
              type="text"
              id="contacto_emergencia"
              placeholder="Ingrese su contacto de emergencia"
              className="input"
              value={formData.contacto_emergencia}
              onChange={handleInputChange}
              required
            />

            <Label htmlFor="password" className="label">Contraseña</Label>
            <Input
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
              className="input"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={8}
            />

            <Label htmlFor="confirmPassword" className="label">Confirmar Contraseña</Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirme su contraseña"
              className="input"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />

            <Button type="submit" className="button">
              Registrarse
            </Button>
          </FormRegister>
        </RegisterContainer>
      </Main>

      <Footer >
        <h2>Colmenares del Eje</h2>
        <p>© Todos los derechos reservados</p>
      </Footer>
      </Wrapper>
    </>
  );
}

export default UserRegister;
