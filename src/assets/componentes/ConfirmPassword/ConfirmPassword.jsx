import Styled from 'styled-components';
import React, {useState} from 'react'
import { Eye, EyeOff } from 'lucide-react';




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


const Footer = Styled.footer`
    background-color: #f9d77e;
    color: #4e342e;
    text-align: center;
    padding: 0.rem;
    font-size: 0.75rem;
    border-radius:12px;
`;
//Estilos para el ojito de contraseña
const PasswordInputWrapper = Styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = Styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-right: 2.5rem;
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

const VisibilityToggle = Styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #4e342e;
`;

function ConfirmPassword(){

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

    return(
        <Wrapper>
        <Header>
          <Logo src="src/img/Colmenares_del_eje_logo.png" alt="Logo" />
          <Title>Colmenares del Eje</Title>
        </Header>
        
        <Main>
          <FormContainer>
            <Form>
              <FormTitle>Nueva Contraseña</FormTitle>
              
              <Label>Nueva Contraseña</Label>
              <PasswordInputWrapper>
                <PasswordInput
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  placeholder='Ingrese la nueva contraseña'
                />
                <VisibilityToggle 
                  type="button" 
                  onClick={toggleNewPasswordVisibility}
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </VisibilityToggle>
              </PasswordInputWrapper>
  
              <Label>Confirmar Contraseña</Label>
              <PasswordInputWrapper>
                <PasswordInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder='Ingrese la nueva contraseña'
                />
                <VisibilityToggle 
                  type="button" 
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </VisibilityToggle>
              </PasswordInputWrapper>
              
              <Button>Guardar</Button>
            </Form>
          </FormContainer>
        </Main>
  
        <Footer>
          <h2>Colmenares del Eje</h2>
          <p>@2025 Todos los derechos reservados</p>
        </Footer>
      </Wrapper>
    )
}


export default ConfirmPassword;