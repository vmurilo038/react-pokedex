import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();

  return (
    <article className="pokemon-card">
      <div className="pokemon-info">
        <span className="numero">
          #{String(pokemon.id).padStart(3, "0")}
        </span>

        <h2>{pokemon.name}</h2>

        <p>Tipo: {pokemon.type}</p>

        <p>Altura: {pokemon.height} m</p>

        <button onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
          Know More
        </button>
      </div>

      <img
        className="pokemon-image"
        src={pokemon.img}
        alt={pokemon.name}
      />
    </article>
  );
}

export default PokemonCard;