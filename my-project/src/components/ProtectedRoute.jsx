// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Vérifier si l'utilisateur est connecté
  const isAuthenticated = localStorage.getItem("user") !== null;
  
  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  // Sinon, afficher le contenu protégé via Outlet
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
