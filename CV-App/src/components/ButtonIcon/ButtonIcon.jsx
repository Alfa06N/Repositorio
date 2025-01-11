import "./ButtonIcon.css";

export default function ButtonIcon({ Icon, strokeWidth = 1.5, onClick }) {
  return (
    <button onClick={onClick} className="button-icon">
      <Icon strokeWidth={strokeWidth} />
    </button>
  );
}
