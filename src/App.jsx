import './App.css'
import Benefits from './components/Benefits'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import ReferralForm from './components/ReferralForm';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showReferralModal, setShowReferralModal] = useState(false);

  return (
    <div>
      <Navbar />
      <HeroSection onReferClick={() => setShowReferralModal(true)}/>
      <Benefits/>
      <FAQ/>
      <Footer/>
      
      {showLoginModal && <LoginForm onClose={() => setShowLoginModal(false)} />}
      {showReferralModal && <ReferralForm onClose={() => setShowReferralModal(false)} />}
    </div>
  )
}

export default App
