import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to my React-Portfolio</h1>
        <p>something amazing! placeholder for now :p</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
