export function MainNavBarItem({text, selectedItem, handleItemClick }: { text: string; selectedItem: string; handleItemClick: (item: string) => void }) {
    
    
    return (
            <li className= {`main-navbar-item ${selectedItem === text ? 'active' : ''}`}
                onClick={() => handleItemClick(text)} id={text}>
                {text}
            </li>
    );
}