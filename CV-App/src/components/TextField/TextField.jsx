import "./TextField.css";
import ButtonOption from "../ButtonOption/ButtonOption";
import { useState } from "react";

export default function TextField({
  label,
  type = "text",
  endDate = false,
  id,
  handleOnChange,
  onKeyPress,
  value,
}) {
  const [fieldType, setFieldType] = useState(type);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="div-field">
      <input
        type={fieldType}
        // disabled={!isActive}
        className="text-field"
        placeholder=""
        value={value}
        id={id}
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
        onKeyDown={onKeyPress}
      />
      <label htmlFor={id}>{label}</label>
      {endDate && (
        <ButtonOption
          handleClick={() => {
            if (fieldType === "date") {
              setIsActive(!isActive);
              setFieldType("text");
              handleOnChange("Present");
            } else {
              setIsActive(!isActive);
              setFieldType("date");
              handleOnChange("");
            }
          }}
        >
          {fieldType === "text" ? "Date" : "Present"}
        </ButtonOption>
      )}
    </div>
  );
}
