interface MenuProps {
    onSetView: (view: 'menu' | 'addition' | 'calculator' | 'search') => void;
}

export const Menu = ({ onSetView }: MenuProps) => {
    return (
        <div className="menu-container">
            <h1>Main Menu</h1>
            <div className="button-group">
                <button className="counter" onClick={() => onSetView('addition')}>Addition</button>
                <button className="counter" onClick={() => onSetView('calculator')}>Calculator</button>
                <button className="counter" onClick={() => onSetView('search')}>Search</button>
            </div>
        </div>
    );
};