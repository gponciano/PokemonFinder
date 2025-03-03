import { useEffect, useState } from 'react';
import axios from 'axios';

interface PokemonByMove {
    allPokemons: Pokemon[];

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
  const [, setPokemonList] = useState<Move[]>([]);
  const [pokemonByMove, setPokemonByMove] = useState<PokemonByMove>({allPokemons: []});
  const [loading, setLoading] = useState<boolean>(true);
  const [activeMove, setActiveMove] = useState<string | null>(null);

  useEffect(() => {
    
    axios.get('https://pokeapi.co/api/v2/move/')
      .then((response) => {
        setMoves(response.data.results);

        
        axios.get('https://pokeapi.co/api/v2/pokemon/')
          .then((pokeResponse) => {
            setPokemonList(pokeResponse.data.results); 

            
            const pokemonPromises = pokeResponse.data.results.map((poke: { url: string; }) =>
              axios.get(poke.url)
            );

            Promise.all(pokemonPromises)
              .then((pokemonResponses) => {
                
                const pokemonData = pokemonResponses.map((response) => ({
                  name: response.data.name,
                  image: response.data.sprites.front_default,
                }));

                
                setPokemonByMove({ allPokemons: pokemonData });
              });
          });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


const togglePokemonVisibility = (moveName: string) => {
    setActiveMove((prev) => (prev === moveName ? null : moveName));
  };

  return {moves, pokemonByMove, loading, activeMove, togglePokemonVisibility};
  
};

