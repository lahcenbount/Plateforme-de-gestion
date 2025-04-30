import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import ItemsList from "./pages/ItemsList";
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import Footer from "./components/Footer";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifier l'état de connexion au chargement de la page
    const userData = localStorage.getItem("user");
    if (userData) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        
        {/* التأكد من حالة التسجيل قبل التوجيه إلى هذه الصفحات */}
        <Route 
          path="/add-item" 
          element={isAuthenticated ? <AddItem /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        
        <Route 
          path="/items" 
          element={isAuthenticated ? <ItemsList /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
