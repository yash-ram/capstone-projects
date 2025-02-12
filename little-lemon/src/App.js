import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Reservations from './components/Reservations';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reservations" element={<Reservations/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
