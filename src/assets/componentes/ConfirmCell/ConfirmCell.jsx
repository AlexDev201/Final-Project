import Styled from 'styled-components';
import {Link} from 'react-router-dom'
import { useState } from 'react';


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
    justify-content: center;
    position: relative;
    background-color: #f9d77e;
    padding: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height:65px;
    border-radius:12px;
    }
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
    font-size: 2.3rem;
    text-align: center;
`;

//Es el mismo Main de recuperar contraseña
const Main = Styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: radial-gradient(circle, white, white);
    padding: 1rem;
`;


const Container = Styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow:  0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    border : 1px solid grey;
    color: black;
`;

const FormTitle = Styled.h2`
    margin-bottom: 1rem;
    color:rgb(0, 0, 0);
    text-align: center;
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
`;


const Label = Styled.label`
    font-weight: 500;
    color: black;
    margin-bottom: 0.23rem;
    padding-bottom: 0.23rem;
`;

const Input = Styled.input`
    width: 100%;
    padding: 0.2rem;
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

const StyledLink = Styled(Link)`
    text-decoration: none;
    color:rgb(0, 0, 0);
    text-align: center;
    font-size: 0.7rem;
    margin-top: 0.5rem;

    &:hover {
        color: #f79d60;
    }
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
    color: #4e342e;;
    text-align: center;
    padding: 0;
    font-size: 0.75rem;
    border-radius:12px;
`;

function ConfirmCell (){

    const[formData,setFormData ] = useState({
        numeroTelefono : ''
    });


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    

    const handelSubmit = () => {
        event.preventDefault();

        if (isNaN(formData.numeroTelefono)) {
           alert('Por favor solo ingrese un numero de telefono')
        }
    }

    return(
        <Wrapper>
             <Header className="header">
                <Logo src="src/img/Colmenares_del_eje_logo.png" alt="logo" className="logo" />
                <Title className="header-title">Colmenares del Eje</Title>
            </Header>

            <Main>
                <Container>
                    <FormTitle> Ingresar telefono  </FormTitle>
                        <Form  onSubmit={handelSubmit}>
                            <Label>Numero de telefono</Label>
                            <Input
                            type='tel'
                            minLength={5}
                            maxLength={10}
                            name='numeroTelefono'
                            required
                            onChange={handleChange}
                            placeholder='Ingrese su numero de telefono'
                            value={formData.numeroTelefono}
                            />

                            <Button type='submit'>Enviar</Button>
                        </Form>
                    
                </Container>
            </Main>
            <Footer>
                <h2>Colmenares del Eje</h2>
                <p>@2025 Todos los derechos reservados</p>
            </Footer>
        </Wrapper>
    )
};

export default ConfirmCell;