import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      // Charger les éléments depuis localStorage
      const storedItems = JSON.parse(localStorage.getItem("items")) || [];
      setItems(storedItems);
    } catch (error) {
      console.error("Erreur lors du chargement des éléments :", error);
      setItems([]);
    }
  }, []);

  const handleRemoveItem = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      const updatedItems = items.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      setItems(updatedItems);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6">Liste des éléments</h2>
        {items.length === 0 ? (
          <p className="text-gray-500">Aucun élément trouvé. Ajoutez-en un !</p>
        ) : (
          <div className="flex flex-wrap gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-none w-64 p-4 border border-gray-300 rounded-md shadow-md"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title || "Image de l’élément"}
                    className="w-full h-40 object-cover rounded-md mb-4"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                    <span className="text-gray-500">Pas d’image</span>
                  </div>
                )}
                <h3 className="text-xl font-semibold">
                  {item.title || "Titre inconnu"}
                </h3>
                {item.description ? (
                  <p className="text-gray-600">{item.description}</p>
                ) : (
                  <p className="text-gray-400">Pas de description</p>
                )}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 mt-2 hover:underline"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
