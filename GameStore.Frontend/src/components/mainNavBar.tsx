import { useState } from "react";
import { MainNavBarItem } from "./mainNabVarItem";
import { TABS } from "../constants";

export function MainNavBar() {
  const [selectedNavBarItem, setSelectedNavBarItem] = useState("Home");

  const handleItemClick = (item: string) => {
    setSelectedNavBarItem(item);
  };

  return (
    <header className="main-navbar-container">
      <nav className="main-navbar">
        <div className="main-navbar-list">
          {TABS.map((tab) => (
            <MainNavBarItem
              key={tab}
              text={tab}
              selectedItem={selectedNavBarItem}
              handleItemClick={handleItemClick}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default MainNavBar;
