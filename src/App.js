import React from 'react';
import HomePage from './screens/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './pages/list';
import ContactUs from './components/contactus';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage/>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
