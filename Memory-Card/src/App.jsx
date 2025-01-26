import { createContext, useReducer } from "react";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Game from "./views/Game/Game";
import EndGame from "./views/EndGame/EndGame";
import gameStates from "./constants/gameStates";

const initialState = {
  difficult: null,
  playing: false,
  win: null,
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case gameStates.starting:
      return initialState;
    case gameStates.playing:
      return {
        ...state,
        difficult: action.difficult,
        playing: true,
        win: null,
        score: 0,
      };
    case gameStates.finalized:
      return {
        ...state,
        playing: false,
        win: action.result,
        score: action.score,
      };
    case gameStates.playAgain:
      return {
        ...state,
        playing: true,
        win: null,
        score: 0,
      };
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

const components = {
  home: Home,
  game: Game,
  endGame: EndGame,
};

export const GameContext = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  let ActualView = null;

  if (!state.difficult) {
    ActualView = components.home;
  } else if (state.playing && state.win === null) {
    ActualView = components.game;
  } else if (state.win !== null) {
    ActualView = components.endGame;
  }

  return (
    <>
      <Header text={"Memory Card"}></Header>
      <GameContext.Provider value={{ state, dispatch }}>
        <ActualView />
      </GameContext.Provider>
    </>
  );
}

export default App;
