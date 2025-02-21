import React, { useState, useEffect } from 'react';
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
        width: 100%;
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
        gap: 0.3rem;
        align-items: center;
        width: 100%;
        padding: 0.3rem 0;
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
        }
    }
`;

const Main = Styled.main`
    display: flex;
    justify-content: center;
    flex: 1;
    background: radial-gradient(circle, white, white);
    padding: 1rem;
    gap: 2rem;
    margin: auto;
    max-width: 1000px;
    padding-top: calc(120px + 1rem);
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.laptop}) {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1.5rem;
        max-width: 95%;
        padding-top: calc(150px + 1rem);
    }
`;

const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem;
    width: 450px;
    min-height: 600px;
    height: 100%;
    border: 1px solid grey;
    margin: 0;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    
    @media (max-width: ${breakpoints.tablet}) {
        width: 95%;
        max-width: 450px;
        margin-top: calc(100px + 1rem);
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
    min-height: 360px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem;
    padding-bottom:4px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    border: 1px solid gray;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);

    h2 {
        margin: 0;
        color: rgb(0, 0, 0);
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    @media (max-width: ${breakpoints.laptop}) {
        width: 95%;
        max-width: 450px;
        margin: 0 auto;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.2rem;
        padding: 1.5rem;

        h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
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

//PopUp content
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
//Estilos del contenido de la API
const ClimaInfo = Styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    margin: 0.5rem 0;
    border-radius: 8px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1rem;

    h3 {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`;

const DataItem = Styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.1rem 0;
    align-items: center;
    gap: 0.5rem;

    .icon {
        width: 24px;
        height: 24px;
    }

    .label {
        font-size: 1rem;
        color: black;
    }

    .value {
        font-size: 1rem;
        font-weight: 500;
        text-align: right;
    }
`;

//Contenedor para ubicar el Aside y el contenedor de la API
const RightColumn = Styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 100%;
    max-height: 600px; // Altura máxima igual a FormContainer
    
    `;

