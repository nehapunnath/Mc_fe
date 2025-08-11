import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import NewsLetter from "./pages/NewsLetter";
import OurPatroness from "./pages/OurPatroness";
import OurFoundress from "./pages/OurFoundress";
import History from "./pages/History";
import OurPrincipal from "./pages/OurPrincipal";
import OfficeDetails from "./pages/OfficeDetails";
import Facilities from "./pages/Facilities";
import AssessmentDetails from "./pages/AssessmentDetails";
import SchoolInfo from "./pages/SchoolInfo";
import MandotaryPubicDisclosure from "./pages/MandotaryPubicDisclosure";
import UpcomingEvents from "./pages/UpcomingEvents";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Admissions from "./pages/Admissions";
import StaffDetails from "./pages/StaffDetails";
import AuthPage from "./pages/AuthPage";
import ParentDashboard from "./pages/ParentDashboard";

function App() {
  const location = useLocation();

  // Pages without header/footer
  const noHeaderFooterRoutes = ["/login", "/parent-dashboard"];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/our-patroness" element={<OurPatroness />} />
        <Route path="/our-foundress" element={<OurFoundress />} />
        <Route path="/history" element={<History />} />
        <Route path="/our-principal" element={<OurPrincipal />} />
        <Route path="/staff-details" element={<StaffDetails />} />
        <Route path="/office-timings" element={<OfficeDetails />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/assessment-details" element={<AssessmentDetails />} />
        <Route path="/school-info" element={<SchoolInfo />} />
        <Route path="/mandatory-public-disclosure"element={<MandotaryPubicDisclosure />}/>
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
