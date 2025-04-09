import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Users from './users/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>     
      </main>
    </Router>
  );
}
 










// from manifest.json
//"src": "logo192.png",
//"type": "image/png",
//"sizes": "192x192"

//from manifest.json
//"src": "logo512.png",
//"type": "image/png",
//"sizes": "512x512"

export default App;