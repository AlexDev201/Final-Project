import { Link } from "react-router-dom";
import React, { useState } from "react";
import Styled from "styled-components";

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
    justify-content: center;
    position: relative;
    background-color: #f9d77e;
    padding: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 110px;
    border-radius: 0 0 12px 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1rem;
    }
`;

const Logo = Styled.img`
    height: 50px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 768px) {
        position: static;
        transform: none;
        margin-bottom: 10px;
    }
`;

const Title = Styled.h1`
    margin: 0;
    color: #4e342e;
    font-size: 2.3rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const Main = Styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 1rem;
    background-image: url("src/img/fondo(1).svg");
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`;

const LoginContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    border: 1px solid grey;

    @media (max-width: 480px) {
        padding: 1rem;
        max-width: 90%;
    }
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
    background-color: rgb(243, 243, 242);
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
    color: rgb(0, 0, 0);
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
    padding: 0.5rem;
    font-size: 0.75rem;
    border-radius: 12px 12px 0 0;
    height: 90px;
    @media (max-width: 768px) {
        font-size: 0.6rem;
        padding: 0.3rem;
    }
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("http://127.0.0.1:8000/users/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("accessToken", data.access_token);
                localStorage.setItem("refreshToken", data.refresh_token);
                localStorage.setItem("username", data.username);
                window.location.href = "/Dashboard";
            } else {
                setError(data || "Error al iniciar sesión");
            }
        } catch (err) {
            setError("Error de conexión. Por favor, intente nuevamente.");
            console.error("Error durante el inicio de sesión:", err);
        } finally {
            setIsLoading(false);
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
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <Input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <ErrorMessage>{error}</ErrorMessage>}

                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Cargando..." : "Iniciar Sesión"}
                        </Button>
                        <StyledLink to="/RecuperarContraseña">
                            ¿Olvidaste tu contraseña?
                        </StyledLink>
                    </FormLogin>
                </LoginContainer>
            </Main>

            <Footer>
                <h2>Colmenares del Eje</h2>
                <p>@2025 Todos los derechos reservados</p>
            </Footer>
        </Wrapper>
    );
};

export default Login;
