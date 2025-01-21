import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Works from './components/Works';
import ContactPage from './components/ContactPage';  // Import the ContactPage
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
    useEffect(() => {
        // Apply dark theme directly on page load
        document.documentElement.classList.add('dark'); // Force dark mode
    }, []);

    return (
        <>
            {/* Set Background to Dark Mode */}
            <div className="dark:bg-slate-900 bg-white">
                <div className="max-w-5xl mx-auto w-11/12">
                    {/* Navbar */}
                    <Navbar />
                    {/* Hero Section */}
                    <HeroSection />
                    {/* Services Section */}
                    <Services />
                    {/* Works Section */}
                    <Works />
                    {/* Contact Section */}
                    <ContactPage />
                </div>
            </div>
        </>
    );
}

export default App;
