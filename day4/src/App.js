import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Heyy! 
        Welcome
      </h2>
      <LoginForm />
    </div>
  );
}

export default App;