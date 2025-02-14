import Styled from 'styled-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; 
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

const Header = Styled.header`
    display: flex;
    align-items: center;
    padding-right: 30px;
    background-color: #f9d77e;
    padding: 1rem 2rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 0 0 12px 12px;
    position: fixed;
    width: 100%;
    top: 0;
    margin: 0;
    z-index: 1000;
`;

const Logo = Styled.img`
    height: 50px;
`;

const NavContainer = Styled.nav`
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-grow: 1;
    padding: 5px;
`;

const LinkNav = Styled(NavLink)`
    text-decoration: none;
    color: #4e342e;
    font-weight: bold;
    transition: color 0.3s ease;
    padding: 20px;
    font-size: 2.0rem;

    &:hover {
        color: orange;
        transform: scale(1.10);
    }

    &.active {
        transform: scale(1.1);
        font-weight: bold;
        font-size: 45px;
        background-color: rgb(246, 201, 110);
        border-radius:12px;
    }
`;

const Main = Styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 1rem;
    padding-top: calc(120px + 1rem);
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    border: 1px solid grey;
`;

const FormTitle = Styled.h2`
    margin-bottom: 1rem;
    color: #4e342e;
    text-align: center;
`;

const Label = Styled.label`
    font-weight: 500;
    color: rgb(0, 0, 0);
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

const Footer = Styled.footer`
    background-color: #f9d77e;
    color: #4e342e;
    text-align: center;
    padding: 0.2rem;
    font-size: 0.75rem;
    border-radius: 12px 12px 0 0;
`;

const ErrorMessage = Styled.span`
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: -0.5rem;
`;

//
function Recoleccion() {

    const [formDataMonitoreo, setFormDataMonitoreo] = useState({
        fechaRecoleccion: '',
        produccionMiel: '',
        produccionPolen: ''
    });

    const [errors, setErrors] = useState({
        fechaRecoleccion: '',
        produccionMiel: '',
        produccionPolen: ''
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
        //Prevenir letras en los siguientrs campos:
        if (name === 'produccionMiel' || name === 'produccionPolen') {
            if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setFormDataMonitoreo(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            setFormDataMonitoreo(prev => ({
                ...prev,
                [name]: value
            }));
        }

        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    //Funcion para validaciones
    const validateForm = () => {
        const newErrors = {};
        const today = new Date();

        if (!formDataMonitoreo.fechaRecoleccion) {
            newErrors.fechaRecoleccion = 'La fecha es requerida';
        } else if (new Date(formDataMonitoreo.fechaRecoleccion) > today) {
            newErrors.fechaRecoleccion = 'La fecha no puede ser futura';
        }

        if (!formDataMonitoreo.produccionMiel) {
            newErrors.produccionMiel = 'La producción de miel es requerida';
        } else {
            const mielValue = parseFloat(formDataMonitoreo.produccionMiel);
            if (isNaN(mielValue)) {
                newErrors.produccionMiel = 'Debe ser un número válido';
            } else if (mielValue < 0) {
                newErrors.produccionMiel = 'La producción no puede ser negativa';
            } else if (mielValue > 1000) {
                newErrors.produccionMiel = 'La producción no puede exceder 1000';
            }
        }

        if (!formDataMonitoreo.produccionPolen) {
            newErrors.produccionPolen = 'La producción de polen es requerida';
        } else {
            const polenValue = parseFloat(formDataMonitoreo.produccionPolen);
            if (isNaN(polenValue)) {
                newErrors.produccionPolen = 'Debe ser un número válido';
            } else if (polenValue < 0) {
                newErrors.produccionPolen = 'La producción no puede ser negativa';
            } else if (polenValue > 1000) {
                newErrors.produccionPolen = 'La producción no puede exceder 1000';
            }
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        console.log('Datos validados:', formDataMonitoreo);
        
        //Limpiamos el formulario
        setFormDataMonitoreo({
            fechaRecoleccion: '',
            produccionMiel: '',
            produccionPolen: ''
        });
        setErrors({});
    };

    return (
        <Wrapper>
            <Header>
                <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
                <NavContainer>
                    <LinkNav to='/HivenRegister'>Crear Colmena</LinkNav>
                    <LinkNav to='/Recoleccion'>Visualizar Colmena</LinkNav>
                    <LinkNav to='/ScanQR'>Escanear QR</LinkNav>
                </NavContainer>
            </Header>
        
            <Main>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <FormTitle>Recolección</FormTitle>
                        
                        <Label>Fecha de recolección</Label>
                        <Input
                            type="date"
                            name="fechaRecoleccion"
                            value={formDataMonitoreo.fechaRecoleccion}
                            onChange={handleChange}
                            required
                        />
                        {errors.fechaRecoleccion && (
                            <ErrorMessage>{errors.fechaRecoleccion}</ErrorMessage>
                        )}

                        <Label>Producción de miel</Label>
                        <Input
                            type="number"
                            name="produccionMiel"
                            placeholder="Ingrese la producción de miel"
                            value={formDataMonitoreo.produccionMiel}
                            onChange={handleChange}
                            onKeyPress={preventLetters}
                            min="0"
                            step="0.01"
                            required
                        />
                        {errors.produccionMiel && (
                            <ErrorMessage>{errors.produccionMiel}</ErrorMessage>
                        )}

                        <Label>Producción de polen</Label>
                        <Input
                            type="number"
                            name="produccionPolen"
                            placeholder="Ingrese la producción de polen"
                            value={formDataMonitoreo.produccionPolen}
                            onChange={handleChange}
                            onKeyPress={preventLetters}
                            min="0"
                            step="0.01"
                            required
                        />
                        {errors.produccionPolen && (
                            <ErrorMessage>{errors.produccionPolen}</ErrorMessage>
                        )}

                        <Button type="submit">Enviar</Button>
                    </Form>
                </FormContainer>
            </Main>

            <Footer>
                <h2>Colmenares del Eje</h2>
                <p>@2025 Todos los derechos reservados</p>
            </Footer>
        </Wrapper>
    );
}

export default Recoleccion;