import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
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


//PopUp Styles
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.2s, visibility 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
    background: white;
    padding: 2.6rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0.1)'};
    transition: transform 0.4s ease-in-out;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem;
    }
`;


const CloseIcon = styled.button`
    width: 30px;
    height: 30px;
    background: #f9d77e;
    border-radius: 100%;
    position: absolute;
    left: 88%;
    bottom: 90%;
    border: none;
    &::after {
        content: 'X';
        font-size: 20px;
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


const PopupTitle = styled.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
    }
`;

const PopupImageSection = styled.div`
    flex: 0 0 auto;
    text-align: center;
    margin-top: 20px;
`;

const PopupBody = styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`;

const PopupInfoSection = styled.div`
    flex: 1;
    text-align: left;
    padding: 2px;

    p {
        margin: 8px 0;
        font-size: 1rem;
        line-height: 1.5;
    }

    @media (max-width: ${breakpoints.mobile}) {
        text-align: center;
    }
`;


const PopupButton = styled.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin: 15px;
    border-radius:12px;
    width: 138px;
    &:hover {
        background: #f8c150;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
        padding: 8px 24px;
    }
`;

const PopupButtonsContainer = styled.div`
       display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.2rem;
      position: absolute;
      width: 150px;  // El mismo ancho que la imagen
      margin-top: -140px;  // Un poco más que el alto de la imagen (150px) para dar espacio
      left: 1.8rem;  // Alinear con el margen izquierdo donde está la imagen
`;


function ViewApicultor() {
  const navigate = useNavigate();
  const [selectedApicultorId, setSelectedApicultorId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  

  const apicultores = [
    {id: 12345678, nombre: 'Carlos Parra', imagen: imagen1},
    {id:99887766, nombre: 'Daniel Delgado', imagen: imagen2},
    {id: 33445522, nombre: 'Dayana Navia', imagen: imagen3}
  ];

  const infoApicultores = [
    {
      id: 12345678,
      nombres: 'Carlos Jose',
      apellidos: 'Parra',
      identificacion : 165343,
      telefono: 31000000,
      correo: "Carlos@gmail.com",
      contactoEmergencia: 12345,
      imagen: imagen1
    },
    {
      id: 99887766,
      nombres: 'Daniel Jose',
      apellidos: 'Delgado',
      identificacion : 165343,
      telefono: 31000000,
      correo: "Daniel@gmail.com",
      contactoEmergencia : 12345,
      imagen: imagen1
    },
    {
      id: 33445522,
      nombres: 'Ingrid Dayana',
      apellidos: 'Navia',
      identificacion : 165343,
      telefono: 31000000,
      correo: "Dayana@gmail.com",
      contactoEmergencia: 12345,
      imagen: imagen1
    }
  ]

  const handleSelectChange = (e, apicultorId) => {
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
      case 'ver-detalles' :
        setSelectedApicultorId(null); // Primero resetea
        setTimeout(() => {
          setSelectedApicultorId(apicultorId);
          setShowPopup(true);
        }, 10);
        break;
        default:
        break;
    }
  };

  const closePopup = () => {
    setShowPopup(false);

    setTimeout(() => {
      setSelectedApicultorId(null);
    }, 400)}


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
                <Select onChange={(e) => handleSelectChange(e, apicultor.id)}>

                  <option value="">Seleccionar</option>
                  <option value='editar'>Editar</option>
                  <option value="ver-detalles">Ver detalles</option>
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

    <PopupOverlay isVisible={showPopup}>
    <PopupContent isVisible={showPopup}>
      
            <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
            <CloseIcon onClick={closePopup}></CloseIcon>
        
        {selectedApicultorId && (
            (() => {
                const selectedApicultor = infoApicultores.find(a => a.id === selectedApicultorId);
                if (selectedApicultor) {
                    return (
                        <>
                            <PopupTitle>Información del apicultor</PopupTitle>
                            <PopupBody>
                                <PopupImageSection>
                                    <img 
                                        src={selectedApicultor.imagen} 
                                        alt={`${selectedApicultor.nombres} ${selectedApicultor.apellidos}`}
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '3px solid gray'
                                        }}
                                    />
                                </PopupImageSection>
                                <PopupInfoSection>
                                    <p><strong>Nombres:</strong> {selectedApicultor.nombres}</p>
                                    <p><strong>Apellidos:</strong> {selectedApicultor.apellidos}</p>
                                    <p><strong>Identificación:</strong> {selectedApicultor.identificacion || 'No especificado'}</p>
                                    <p><strong>Teléfono:</strong> {selectedApicultor.telefono}</p>
                                    <p><strong>Correo:</strong> {selectedApicultor.correo}</p>
                                    <p><strong>Contacto de emergencia:</strong> {selectedApicultor.contactoEmergencia}</p>
                                </PopupInfoSection>
                            </PopupBody>
                            <PopupButtonsContainer>
                                <PopupButton>Editar</PopupButton>
                                <PopupButton>Deshabilitar</PopupButton>
                            </PopupButtonsContainer>
                        </>
                    );
                } else {
                    return <p>No se encontró información detallada para esta colmena.</p>;
                }
            })()
        )}
  </PopupContent>
</PopupOverlay>


    </PageWrapper>
  );
};

export default ViewApicultor;