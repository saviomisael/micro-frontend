import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Home = lazy(() => import('../pages/Home'));

const AppRouter = () => (
  <Suspense fallback={<h1>Carregando...</h1>}>
    <BrowserRouter basename="react-lazy">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default AppRouter;
