
import './App.css';
import Login from './pages/Login';
import Mail from './pages/Mail';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/mail" element={<Mail />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
