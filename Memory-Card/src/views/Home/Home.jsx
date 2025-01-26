import "./Home.css";
import { useContext, useState } from "react";
import Dialog from "../../components/Dialog/Dialog";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { GameContext } from "../../App";
import gameStates from "../../constants/gameStates";
import difficulties from "../../constants/difficulties";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [checked, setChecked] = useState(null);
  const { dispatch } = useContext(GameContext);

  const checkboxes = Object.entries(difficulties);

  function handleOnChange(value) {
    console.log(value, checked);
    checked === value ? setChecked(null) : setChecked(value);
  }

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Dialog isOpen={isOpen}>
        <h2>Welcome to Memory Card game!</h2>
        <ul>
          {checkboxes.map(([key, { value, length }]) => (
            <li key={key}>
              <Input
                type={"checkbox"}
                label={value}
                value={checked === length}
                onChange={() => handleOnChange(length)}
              />
            </li>
          ))}
        </ul>
        <div className="button-container">
          <Button
            text={checked ? "Start game" : "Select difficulty level"}
            onClick={() => {
              toggleDialog();
              setTimeout(() => {
                dispatch({ type: gameStates.playing, difficult: checked });
              }, 300);
            }}
            disabled={!checked}
            expand={true}
          ></Button>
        </div>
      </Dialog>
    </>
  );
}
