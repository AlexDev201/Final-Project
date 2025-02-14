import React, { useState } from 'react';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Sistema de breakpoints
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px'
};

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Header = Styled.header`
    display: flex;
    align-items: center;
    background-color: #f9d77e;
    padding: 1rem 2rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 0 0 12px 12px;
    position: fixed;
    width: 98.8%;
    top: 0;
    z-index: 1000;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        padding: 0.5rem;
        height: auto;
        width:100%;
        width: 98.8%;
    }
`;

const Logo = Styled.img`
    height: 50px;
    
    @media (max-width: ${breakpoints.tablet}) {
        height: 40px;
        margin-bottom: 0.5rem;
    }
`;

const NavContainer = Styled.nav`
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-grow: 1;
    padding: 5px;

        @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        gap: 0.3rem; // Reducimos el gap entre elementos
        align-items: center;
        width: 100%;
        padding: 0.3rem 0; // Reducimos el padding vertical
    }

    }
`;

const LinkNav = Styled(NavLink)`
    text-decoration: none;
    color: #4e342e;
    font-weight: bold;
    transition: color 0.3s ease;
    padding: 15px;
    font-size: 1.8rem;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.4rem;
        padding: 10px;
        text-align: center;
        width: 100%;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.2rem;
        padding: 8px;
    }

    &:hover {
        color: orange;
        transform: scale(1.05);
    }

    &.active {
        transform: scale(1.1);
        font-weight: bold;
        font-size: 2rem;
        background-color: rgb(246, 201, 110);
        border-radius: 12px;

        @media (max-width: ${breakpoints.tablet}) {
        font-size: 1.2rem;
        padding: 8px;
        text-align: center;
         width: 98.8%;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.1rem;
        padding: 6px;
    }|
    }
`;

const Main = Styled.main`
    display: flex;
    justify-content: space-between;
    flex: 1;
    background: radial-gradient(circle, white, white);
    padding: 1rem;
    gap: 2.6rem;
    margin: auto;
    max-width: 1400px;
    padding-top: calc(170px + 1rem);

  
    @media (max-width: ${breakpoints.laptop}) {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1.5rem;
        max-width: 95%;
        padding-top: calc(180px + 1rem); // Aumentamos el padding-top para móvil
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding-top: calc(180px + 1rem); // Aumentamos el padding-top para móvil
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding-top: calc(200px + 1rem); // Ajustamos aún más para pantallas muy pequeñas
    }
        
    }
`;

const Title = Styled.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1.5rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;

const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem;
    flex: 3;
    min-width: auto;
    width: 100%;
    max-width: 950px;
    border: 1px solid grey;
    margin: 0;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);

    @media (max-width: ${breakpoints.tablet}) {
        padding: 1rem;
        max-width: 95%;
        margin-top: calc(100px + 1rem);
    }
    
    @media (max-width: ${breakpoints.laptop}){
    padding: 1.4rem;
    margin-top: calc(70px + 1rem);
    }
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
`;

const Label = Styled.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.25rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
    }
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

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.4rem;
        font-size: 0.8rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`;

const Select = Styled.select`
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ffcc80;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    background-color: #fffde7;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.4rem;
        font-size: 0.8rem;
    }
`;

const ButtonContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Button = Styled.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    width: 150px;
    margin-top: 1rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
`;

const Aside = Styled.aside`
    width: 450px;
    flex: 1;
    min-width: 400px;
    max-width: 500px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border: 1px solid gray;
    font-size: 1.6rem;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);

    @media (max-width: ${breakpoints.laptop}) {
        width: 100%;
        max-width: 800px;
        margin: 0 1rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.2rem;
        padding: 15px;
        min-width: auto;
    }

    h2, h3 {
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 1.2rem;
        }
    }
`;

const ProfileImage = Styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #f9d77e;

    @media (max-width: ${breakpoints.mobile}) {
        width: 80px;
        height: 80px;
    }
`;

const Footer = Styled.footer`
    background-color: #f9d77e;
    color: #4e342e;
    text-align: center;
    padding: 0.2rem;
    font-size: 0.76rem;
    border-radius: 12px 12px 0 0;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.7rem;
        
        h2 {
            font-size: 1rem;
        }
    }
`;

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
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0.1)'};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem;
    }
`;

const SuccessIcon = Styled.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 60px;
        height: 60px;
        margin: -30px auto 15px;
        
        &::after {
            font-size: 30px;
        }
    }
`;

const PopupTitle = Styled.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
    }
`;

const PopupButton = Styled.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    
    &:hover {
        background: #f8c150;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
        padding: 8px 24px;
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


        const [errors, setErrors] = useState({
            cantidadCriasAbierta: '',
            cantidadCriasOperculada: '',
            presenciaReina: '',
            colorReina: '',
            origenReina: '',
            reportesGenerales: ''
        });
    
        const preventLetters = (e) => {
            if (!/[\d.]/.test(e.key) && 
                e.key !== 'Backspace' && 
                e.key !== 'Delete' && 
                e.key !== 'ArrowLeft' && 
                e.key !== 'ArrowRight') {
                e.preventDefault();
            }
            
            if (e.key === '.' && e.target.value.includes('.')) {
                e.preventDefault();
            }
        };


    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validación específica para campos numéricos
        if (name === 'cantidadCriasAbierta' || name === 'cantidadCriasOperculada') {
            if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            // Para todos los demás campos
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }


        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

        

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);

        // Crear objeto con la información relevante que quieres mostrar
        const nuevaColmena = {
            id: Date.now().toString(), // Genera un ID único
            presenciaReina: formData.presenciaReina,
            colorReina: formData.colorReina,
            // Añade otros campos que quieras mostrar
        };

        // Obtener colmenas existentes
        const colmenasGuardadas = JSON.parse(localStorage.getItem('colmenas')) || [];
        
        // Añadir nueva colmena
        const nuevasColmenas = [...colmenasGuardadas, nuevaColmena];
        
        // Guardar en localStorage
        localStorage.setItem('colmenas', JSON.stringify(nuevasColmenas));
        
        
        //Mostramos el PopUp
        setShowPopup(true);

        //Limpiamos el formulario
        setFormData({
            cantidadCriasAbierta: '',
            cantidadCriasOperculada: '',
            colorReina: '',
            origenReina: '',
            reportesGenerales: ''
        });

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
                            onKeyDown={preventLetters}
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
                            onKeyDown={preventLetters}
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
                        <ButtonContainer>
                        <Button type="submit">Crear</Button>
                        </ButtonContainer>

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
