import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
<header className="bg-yellow-600 text-gray-800 p-4">
<div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Plateforme de Recettes</h1>
        <nav>
          <Link to="/" className="px-4">Accueil</Link>
          <Link to="/items" className="px-4">Voir les recettes</Link>
          <Link to="/add-item" className="px-4">Ajouter une recette</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
