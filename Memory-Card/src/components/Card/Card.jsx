import { useContext } from "react";
import "./Card.css";
import { PokemonsContext } from "../../views/Game/Game";
import pikachu from "../../assets/Pikachu image.png";

export default function Card({ name, image, shuffling, shuffle }) {
  const { selectPokemon } = useContext(PokemonsContext);
  return (
    <div
      className={shuffling ? "card shuffling" : "card"}
      onClick={() => {
        selectPokemon(name);
        shuffle();
      }}
    >
      <img
        className={shuffling ? "image hidden" : "image visible"}
        src={image}
        alt=""
      />
      <h3 className={shuffling ? "name hidden" : "name visible"}>
        {name ? name[0].toUpperCase() + name.slice(1) : ""}
      </h3>
      <img
        className={
          shuffling ? "shuffling-image visible" : "shuffling-image hidden"
        }
        src={pikachu}
        alt="Shuffling"
      ></img>
    </div>
  );
}
