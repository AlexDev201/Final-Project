import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imagen1 from 'src/img/apicultor_icon.png';
import imagen2 from 'src/img/apicultor_icon_3.png';
import imagen3 from 'src/img/apicultor_icon_2.png';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px'
};


const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const HeaderWrapper = styled.div`
  height: 250px;
  
  @media (min-width: ${breakpoints.tablet}) {
    height: 120px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9d77e;
  padding: 0.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 0 0 12px 12px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    padding: 1rem 2rem;
  }
`;

const Logo = styled.img`
  height: 35px;
  margin-bottom: 0.5rem;

  @media (min-width: ${breakpoints.tablet}) {
    height: 50px;
    margin-bottom: 0;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
    padding: 5px;
    gap: 2rem;
  }
`;

const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: #4e342e;
  font-weight: bold;
  transition: all 0.3s ease;
  padding: 8px;
  font-size: 1rem;
  width: 100%;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    width: 98.8%;
    font-size: 1.5rem;
    padding: 20px;
  }

  &:hover {
    color: orange;
    transform: scale(1.05);
    border-radius: 12px;
  }

  &.active {
    transform: scale(1.05);
    font-weight: bold;
    background-color: rgb(246, 201, 110);
    border-radius: 12px;

    @media (min-width: ${breakpoints.tablet}) {
      transform: scale(1.1);
      font-size: 1.8rem;
    }
  }
`;



const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  @media (min-width: ${breakpoints.tablet}) {
    flex: 2;
    margin: 0;
  }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  margin-top: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  flex: 1;

  
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    padding: 20px;
    margin-top: 0;
    align-items: strecth;
  }
`;

const Section = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  border: 1px solid gray;
  max-width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid gray;

  @media (min-width: ${breakpoints.tablet}) {
    width: 120px;
    height: 120px;
  }
`;

const DivSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 12px;
  background-color: rgb(248, 227, 174);
  border: 2px solid #f6e7ff;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  margin-top: 5px;
  cursor: pointer;
  
  /* Estilos para las opciones */
  option {
    padding: 8px;
    font-size: 0.9rem;
    background-color: white;
  }

  /* Móvil pequeño */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 6px;
    font-size: 0.8rem;
    
    option {
      padding: 6px;
      font-size: 0.8rem;
    }
  }

  /* Tablet */
  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
    min-width: 150px;
    margin-top: 0;
    padding: 10px;
    font-size: 1rem;
    
    option {
      padding: 10px;
      font-size: 1rem;
    }
  }

  /* Desktop */
  @media (min-width: ${breakpoints.desktop}) {
    min-width: 180px;
    padding: 12px;
    font-size: 1rem;
    
    option {
      padding: 12px;
      font-size: 1rem;
    }
  }

  &:focus {
    outline: none;
    border-color: #f8c150;
  }
`;

const Aside = styled.aside`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 1px solid gray;
  font-size: 1.2rem;
  max-width: 350px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.tablet}) {
    flex: 1;
    font-size: 1.6rem;
    margin: 0;
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid gray;

  @media (min-width: ${breakpoints.tablet}) {
    width: 100px;
    height: 100px;
  }
`;

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: #f9d77e;
  color: #4e342e;
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 12px 12px 0 0;
  width: 100%;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0 0 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0.2rem;
    font-size: 0.9rem;
  }
`;

function ViewApicultor() {
  const navigate = useNavigate();

  const apicultores = [
    {id: 12345678, nombre: 'Carlos Parra', imagen: imagen1},
    {id:99887766, nombre: 'Daniel Delgado', imagen: imagen2},
    {id: 33445522, nombre: 'Dayana Navia', imagen: imagen3}
  ];

  const handleSelectChange = (e) => {
    switch(e.target.value) {
      case 'editar':
        navigate('/EditUser');
        break;
      case 'monitoreo':
        navigate('/Monitoreo');
        break;
      case 'recoleccion':
        navigate('/Recoleccion');
        break;
      default:
        break;
    }
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <Header>
            <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
            <NavContainer>
              <LinkNav to='/UserRegister'>Crear Apicultor</LinkNav>
              <LinkNav to='/ViewApicultor'>Visualizar Apicultor</LinkNav>
              <LinkNav to='/ScanQR'>Vista Apicultor</LinkNav>
            </NavContainer>
          </Header>
        </HeaderWrapper>

        <Container>
          <Main>
            {apicultores.map((apicultor) => (
              <Section key={apicultor.nombre}>
                <Img src={apicultor.imagen} alt="Imagen de la colmena" />
                <DivSection>
                  <h3>{apicultor.nombre}</h3>
                  
                </DivSection>
                <Select onChange={handleSelectChange}>
                  <option value="">Seleccionar</option>
                  <option value='editar'>Editar</option>
                </Select>
              </Section>
            ))}
          </Main>

          <Aside>
            <h2>Administrador</h2>
            <ProfileImage src="src/img/profile-pic.jpeg" alt="Perfil" />
            <h3>Daniel Herrera</h3>
          </Aside>
        </Container>
      </ContentWrapper>

      <Footer>
        <h2>Colmenares del Eje</h2>
        <p>@2025 Todos los derechos reservados</p>
      </Footer>
    </PageWrapper>
  );
};

export default ViewApicultor;