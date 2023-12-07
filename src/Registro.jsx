// Registro.jsx
import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';

const Registro = () => {
  return (
    <div className="registro">
      <div className="circle-container">
        <SocialButton icon="linkedin" />
        <SocialButton icon="twitter" />
        <SocialButton icon="github" />
      </div>
      <h1>Crea una cuenta</h1>
      <p>O usa un email para registrarte</p>
      <Formulario />
    </div>
  );
};

export default Registro;




