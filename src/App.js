import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Search from "./Components/Search";

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        const data = await response.json();

        const pokemonData = [];
        for (const pokemon of data.results) {
          const res = await fetch(pokemon.url);
          const pokemonDetails = await res.json();

          pokemonData.push(pokemonDetails);
        }

        setCards(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
  }, []);

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Pokemon List</h1>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Card cards={filteredCards} />
    </div>
  );
}

export default App;
