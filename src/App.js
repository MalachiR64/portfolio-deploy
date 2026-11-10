import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageImageGate from './components/PageImageGate';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Skills from './pages/Skill';
import './styles/variables.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Navbar />
                <div className="content">
                    <PageContent />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

function PageContent() {
    const location = useLocation();
    return (
        <PageImageGate key={location.key}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </PageImageGate>
    );
}
