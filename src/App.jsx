// App.jsx
import React, { useState } from 'react';
import Registro from './Registro';
import Alert from './Alert';

const App = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleRegister = ({ name, email, password }) => {
    // Add your registration logic here
    // For example, you can set a success message if registration is successful
    setAlertMessage(`Registration successful for ${name} with email ${email}!`);
  };

  return (
    <div>
      <Registro handleRegister={handleRegister} />
      <Alert message={alertMessage} />
    </div>
  );
};

export default App;
