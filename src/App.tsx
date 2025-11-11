import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ChairmanMessage from './pages/ChairmanMessage';
import PrincipalMessage from './pages/PrincipalMessage';
import Infrastructure from './pages/Infrastructure';
import Academics from './pages/Academics';
import Students from './pages/Students';
import SchoolRules from './pages/SchoolRules';
import AcademicCalendar from './pages/AcademicCalendar';
import Administration from './pages/Administration';
import Hostel from './pages/Hostel';
import HostelRules from './pages/HostelRules';
import HostelAdmission from './pages/HostelAdmission';
import Results from './pages/Results';
import Activities from './pages/Activities';
import PhysicalActivities from './pages/PhysicalActivities';
// import CreativeActivities from './pages/CreativeActivities';
import MPD from './pages/MPD';
import DocumentInformation from './pages/documentInformation';
import ResultAcademics from './pages/resultAcademics';
import StaffTeaching from './pages/staffTeaching';
import SchoolInfrastructure from './pages/schoolInfrastructure';  
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/chairman-message" element={<ChairmanMessage />} />
            <Route path="/about/principal-message" element={<PrincipalMessage />} />
            <Route path="/about/infrastructure" element={<Infrastructure />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/students" element={<Students />} />
            <Route path="/academics/school-rules" element={<SchoolRules />} />
            <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/hostel/rules" element={<HostelRules />} />
            <Route path="/hostel/admission" element={<HostelAdmission />} />
            <Route path="/results" element={<Results />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/physical" element={<PhysicalActivities />} />
            {/* <Route path="/activities/creative" element={<CreativeActivities />} /> */}
            <Route path="/mpd" element={<MPD />} />
            <Route path="/documentInformation" element={<DocumentInformation />} />
            <Route path="/resultAcademics" element={<ResultAcademics />} />
            <Route path="/staffTeaching" element={<StaffTeaching />} />
            <Route path="/schoolInfrastructure" element={<SchoolInfrastructure />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;