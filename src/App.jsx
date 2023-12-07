import React, { useState } from 'react';
import Registro from './Registro';
import Alert from './Alert';

const App = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleRegister = ({ success, message }) => {
    setAlertMessage({ success, message });
  };

  return (
    <div className="container">
      <Registro handleRegister={handleRegister} />
      <Alert success={alertMessage.success} message={alertMessage.message} />
    </div>
  );
};

export default App;
