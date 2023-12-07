import React, { useState } from 'react';

const Formulario = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic...

    // Handle registration logic...
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label>
        Nombre:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Correo:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Confirmar Contraseña:
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};

export default Formulario;
