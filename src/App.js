
import './App.css';
import Login from './pages/Login';
import Mail from './pages/Mail';
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventsPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/mail" element={<Mail />} />
          <Route exact path="/landingPage" element={<LandingPage />} />
          <Route exact path="/eventsPage" element={<EventsPage />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
