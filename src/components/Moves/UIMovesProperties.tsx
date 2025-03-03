import { useRef } from "react";
import { GetMovesProperties } from "./GetMovesProperties";
import styles from "./styles.module.css";

export function UIMovesProperties() {
  const { moves, pokemonByMove, loading, activeMove, togglePokemonVisibility } = GetMovesProperties();
  const movesCarouselRef = useRef<HTMLDivElement>(null);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pokémons with Common Moves</h2>

      
      <div className={styles.movesCarousel} ref={movesCarouselRef}>
        {moves.map((move) => (
          <button
            key={move.url}
            className={styles.moveButton}
            onClick={() => togglePokemonVisibility(move.name)}
          >
            {move.name}
          </button>
        ))}
      </div>

      
      {activeMove && pokemonByMove.allPokemons.length > 0 && (
        <div className={styles.pokemonCarousel}>
          {pokemonByMove.allPokemons.map((pokemon, index) => (
            <div key={index} className={styles.pokemonCard}>
              <img src={pokemon.image} alt={pokemon.name} />
              <h5>{pokemon.name}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
