import { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import pokedex from "../../assets/pokedex.png";
import "./style.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  async function buscarPokemons() {
    const resposta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );

    const dados = await resposta.json();

    const todosOsPokemons = [];

    for (const pokemon of dados.results) {
      const respostaPokemon = await fetch(pokemon.url);
      const pokemonTeste = await respostaPokemon.json();

      const pokemonItem = {
        id: pokemonTeste.id,
        name:
          pokemonTeste.name.charAt(0).toUpperCase() +
          pokemonTeste.name.slice(1),
        img: pokemonTeste.sprites.other["official-artwork"].front_default,
        type: pokemonTeste.types[0].type.name,
        height: pokemonTeste.height / 10
      };

      todosOsPokemons.push(pokemonItem);
    }

    setPokemons(todosOsPokemons);
  }

  useEffect(() => {
    buscarPokemons();
  }, []);

  return (
    <main>
      <header>
        <img
          className="pokedex-logo"
          src={pokedex}
          alt="Pokédex"
        />

        <p>Encontre informações sobre seus Pokémon favoritos!</p>
      </header>

      <section className="pokemon-container">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;