import React from 'react';

const Alert = ({ success, message }) => {
  const alertClass = success ? 'alert-success' : 'alert-danger';
  return <div className={`alert ${alertClass}`}>{message}</div>;
};

export default Alert;
