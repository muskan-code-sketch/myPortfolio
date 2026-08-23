import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import ExperienceTimeline from './components/sections/ExperienceTimeline.jsx';
import Projects from './components/sections/Projects.jsx';
import Skills from './components/sections/Skills.jsx';
import Education from './components/sections/Education.jsx';
import Certifications from './components/sections/Certifications.jsx';
import AskSection from './components/sections/AskSection.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [pendingQuery, setPendingQuery] = useState(null);

  function openChatWithQuery(query) {
    setChatOpen(true);
    setPendingQuery({ text: query, ts: Date.now() });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenChat={() => setChatOpen(true)} />

      <main className="flex-1">
        <Hero onOpenChat={() => setChatOpen(true)} />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <AskSection onAsk={openChatWithQuery} />
        <Contact />
      </main>

      <Footer />

      <Chatbot
        isOpen={chatOpen}
        onOpen={() => setChatOpen(true)}
        onClose={() => setChatOpen(false)}
        pendingQuery={pendingQuery}
      />
    </div>
  );
}
