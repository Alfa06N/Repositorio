import "./CardsContainer.css";
import { useEffect, useReducer, useCallback, useContext } from "react";
import Card from "../Card/Card";
import getPokemonData from "../../methods/fetchData";
import fetchStates from "../../constants/actions";
import { shuffleArray } from "../../methods/arrays";
import { PokemonsContext } from "../../views/Game/Game";
import pikachu from "../../assets/Pikachu image.png";

const initialState = {
  shuffling: false,
  loading: false,
  error: null,
  data: {},
};

function pokemonReducer(state, action) {
  switch (action.type) {
    case fetchStates.loading:
      return { ...state, loading: true, error: null };
    case fetchStates.success:
      return {
        ...state,
        shuffling: false,
        loading: false,
        data: action.payload,
      };
    case fetchStates.error:
      return { ...state, loading: false, error: action.payload };
    case fetchStates.updating:
      return { ...state, shuffling: true };
    default:
      return state;
  }
}

export default function CardsContainer({ cards }) {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  const { pokemons, setPokemons } = useContext(PokemonsContext);

  const randomizeCards = useCallback(() => {
    dispatch({ type: fetchStates.updating });
    const shuffledData = shuffleArray(Object.entries(state.data));
    setTimeout(() => {
      setPokemons(shuffledData);
      dispatch({ type: fetchStates.success, payload: state.data });
      console.log(shuffledData);
    }, 1000);
  });

  const fetchPokemons = useCallback(async () => {
    dispatch({ type: fetchStates.loading });

    try {
      const data = await getPokemonData(cards);
      setTimeout(() => {
        dispatch({ type: fetchStates.success, payload: data });

        const shuffledData = shuffleArray(Object.entries(data));
        setPokemons(shuffledData);
      }, 1000);
    } catch (err) {
      dispatch({ type: fetchStates.error, payload: err.message });
    }
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const { loading, error } = state;

  return (
    <>
      <section className="cards-container">
        {loading && (
          <article className="loading">
            <img className="loading-image" src={pikachu} alt="Pikachu image" />
          </article>
        )}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          pokemons.map(([name, { image }], index) => {
            return (
              <Card
                key={index}
                name={name}
                image={image}
                shuffling={state.shuffling}
                shuffle={randomizeCards}
              />
            );
          })}
      </section>
    </>
  );
}
