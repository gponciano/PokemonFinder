import { useEffect, useState } from 'react';
import axios from 'axios';

interface PokemonByMove {
    [moveName: string]: Pokemon[];
}

interface Pokemon {
    name: string;
    image: string;
}

interface Move {
    name: string;
    url: string
}

export const GetMovesProperties = () => {
  const [moves, setMoves] = useState<Move[]>([]);
  const [pokemonByMove, setPokemonByMove] = useState<PokemonByMove>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [activeMove, setActiveMove] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchMovesAndPokemons = async () => {
        try {
            setLoading(true);

            let allMoves: Move[] = [];
            let nextUrl: string | null = 'https://pokeapi.co/api/v2/move/';

        while (nextUrl) {
            const { data } = await axios.get(nextUrl);
            allMoves = [...allMoves, ...data.results];
            nextUrl = data.next;
        }

        setMoves(allMoves);

        const movePokemonMap: PokemonByMove = {};

        await Promise.all(
            allMoves.map(async (move) => {
                const { data } = await axios.get(move.url);

                const pokemons = data.learned_by_pokemon.map(
                    (poke: { name: string; url: string}) => ({
                        name:poke.name,
                        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split("/")[6]}.png`,
                    })
                );

                movePokemonMap[move.name] = pokemons;
            })
        );
        setPokemonByMove(movePokemonMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovesAndPokemons();
  }, []);

  const togglePokemonVisibility = (moveName: string) => {
    setActiveMove((prev) => (prev === moveName ? null : moveName));
  };

  return { moves, pokemonByMove, loading, activeMove, togglePokemonVisibility };
};
