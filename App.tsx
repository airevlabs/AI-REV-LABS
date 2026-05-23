import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { GetStarted } from './pages/GetStarted';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { SmartWebsites } from './pages/SmartWebsites';
import { BookingCalendar } from './pages/BookingCalendar';
import { CRMPage } from './pages/CRMPage';
import { AIPhoneReceptionist } from './pages/AIPhoneReceptionist';
import { AIChatbot } from './pages/AIChatbot';
import { ReputationManagement } from './pages/ReputationManagement';
import { LocalSEO } from './pages/LocalSEO';
import { LeadReactivation } from './pages/LeadReactivation';
import { EmailSMS } from './pages/EmailSMS';
import { SocialMedia } from './pages/SocialMedia';
import { Invoicing } from './pages/Invoicing';
import { Documents } from './pages/Documents';
import { MissedCallTextBack } from './pages/MissedCallTextBack';
import { WorkflowAutomations } from './pages/WorkflowAutomations';
import { CustomAutomations } from './pages/CustomAutomations';
import { FAQ } from './pages/FAQ';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/smart-websites" element={<SmartWebsites />} />
          <Route path="services/booking-calendar" element={<BookingCalendar />} />
          <Route path="services/crm" element={<CRMPage />} />
          <Route path="services/ai-phone-receptionist" element={<AIPhoneReceptionist />} />
          <Route path="services/ai-chatbot" element={<AIChatbot />} />
          <Route path="services/reputation-management" element={<ReputationManagement />} />
          <Route path="services/local-seo" element={<LocalSEO />} />
          <Route path="services/lead-reactivation" element={<LeadReactivation />} />
          <Route path="services/email-sms" element={<EmailSMS />} />
          <Route path="services/social-media" element={<SocialMedia />} />
          <Route path="services/invoicing" element={<Invoicing />} />
          <Route path="services/documents" element={<Documents />} />
          <Route path="services/missed-call" element={<MissedCallTextBack />} />
          <Route path="services/workflow" element={<WorkflowAutomations />} />
          <Route path="services/custom" element={<CustomAutomations />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;