import React from 'react';
import Footer from '@/components/footerBar';
import NavBar from '@/components/navBar';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Atividades from '@/pages/atividadesExtra';
import Home from '@/pages/home';
import Projetos from '@/pages/projetos';
import Certificados from '@/pages/certificados';
import NotFoundPage from '@/pages/error404';

export default function Routers() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <React.Fragment>
              <Route path='/' element={<Home />} />
              <Route path='/atividades' element={<Atividades />} />
              <Route path='/projetos' element={<Projetos />} />
              <Route path='/certificados' element={<Certificados />} />
              <Route path='*' element={<NotFoundPage />} />
            </React.Fragment>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
