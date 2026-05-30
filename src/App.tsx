import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import ServicesPage from "@/pages/ServicesPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import WhyUsPage from "@/pages/WhyUsPage";
import DemosPage from "@/pages/DemosPage";
import OurTeamPage from "@/pages/OurTeamPage";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/demos" element={<DemosPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

