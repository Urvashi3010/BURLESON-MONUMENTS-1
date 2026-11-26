import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import PageTransition from './components/PageTransition.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Memorials from './pages/Memorials.jsx';
import Ordering from './pages/Ordering.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Routing notes
 *  - <Routes> always renders the CURRENT location straight away. Nothing waits for an
 *    exit animation, so a page can never fail to appear after a navigation.
 *  - The page "transition" is a plain CSS fade-in on <main> (see .page-enter in global.css).
 *    Memorial category pages share one key so moving between categories doesn't re-fade.
 */
export default function App() {
  const location = useLocation();
  const key = location.pathname.startsWith('/memorials') ? '/memorials' : location.pathname;

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <PageTransition key={key}>
        <ErrorBoundary resetKey={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/memorials" element={<Memorials />} />
            <Route path="/memorials/:slug" element={<Memorials />} />
            <Route path="/ordering" element={<Ordering />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ErrorBoundary>
      </PageTransition>
      <Footer />
    </>
  );
}
