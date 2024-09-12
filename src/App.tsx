import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Home } from './views/Home';
import { About } from './views/About';
import { NotFound } from './views/NotFound';
import { Header } from './components/Header';
import { Skills } from './views/Skills';
import { Hobbies } from './views/Hobbies';
import { Qualification } from './views/Qualification';
import { Work } from './views/Work';
import { Contact } from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
}

export default App;
