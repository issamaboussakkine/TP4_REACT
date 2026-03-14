import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import PublicationPage from './pages/PublicationPage';

function App() {
  const [publications] = useState([
    { 
      id: 1, 
      titre: 'Premier article', 
      extrait: 'Résumé du premier article',
      contenu: 'Contenu complet du premier article.',
      auteur: 'Issam',
      date: '2024-03-14'
    },
    { 
      id: 2, 
      titre: 'Deuxième article', 
      extrait: 'Résumé du deuxième article',
      contenu: 'Contenu complet du deuxième article.',
      auteur: 'Issam',
      date: '2024-03-15'
    }
  ]);

  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Accueil</Link>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home publications={publications} />} />
          <Route path="/publication/:id" element={<PublicationPage publications={publications} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;