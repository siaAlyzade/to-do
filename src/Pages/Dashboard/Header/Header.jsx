import Logo from "./Logo";
import SearchQuery from "./SearchQuery";
import DateInfo from "./DateInfo";

function Header() {
  return (
    // I need a fucking shadow here
    <header className="Header">
      <Logo />
      <SearchQuery />
      <DateInfo />
    </header>
  );
}

export default Header;
