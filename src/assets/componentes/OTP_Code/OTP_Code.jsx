import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9d77e;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Logo = styled.img`
  height: 50px;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.h1`
  margin: 0;
  color: #4e342e;
  font-size: 1.8rem;
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const OTPContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const StyledOtpInput = styled.input`
  width: 50px;
  height: 50px;
  margin: 0 5px;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #4e342e;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f9d77e;
    box-shadow: 0 0 10px rgba(249, 215, 126, 0.5);
  }
`;

const VerifyButton = styled.button`
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #f9d77e;
  color: #4e342e;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffc107;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const Footer = styled.footer`
  background-color: #f9d77e;
  color: #4e342e;
  text-align: center;
  padding: 0.75rem;
  font-size: 0.75rem;
`;

function OTPCode() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerify = useCallback(() => {
    if (otp.length !== 5) {
      setError('Por favor, ingrese el código completo');
      return;
    }

    setError('');
    console.log('Verificando código:', otp);
    // Añade tu lógica de verificación aquí
  }, [otp]);

  return (
    <Wrapper>
      <Header>
        <Logo 
          src="src/img/Colmenares_del_eje_logo.png" 
          alt="Colmenares del Eje Logo" 
        />
        <Title>Colmenares del Eje</Title>
      </Header>

      <Main>
        <FormContainer>
          <Title>Confirmar Código</Title>
          
          <OTPContainer>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span style={{ margin: '0 5px' }}>-</span>}
              renderInput={(props) => <StyledOtpInput {...props} />}
              shouldAutoFocus
            />
          </OTPContainer>

          {error && (
            <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>
          )}

          <VerifyButton 
            onClick={handleVerify}
            disabled={otp.length !== 6}
          >
            Verificar Código
          </VerifyButton>
        </FormContainer>
      </Main>

      <Footer>
      <h2>Colmenares del Eje</h2>
      <p>@2025 Todos los derechos reservados</p>
      </Footer>
    </Wrapper>
  );
}

export default OTPCode;