import "./Button.css";

export default function Button({
  children,
  handleClick,
  primary = true,
  toRemove = false,
}) {
  return (
    <button
      className={
        toRemove
          ? "button remove"
          : primary
          ? "button primary"
          : "button secondary"
      }
      onClick={(event) => {
        event.preventDefault();
        handleClick();
      }}
    >
      {children}
    </button>
  );
}
