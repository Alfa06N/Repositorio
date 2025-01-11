import "./ButtonOption.css";

export default function ButtonOption({ children, handleClick }) {
  return (
    <button
      className="button option"
      onClick={(event) => {
        event.preventDefault();
        handleClick();
      }}
    >
      {children}
    </button>
  );
}
