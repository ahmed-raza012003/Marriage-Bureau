import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import RegistrationForm from "./components/registrationform";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
