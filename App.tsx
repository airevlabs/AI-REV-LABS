import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { GetStarted } from './pages/GetStarted';
import { ServicesPage } from './pages/ServicesPage';
import { SmartWebsites } from './pages/SmartWebsites';
import { BookingCalendar } from './pages/BookingCalendar';
import { CRMPage } from './pages/CRMPage';
import { AIPhoneReceptionist } from './pages/AIPhoneReceptionist';
import { AIChatbot } from './pages/AIChatbot';
import { ReputationManagement } from './pages/ReputationManagement';
import { LocalSEO } from './pages/LocalSEO';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/smart-websites" element={<SmartWebsites />} />
          <Route path="services/booking-calendar" element={<BookingCalendar />} />
          <Route path="services/crm" element={<CRMPage />} />
          <Route path="services/ai-phone-receptionist" element={<AIPhoneReceptionist />} />
          <Route path="services/ai-chatbot" element={<AIChatbot />} />
          <Route path="services/reputation-management" element={<ReputationManagement />} />
          <Route path="services/local-seo" element={<LocalSEO />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;