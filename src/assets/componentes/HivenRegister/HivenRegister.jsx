import React, { useState } from 'react';
import Styled from 'styled-components';
import {  NavLink} from 'react-router-dom';

/*Estilos generales del modulo*/
const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;



const Header = Styled.header`
    display: flex;
    align-items: center;
    padding-right:30px;
    background-color: #f9d77e;
    padding: 1rem 2rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius:12px;
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

const Title = Styled.h1`
    margin: 0;
    color:rgb(0, 0, 0);
    font-size: 1.8rem;
    text-align: center;
    margin-bottom:1.5rem;
    
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
    
   
  }
  
`;


const Main = Styled.main`
    background-color: #f9d77e;
    display: flex;
    justify-content: space-between;
    flex: 1;
    background: radial-gradient(circle, white, white);
    padding: 1rem;
    gap:2.6rem;
    margin:  auto;
    max-width: 1400px; 
    
`;



const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem;
    flex: 3; 
    min-width: 600px; 
    border: 1px solid grey;
    margin-left: 3.9rem;
    box-shadow:  0 0 20px 5px rgba(0, 0, 0, 0.25);
    
`;

const Form = Styled.form`
     display: flex;
     flex-direction: column;
     gap: 0.75rem;
     width:100%;
`;

const Label = Styled.label`
    font-weight: 500;
    color:rgb(10, 10, 10);
    margin-bottom: 0.25rem;
`;

const Input = Styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.9rem;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`;

const Select = Styled.select`
    width: auto;
    margin: 0.5rem 0 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;

`;

const Button = Styled.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    margin-top: 1rem;

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



const Footer = Styled.footer`
    background-color: #f9d77e;
    color: #4e342e;;
    text-align: center;
    padding: 0.2rem;
    font-size: 0.76rem;
    border-radius:12px;
`;

//Estilos para el PopUp

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
  background: #6fd649;
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
  background: #6fd649;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background: #5fb53d;
  }
`;



function HivenRegister() {

    const [showPopup, setShowPopup] = useState(false);


   
    const [formData, setFormData] = useState({
        cantidadCriasAbierta : '',
        cantidadCriasOperculada : '',
        presenciaReina : '',
        colorReina : '',
        origenReina: '',
        reportesGenerales: '' })

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
        // alert('Datos del formulario' + JSON.stringify(formData));

        setShowPopup(true);

      }
    

    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        <Wrapper>
            <Header>
                <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
                <NavContainer>
                    <LinkNav to='/HivenRegister'>
                          Crear Colmena
                    </LinkNav>
                    <LinkNav to='/Dashboard'>Visualizar Colmena</LinkNav>
                    <LinkNav to='/ScanQR'>Escanear QR</LinkNav>
                </NavContainer>
            </Header>
            <Main>
                <FormContainer>
                    <Title>Crear Colmena</Title>
                    <Form onSubmit={handleSubmit}>
                        <Label htmlFor="cantidad-crias-abierta">Cantidad de Cuadros de Cría Abierta</Label>
                        <Input
                            type="number"
                            id="cantidad-crias-abierta"
                            name="cantidadCriasAbierta"
                            placeholder="Ingrese la cantidad de crías abierta"
                            required
                            value = {formData.cantidadCriasAbierta}
                            onChange={handleChange}
                        />

                        <Label htmlFor="cantidad-crias-operculada">Cantidad de Cuadros de Cria Operculada</Label>
                        <Input
                            type="number"
                            id="cantidad-crias-operculada"
                            name="cantidadCriasOperculada"
                            placeholder="Ingrese la cantidad de crías operculada"
                            required
                            value={formData.cantidadCriasOperculada}
                            onChange={handleChange}
                        />

                        <Label htmlFor="presencia-reina">Presencia de reina</Label>
                        <Select
                            id="presencia-reina"
                            name='presenciaReina'
                            value={formData.presenciaReina}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Si">Si </option>
                            <option value="No">No</option>
                         
                        </Select>

                        <Label htmlFor="color-reina">Color de la reina</Label>
                        <Select
                            name='colorReina'
                            value={formData.colorReina}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Amarilla">Amarilla</option>
                            <option value="Verde">Verde</option>
                            <option value="Roja">Roja</option>
                            <option value="Negra">Negra </option>
                        </Select>
                        <Label htmlFor="origen-reina">Origen de la reina</Label>
                        <Select
                            id="origen-reina"
                            name="origenReina"
                            required
                            value={formData.origenReina}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Seleccione una opción</option>
                            <option value="Europea">Europea</option>
                            <option value="Angelita">Angelita</option>
                            <option value="Africanita">Africanita</option>
                        </Select>

                        <Label htmlFor="reportes-generales">Reportes generales</Label>
                        <Input
                            type="text"
                            id="reportes-generales"
                            name="reportesGenerales"
                            placeholder="Ingrese los reportes generales"
                            required
                            value={formData.reportesGenerales}
                            onChange={handleChange}
                        />

                        <Button type="submit">Crear</Button>
                    </Form>
                </FormContainer>
                <Aside>
                        <h2>Apicultor</h2>
                        <ProfileImage src="src/img/profile-pic.jpeg" alt="Perfil" />
                        <h3>Giovanny Molina</h3>
                        <select style={{ fontFamily: "'Poppins', sans-serif" }}>
                            <option value="">Colmenas Relacionadas</option>
                        </select>
                </Aside>
            </Main>
            <Footer>
                        <h2>Colmenares del Eje</h2>
                        <p> @2025 Todos los derechos reservados</p>
            </Footer>

            <PopupOverlay isVisible={showPopup}>
                <PopupContent isVisible={showPopup}>
                    <SuccessIcon />
                    <PopupTitle>Registro Exitoso</PopupTitle>
                    <p>La colmena ha sido creada exitosamente</p>
                    <PopupButton onClick={closePopup}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>



        </Wrapper>
    );
}

export default HivenRegister;
