
import {  NavLink } from 'react-router-dom';
import Styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import imagen1 from 'src/img/abejitas.jpeg';
import imagen2 from 'src/img/imagen_ejemplo.jpg';
import imagen3 from 'src/img/images.jpeg';
// Color Palette

// Responsive Header
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
// 
const Container = Styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
`;

const Main = Styled.main`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;


const Img = Styled.img`
  width: 300px;
  height: 150px;
  border-radius: 8px;
  border:1px solid gray;
  border:1px solid gray;
`;




const Section = Styled.section`
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    border: 1px solid gray;

    &:hover {
        transform: scale(1.02);
    }
`;

const DivSection = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 3;
`;

const Select = Styled.select`
    margin-top: 130px;
    border-radius: 12px;
    background-color:rgb(248, 227, 174);
    border: 2px solid #f6e7ff;
    font-family: 'Poppins', sans-serif;
`;

const Aside = Styled.aside`
    flex: 1;
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
`;

const ProfileImage = Styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid gray;
`;



const Footer = Styled.footer`
    background-color: #f9d77e;
    color: #4e342e;
    text-align: center;
    padding: 0.2rem;
    font-size: 0.73rem;
    border-radius:12px;
`;



function Dashboard() {

    const navigate = useNavigate();  

    const colmenas = [
        { id: "12345", finca: "Finca La Margarita", imagen : imagen1 },
        { id: "25485", finca: "Finca Los Alpes", imagen : imagen2  },
        { id: "987125", finca: "Finca La Graciela" , imagen : imagen3  },
    ];

    const handleSelectChange = (e) => {
        if (e.target.value === 'editar') {
            navigate('/ViewColmena'); 
        }
    };

    const returnDataColmena = () => {
        return true;
    }
    

    return (
        <>
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

            <Container>
                <Main>
                    {colmenas.map((colmena) => (
                        <Section key={colmena.id}>
                            <Img src={colmena.imagen} alt="Imagen de la colmena" />
                            <DivSection>
                                <h3>Cod {colmena.id}</h3>
                                <p>{colmena.finca}</p>
                            </DivSection>
                            <Select onChange={handleSelectChange}>
                                <option value="">Seleccionar</option>
                                <option value='editar'>Editar</option>
                                <option>Recolección</option>
                                <option>Monitoreo</option>
                            </Select>

                        </Section>
                    ))}
                </Main>

                <Aside>
                    <h2>Apicultor</h2>
                    <ProfileImage src="src/img/profile-pic.jpeg" alt="Perfil" />
                    <h3>Giovanny Molina</h3>
                    <select style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <option value="">Colmenas Relacionadas</option>
                    </select>
                </Aside>
            </Container>

            <Footer>
                <h2> Colmenares del Eje</h2>
                <p> @2025 Todos los derechos reservados</p>
            </Footer>
        </>
    );
}

export default Dashboard;