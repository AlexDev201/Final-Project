import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


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
     width: 98.5%;
    top:0,
    margin: 0,
    z-index: 1000
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
    border-radius: 12px;
    gap: 50px;  
  }
`;

//

const Main = Styled.main`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: row;
    flex: 1;
    padding: 1rem;
    padding-top: calc(170px + 1rem);
    gap: 5rem;
`;

const Form = Styled.form`
    display: flex;
     flex-direction: column;
     gap: 0.75rem;
`;


const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow:  0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    border : 1px solid grey;
    
`;

const FormTitle = Styled.h2`
    margin-bottom: 1rem;
    color: #4e342e;
    text-align: center;
`;


const FormLogin = Styled.form`
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

//Aside

const Aside = Styled.aside`
    width: 450px;
    flex: 0 0 auto;
    min-width: 250px;
    max-width: 300px;
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
    margin-bottom: 7rem;
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
    color: #4e342e;
    text-align: center;
    padding: 0.rem;
    font-size: 0.75rem;
    border-radius:12px 12px 0 0;
`;

function Monitoreo(){

    const [formDataMonitoreo, setFormDataMonitoreo] = useState({
        fechaMonitoreo: '',
        onservacionesReina: '',
        observacionesAlimento:'',
        ObservacionesReina: '',
        observacionesGenerales: '',
    })


    const handleSubmit = (e) => (
        e.preventDefault()


    )

    return (
        <Wrapper>
             <Header>
                <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
                <NavContainer>
                    <LinkNav to='/HivenRegister'>
                          Crear Colmena
                    </LinkNav>
                    <LinkNav to='/Monitoreo'>Visualizar Colmena</LinkNav>
                    <LinkNav to='/ScanQR'>Escanear QR</LinkNav>
                </NavContainer>
            </Header>
    
            <Main>
                <FormContainer>
                    <Form>
                        <FormTitle>Monitoreo</FormTitle>
    
                        <Label>Fecha de monitoreo</Label>
                        <Input type="date" required placeholder="Ingrese la fecha de recolección" />
    
                        <Label>Observaciones reina</Label>
                        <Input type="text" required placeholder="Ingrese las observaciones de la reina" />
    
                        <Label>Observación de alimentos</Label>
                        <Input type="text" required placeholder="Ingrese las observaciones de alimentos" />
    
                        <Label>Observaciones reina</Label>
                        <Input type="text" required placeholder="Ingrese las observaciones de la reina" />
    
                        <Label>Observaciones generales</Label>
                        <Input type="text" required placeholder="Ingrese las observaciones generales" />
    
                        <Button>Enviar</Button>
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
                <p>@2025 Todos los derechos reservados</p>
            </Footer>
        </Wrapper>
    );
}
export default Monitoreo;
