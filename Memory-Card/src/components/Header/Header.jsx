import "./Header.css";

export default function Header({ text }) {
  return (
    <header className="header">
      <h1 className="title">{text}</h1>
    </header>
  );
}
