import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Styled from "styled-components";

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

const Main = Styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 1rem;
    background-image :url("src/img/fondo(1).svg");
`;

const LoginContainer = Styled.div`
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



const Input = Styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color:rgb(243, 243, 242);
    color: #4e342e;
    font-size: 0.9rem;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`;

const Button = Styled.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
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

const ErrorMessage = Styled.p`
    color: red;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    text-align: center;
`;

const Footer = Styled.footer`
    background-color: #f9d77e;
    color: #4e342e;
    text-align: center;
    padding: 0.rem;
    font-size: 0.75rem;
    border-radius:12px;
`;


const LoginForm = () => {
    const [identificacion, setIdentificacion] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("userData"));

        if (storedUser) {
            if (
                storedUser.identificacion === identificacion &&
                storedUser.password === password
            ) {
                setError("");
                alert("Inicio de sesión exitoso");
                navigate("/Dashboard");
            } else {
                setError("Identificación o contraseña incorrectos");
            }
        } else {
            setError("No se encuentran datos de registro");
        }
    };

    return (
        <Wrapper>
            <Header>
                <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
                <Title>Colmenares del Eje</Title>
            </Header>

            <Main>
                <LoginContainer>
                    <FormLogin onSubmit={handleLogin}>
                        
                        
                      
                        <Input
                            type="text"
                            id="usuario"
                            name="Usuario"
                            placeholder="Usuario"
                            value={identificacion}
                            onChange={(e) => setIdentificacion(e.target.value)}
                        />

                        
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <ErrorMessage>{error}</ErrorMessage>}

                        <Button type="submit">Iniciar Sesión</Button>
                        <StyledLink to="/RecuperarContraseña">¿Olvidaste tu contraseña?</StyledLink>
                    </FormLogin>
                </LoginContainer>
            </Main>

            <Footer>
                <h2> Colmenares del Eje</h2>
                <p> @2025 Todos los derechos reservados</p>
            </Footer>
        </Wrapper>
    );
};

export default LoginForm;