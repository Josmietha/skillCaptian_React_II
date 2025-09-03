import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Yoo! Welcome back
      </h1>
      <LoginForm />
    </div>
  );
}

export default App;