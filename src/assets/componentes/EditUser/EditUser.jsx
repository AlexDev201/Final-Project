import Styled from 'styled-components';
import { useState } from 'react';
import {  NavLink, useLocation } from 'react-router-dom';


const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; 
    width: 100%;
    margin: 0;
    padding: 0;
`;

const Header = Styled.header`
    display: flex;
    align-items: center;
    padding-right:30px;
    background-color: #f9d77e;
    padding: 1rem 2rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius:0 0 12px 12px;
    position: fixed;
    width: 98.8%;
    top:0;
    margin:0;
`;

const Logo = Styled.img`
    height: 50px;
   
`;

const NavContainer = Styled.nav`
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-grow:1;
    padding:5px;
`;

const LinkNav = Styled(NavLink)`
    text-decoration: none;
    color:  #4e342e;
    font-weight: bold;
    transition: color 0.3s ease;
    padding: 20px;
    font-size:2.0rem;

    &:hover {
        color: orange;
        transform: scale(1.10);
        
    }

    &.active {
    transform: scale(1.1);
    font-weight: bold;
    font-size: 45px;
    background-color :rgb(246, 201, 110);

  }
`;

const Title = Styled.h1`
    margin: 0;
    color:rgb(0, 0, 0);
    font-size: 1.8rem;
    text-align: center;
    margin-bottom:1.5rem;
    
`;

const Main = Styled.main`
    background-color: #f9d77e;
    display: flex;
    justify-content: space-between;
    flex: 1;
    background: radial-gradient(circle, white, white);
    padding: 1rem;
    gap:2.6rem;
    margin:  auto; // Centra el contenido
    max-width: 1400px; // Limita el ancho máximo para pantallas muy grandes
    padding-top: calc(150px + 1rem)
    
`;



const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem;
    flex: 3; // Esto hará que tome 3 partes del espacio disponible
    min-width: 600px; // Ancho mínimo para el formulario
    border: 1px solid grey;
    margin-left: 3.9rem;
    box-shadow:  0 0 20px 5px rgba(0, 0, 0, 0.25);
    
`;

const Form = Styled.form`
    display: flex;
     flex-direction: column;
     gap: 0.75rem;
`;

const Label = Styled.label`
    font-weight: 500;
    color:rgb(0, 0, 0);
    text-align: left;
`;

const Input = Styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ffcc80;
    border-radius: 10px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 1rem;
    transition: border-color 0.3s;
    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`;



const Select = Styled.select`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ffcc80;
    border-radius: 10px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
`;

const Button = Styled.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.8rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #4e342e;
    transition: background-color 0.3s;
    &:hover {
        background-color: #f8c150;
    }
`;

const Aside = Styled.aside`
    width: 350px;
    flex: 1;
    min-width: 300px; // Ancho mínimo para el aside
    max-width: 400px; // Ancho máximo para el aside
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border: 1px solid gray;
    font-size:1.6rem;
    box-shadow:  0 0 20px 5px rgba(0, 0, 0, 0.25);
`;


const ProfileImage = Styled.img`
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid ##f9d77e;;
        border: 1px solid grey;
`;


const ButtonContainer = Styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
`;

const Footer = Styled.footer`
    background-color: #f9d77e;
    color: #4e342e;;
    text-align: center;
    padding: 0.2rem;
    font-size: 0.76rem;
    border-radius:12px;
`;

//PopUp


const PopupOverlay = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.isVisible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = Styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  width: 400px;
  transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0.1)'};
  transition: transform 0.4s ease-in-out;
`;

const SuccessIcon = Styled.div`
  width: 80px;
  height: 80px;
  margin: -40px auto 20px;
  border-radius: 50%;
  background:  #f9d77e;;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '✓';
    font-size: 40px;
    color: white;
  }
`;

const PopupTitle = Styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const PopupButton = Styled.button`
  background:  #f9d77e;;
  color: black;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background:#f8c150;
  }
`;


