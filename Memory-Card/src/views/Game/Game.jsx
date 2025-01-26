import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Score from "../../components/Score/Score";
import { createContext, useContext, useEffect, useState } from "react";
import { GameContext } from "../../App";
import gameStates from "../../constants/gameStates";

export const PokemonsContext = createContext([]);

export default function Game() {
  const { state, dispatch } = useContext(GameContext);
  const [alreadySelected, setAlreadySelected] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (alreadySelected.length == pokemons.length && pokemons.length > 0) {
      dispatch({
        type: gameStates.finalized,
        result: true,
        score: pokemons.length,
      });
    }
  }, [alreadySelected, pokemons, dispatch]);

  function selectPokemon(pokemon) {
    if (!alreadySelected.includes(pokemon)) {
      setAlreadySelected([...alreadySelected, pokemon]);
    } else {
      dispatch({
        type: gameStates.finalized,
        result: false,
        score: alreadySelected.length,
      });
    }
  }

  const score = alreadySelected.length;

  return (
    <>
      <Score score={score}></Score>
      <PokemonsContext.Provider
        value={{ pokemons, setPokemons, selectPokemon }}
      >
        <CardsContainer cards={state.difficult}></CardsContainer>
      </PokemonsContext.Provider>
    </>
  );
}
