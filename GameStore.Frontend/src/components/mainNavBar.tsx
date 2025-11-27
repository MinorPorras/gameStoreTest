import { useState } from "react";
import { MainNavBarItem } from "./mainNabVarItem";

export function MainNavBar() {
    const [selectedItem, setSelectedItem] = useState('Home');

    const handleItemClick = (item: string) =>{
        setSelectedItem(item);
    }

    const tabs: string[] = ['Home', 'Games', 'Genres'];

    return (
      <header>
        <nav className='main-navbar'>
          <ul className='main-navbar-list'>
            {tabs.map((tab) => (
                <MainNavBarItem
                    key={tab}
                    text={tab}
                    selectedItem={selectedItem}
                    handleItemClick={handleItemClick}
                />
            ))}
          </ul>
        </nav>
      </header>
    );
}

export default MainNavBar;