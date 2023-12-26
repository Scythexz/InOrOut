// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// login & registration pages 
import Login from './pages/Login';
import Registration from './pages/Registration';

// intstructor pages
import InsHome from './pages/InsHome';
import InsAddClass from './pages/InsAddClass';
import InsManageClass from './pages/InsManageClass';
import InsProfile from './pages/InsProfile';

//student pages
import StdHome from './pages/StdHome';
import StdProfile from './pages/StdProfile';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/ins-home" element={<InsHome />} />
          <Route path="/ins-add-class" element={<InsAddClass/>} />
          <Route path="/ins-manage-class" element={<InsManageClass />} />
          <Route path="/ins-profile" element={<InsProfile />} />
          <Route path="/std-home" element={<StdHome />} />
          <Route path="/std-profile" element={<StdProfile />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;