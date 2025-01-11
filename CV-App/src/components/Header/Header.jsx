import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="header">
      <h1>CV-App</h1>
      {children}
    </header>
  );
}
