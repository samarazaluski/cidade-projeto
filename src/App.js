import React from 'react';
import BinList from './components/BinList';
import RouteMap from './components/RouteMap';
import MetricsDashboard from './components/MetricsDashboard';
import './styles.css'; // Certifique-se de que este arquivo está no local correto

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">Dashboard de Coleta de Lixo</h1>
      </header>
      <main>
        <section className="bin-list">
          <h2>Lista de Lixeiras</h2>
          <BinList />
        </section>
        <section className="route-map">
          <h2>Mapa das Rotas</h2>
          <RouteMap />
        </section>
        <section className="metrics-dashboard">
          <h2>Métricas</h2>
          <MetricsDashboard />
        </section>
      </main>
    </div>
  );
}

export default App;
