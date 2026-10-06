import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

function PokemonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function buscarPokemon() {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      const dados = await resposta.json();

      setPokemon(dados);
    }

    buscarPokemon();
  }, [id]);

  if (!pokemon) {
    return (
      <main className="loading">
        <div className="loading-ball"></div>
        <p>Carregando Pokémon...</p>
      </main>
    );
  }

  return (
    <main className="details-page">
      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>
      <div className="background-circle circle-three"></div>

      <section className="details-card">
        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Voltar
        </button>

        <div className="pokemon-number">
          #{String(pokemon.id).padStart(3, "0")}
        </div>

        <div className="pokemon-details-content">
          <div className="pokemon-details-info">
            <span className="pokemon-label">
              Pokémon
            </span>

            <h1>{pokemon.name}</h1>

            <div className="pokemon-type">
              {pokemon.types[0].type.name}
            </div>

            <p className="description">
              Conheça mais detalhes sobre este Pokémon.
            </p>

            <div className="stats">
              <div className="stat">
                <span>Altura</span>
                <strong>{pokemon.height / 10} m</strong>
              </div>

              <div className="stat">
                <span>Peso</span>
                <strong>{pokemon.weight / 10} kg</strong>
              </div>
            </div>
          </div>

          <div className="pokemon-details-image">
            <div className="image-circle"></div>

            <img
              src={
                pokemon.sprites.other["official-artwork"]
                  .front_default
              }
              alt={pokemon.name}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default PokemonDetails;

