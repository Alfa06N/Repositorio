import "./Button.css";

export default function Button({
  text,
  onClick,
  disabled,
  primary = true,
  expand = false,
}) {
  return (
    <button
      className={
        primary
          ? `button primary ${expand && "expand"}`
          : `button secondary ${expand && "expand"}`
      }
      onClick={onClick}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
}
