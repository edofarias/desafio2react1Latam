// src/Registro.jsx
import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
  const [alert, setAlert] = useState({ success: false, message: '' });

  const handleRegister = ({ success, message }) => {
    setAlert({ success, message });
  };

  return (
    <div className="registro">
      <h1>Crea una cuenta</h1>
      <div className="circle-container">
        <SocialButton icon="linkedin" />
        <SocialButton icon="twitter" />
        <SocialButton icon="github" />
      </div>
      <p>O usa un email para registrarte</p>
      <Formulario handleRegister={handleRegister} />
      <Alert success={alert.success} message={alert.message} />
    </div>
  );
};

export default Registro;

// src/Registro.jsx
import React from 'react';
import SocialButton from './SocialButton';







