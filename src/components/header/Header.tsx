import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__first-container">
        <img
          src="./src/images/cat.svg"
          alt="Website Logo"
          className="header__logo"
        />
        <p className="header__title">NEWS</p>
      </div>
    </header>
  );
}
