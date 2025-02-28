import React from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavigationMenu from './components/layout/NavigationMenu';

function App() {
  return (
    <div style={{ display: 'flex' }}>
    <NavigationMenu />
    <div style={{ flex: 1 }}>
      <Header />
      <div style={{ padding: '20px' }}>Contenu principal de l'application</div>
    </div>
  </div>
  );
}

export default App;