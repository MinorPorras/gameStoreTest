import { Link } from "react-router-dom";

export function MainNavBarItem({
  text,
  selectedItem,
  handleItemClick,
}: {
  text: string;
  selectedItem: string;
  handleItemClick: (item: string) => void;
}) {
  return (
    <Link
      to={text === "Home" ? "/" : `/${text}`}
      onClick={() => handleItemClick(text)}
      id={text}
      className={`main-navbar-item ${selectedItem === text ? "active" : ""}`}
    >
      {text}
    </Link>
  );
}

export default MainNavBarItem;