function HivenRegister() {
    const [showPopup, setShowPopup] = useState(false);
    const [ubicacion, setUbicacion] = useState(null);
    const [clima, setClima] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        cantidadCriasAbierta: '',
        cantidadCriasOperculada: '',
        presenciaReina: '',
        colorReina: '',
        origenReina: '',
        reportesGenerales: '',
        // Datos de APIs
        latitud: '',
        longitud: '',
        temperatura_c: '',
        temperatura_f: '',
        clima_texto: '',
        viento_kph: '',
        presion_mb: '',
        humedad: ''
    });

    const [errors, setErrors] = useState({
        cantidadCriasAbierta: '',
        cantidadCriasOperculada: '',
        presenciaReina: '',
        colorReina: '',
        origenReina: '',
        reportesGenerales: ''
    });

    useEffect(() => {
        obtenerUbicacionYClima();
    }, []);

    const obtenerUbicacionYClima = async () => {
        if ("geolocation" in navigator) {
            setCargando(true);
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const { latitude, longitude } = position.coords;
                setUbicacion({ latitude, longitude });

                const respuestaClima = await fetch(
                    `http://api.weatherapi.com/v1/current.json?key=ca61bc45a6824e02a51185714251302&q=${latitude},${longitude}&lang=es`
                );
                
                if (!respuestaClima.ok) {
                    throw new Error('Error al obtener datos del clima');
                }

                const datosClima = await respuestaClima.json();
                const current = datosClima.current;

                setClima({
                    temperatura_c: current.temp_c,
                    temperatura_f: current.temp_f,
                    clima_texto: current.condition.text,
                    viento_kph: current.wind_kph,
                    presion_mb: current.pressure_mb,
                    humedad: current.humidity,
                    icono: current.condition.icon
                });

                // Actualizar formData con datos de ubicación y clima
                setFormData(prev => ({
                    ...prev,
                    latitud: latitude,
                    longitud: longitude,
                    temperatura_c: current.temp_c,
                    temperatura_f: current.temp_f,
                    clima_texto: current.condition.text,
                    viento_kph: current.wind_kph,
                    presion_mb: current.pressure_mb,
                    humedad: current.humidity
                }));

            } catch (error) {
                setError('Error al obtener la ubicación o datos del clima');
                console.error('Error:', error);
            } finally {
                setCargando(false);
            }
        }
    };

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

        if (name === 'cantidadCriasAbierta' || name === 'cantidadCriasOperculada') {
            if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Enviar todos los datos al backend
            const response = await fetch('TU_URL_BACKEND/api/colmenas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error al guardar los datos');
            }

            // Guardar en localStorage
            const nuevaColmena = {
                id: Date.now().toString(),
                ...formData
            };

            const colmenasGuardadas = JSON.parse(localStorage.getItem('colmenas')) || [];
            const nuevasColmenas = [...colmenasGuardadas, nuevaColmena];
            localStorage.setItem('colmenas', JSON.stringify(nuevasColmenas));
            
            setShowPopup(true);

            // Limpiar solo los campos del formulario, mantener datos de clima y ubicación
            setFormData(prev => ({
                ...prev,
                cantidadCriasAbierta: '',
                cantidadCriasOperculada: '',
                colorReina: '',
                origenReina: '',
                reportesGenerales: ''
            }));

        } catch (error) {
            console.error('Error al enviar datos:', error);
            setError('Error al guardar los datos en el servidor');
        }
    };

    return (
        <Wrapper>
            <Header>
                <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
                <NavContainer>
                    <LinkNav to='/HivenRegister'>Crear Colmena</LinkNav>
                    <LinkNav to='/Dashboard'>Visualizar Colmena</LinkNav>
                    <LinkNav to='/ScanQR'>Escanear QR</LinkNav>
                </NavContainer>
            </Header>
            <Main>
                <FormContainer>
                    <Title>Crear Colmena</Title>
                    
                    {/* Formulario original */}
                    <Form onSubmit={handleSubmit}>
                        <Label htmlFor="cantidad-crias-abierta">Cantidad de Cuadros de Cría Abierta</Label>
                        <Input
                            type="number"
                            id="cantidad-crias-abierta"
                            name="cantidadCriasAbierta"
                            placeholder="Ingrese la cantidad de crías abierta"
                            required
                            value={formData.cantidadCriasAbierta}
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
                            <option value="Si">Si</option>
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
                            <option value="Negra">Negra</option>
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

                <RightColumn>

                <Aside>
                    <h2>Apicultor</h2>
                    <ProfileImage src="src/img/profile-pic.jpeg" alt="Perfil" />
                    <h3>Giovanny Molina</h3>
                    <select style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <option value="">Colmenas Relacionadas</option>
                    </select>
                </Aside>
                {clima && ubicacion && (
                        <ClimaInfo>
                            <h3>Datos del Clima</h3>
                            
                            <DataItem>
                                <img src={`https:${clima.icono}`} alt="clima" className="icon"/>
                                <span className="label">Condición</span>
                                <span className="value">{clima.clima_texto}</span>
                            </DataItem>

                            <DataItem>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="temperatura" className="icon"/>
                                <span className="label">Temperatura</span>
                                <span className="value">{clima.temperatura_c}°C</span>
                            </DataItem>

                            <DataItem>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/119.png" alt="viento" className="icon"/>
                                <span className="label">Viento</span>
                                <span className="value">{clima.viento_kph} km/h</span>
                            </DataItem>

                            <DataItem>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/263.png" alt="humedad" className="icon"/>
                                <span className="label">Humedad</span>
                                <span className="value">{clima.humedad}%</span>
                            </DataItem>
                            <DataItem>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="ubicación" className="icon"/>
                                <span className="label">Latitud/Altitud</span>
                                <span className="value">{ubicacion.latitude.toFixed(2)}, {ubicacion.longitude.toFixed(2)}</span>
                            </DataItem>
                        </ClimaInfo>
                    )}



                </RightColumn>

              

                
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
                    <PopupButton onClick={() => setShowPopup(false)}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>
        </Wrapper>
    );
}

export default HivenRegister;