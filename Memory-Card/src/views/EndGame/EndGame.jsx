import "./EndGame.css";
import Dialog from "../../components/Dialog/Dialog";
import Button from "../../components/Button/Button";
import { useCallback, useContext, useEffect, useState } from "react";
import { getPokemonGif } from "../../methods/fetchData";
import { GameContext } from "../../App";
import gameStates from "../../constants/gameStates";

const gifFilter = {
  win: "pikachu cute",
  lose: "pikachu laughing",
};

export default function EndGame() {
  const [isOpen, setIsOpen] = useState(true);
  const [gif, setGif] = useState(null);
  const { state, dispatch } = useContext(GameContext);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  const win = state.win;

  const fetchGif = useCallback(async () => {
    const url = await getPokemonGif(gifFilter[win ? "win" : "lose"]);
    if (url) {
      setGif(url);
    } else {
      console.log("URL invalid:", url);
    }
  });

  useEffect(() => {
    fetchGif();
  }, []);

  return (
    <>
      <Dialog isOpen={isOpen}>
        <h2>
          {win
            ? "You've won. Congratulations!"
            : "You've lost... Better luck next time!"}
        </h2>
        <h3>Your got a score of {state.score}</h3>
        <article className="image-container">
          {gif && <img src={gif} alt="Pikachu GIF" loading="lazy" />}
        </article>

        <div className="actions">
          <Button
            onClick={() => dispatch({ type: gameStates.starting })}
            text={"End game"}
            primary={false}
            expand={true}
          ></Button>
          <Button
            onClick={() => {
              handleIsOpen();
              setTimeout(() => {
                dispatch({ type: gameStates.playAgain });
              }, 300);
            }}
            text={"Play again"}
            expand={true}
          ></Button>
        </div>
      </Dialog>
    </>
  );
}
