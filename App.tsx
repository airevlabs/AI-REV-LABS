import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { GetStarted } from './pages/GetStarted';
import { ServicesPage } from './pages/ServicesPage';
import { SmartWebsites } from './pages/SmartWebsites';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/smart-websites" element={<SmartWebsites />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;