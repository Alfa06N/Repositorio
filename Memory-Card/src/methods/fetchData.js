import { getRandomPokemon } from "./arrays";
import pokemons from "../constants/pokemons";

const pokemonCache = {};

async function fetchData(pokemon) {
  try {
    if (pokemonCache[pokemon]) {
      return pokemonCache[pokemon];
    }

    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(URL);
    const data = await response.json();

    const pokemonData = {
      name: data.name,
      image: data.sprites.front_default,
    };
    pokemonCache[pokemon] = pokemonData;
    return pokemonData;
  } catch (err) {
    console.error(pokemon, err);
  }
}

export default async function getPokemonData(number) {
  const pokemonsList = getPokemonList(number);

  const pokemonDataPromises = pokemonsList.map(async (pokemon) => {
    const fetchedData = await fetchData(pokemon);
    const response = await fetch(fetchedData.image);
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    return { name: fetchedData.name, image: imageUrl };
  });

  const pokemonDataArray = await Promise.all(pokemonDataPromises);

  const pokemonData = pokemonDataArray.reduce(
    (accumulator, { name, image }) => {
      accumulator[name] = { name, image };
      return accumulator;
    },
    {}
  );
  return pokemonData;
}

function getPokemonList(number) {
  let pokemonsCopy = [...pokemons];
  const pokemonsSelected = [];

  for (let i = 0; i < number; i++) {
    const pokemon = getRandomPokemon(pokemonsCopy);
    pokemonsCopy = pokemonsCopy.filter((element) => element !== pokemon);
    pokemonsSelected.push(pokemon);
  }
  return pokemonsSelected;
}

export async function getPokemonGif(filter) {
  const API = "V6e3UVOWdz5R3H7jXMvwQOjjaOQMpzDJ";
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${filter}&limit=1`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.data[0].images.original.url;
}
