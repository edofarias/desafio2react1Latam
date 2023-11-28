// src/Alert.jsx
import React from 'react';

const Alert = ({ success, message }) => {
  return <div className={`alert ${success ? 'success' : 'danger'}`}>{message}</div>;
};

export default Alert;