function    EditUser() {
    //Estado del PopUp
    const [showPopup, setShowPopup] = useState(false);

    const [formDataUser, setFormDataUser] = useState({
         nombreApicultor : '',
         apellditoApicultor: '',
         telefono: '',
         correo : '',
         nombreContactoEmergencia: '',
         contactoEmergencia: '',
         fechaNacimiento: ''

      })
 
     const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData(prevState => ({
           ...prevState,
           [name]: value
         }));
       };
 
       const handleSubmit = (e) => {
         e.preventDefault();
         // console.log('Datos del formulario:', formData);
         setShowPopup(true);
       };
     
       
    const closePopup = () => {
        setShowPopup(false);
    };

    return(
      <Wrapper> 
         <Header>
                <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
                <NavContainer>
                    <LinkNav to='/UserRegister'>
                          Crear Apicultor
                    </LinkNav>
                    <LinkNav to='/EditUser'>Editar Apicultor</LinkNav>
                    <LinkNav to='/ScanQR'>Vista Apicultor</LinkNav>
                </NavContainer>
            </Header>
        <Main>
            <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Title>Editar Apicultor</Title>
                
                <Label>Ingrese los nombres del apicultor</Label>
                <Input
                    type='text'
                    name='nombreApicultor'
                    placeholder='Ingrese el nombre del apicultor'
                    value={formDataUser.nombreApicultor}
                    onChange={handleChange}
                    required
                />

                <Label>Ingrese los apellidos del apicultor</Label>
                <Input
                    type='text'
                    name='nombreApicultor'
                    placeholder='Ingrese los apellidos del apicultor'
                    value={formDataUser.apellditoApicultor}
                    onChange={handleChange}
                    required
                />
                <Label>Identificacion</Label>
                <Input
                type='number'
                placeholder='Ingrese la identificacion del apicultor'/>

                <Label>Telefono </Label>
                <Input
                    type='number'
                    name='telefono'
                    placeholder='Ingrese el número del apicultor'
                    value={formDataUser.cuadrosCriaOperculada}
                    onChange={handleChange}
                    required
                />
                
                <Label>Correo</Label>
               <Input
               type='email'
               placeholder='Ingrese el correo del apicultor'
               value={formDataUser.correo}
               onChange={handleChange}/>
                
               
                
                <Label>Fecha de Nacimiento</Label>
                <Input 
                type='date'
                placeholder='Ingrese la fecha de nacimiento del apicultor'
                value={formDataUser.fechaNacimiento}
                />

                <Label>Contacto de emergencia</Label>
                <Input
                type='number'
                placeholder='Ingrese el contacto e emergencia'
                value={formDataUser.contactoEmergencia}/>

                <Label>Nombre de contacto</Label>
                <Input
                type='text'
                placeholder='Ingrese el nombre del contacto e emergencia'
                value={formDataUser.contactoEmergencia}/>
                <br></br>
                <ButtonContainer>
                <Button type="submit">Editar</Button>
                <Button>Deshabilitar</Button>
</ButtonContainer>
            </Form>
            </FormContainer>

                <Aside>
                            <h2>Administrador</h2>
                            <ProfileImage src="src/img/profile-pic.jpeg" alt="Perfil" />
                            <h3>Daniel Herrera</h3>
                            <select style={{ fontFamily: "'Poppins', sans-serif" }}>
                                <option value="">Colmenas Relacionadas</option>
                            </select>
                    </Aside>
            </Main>
        

        <Footer>
            <h2>Colmenares del Eje</h2>
            <p>@2025 Todos los derechos reservados</p>
        </Footer>

        <PopupOverlay $isVisible={showPopup}>
                <PopupContent $isVisible={showPopup}>
                    <SuccessIcon />
                    <PopupTitle>Actualización Exitosa </PopupTitle>
                    <p>La colmena ha sido actualizada exitosamente</p>
                    <PopupButton onClick={closePopup}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>
      </Wrapper> 
    )
}

export default  EditUser;