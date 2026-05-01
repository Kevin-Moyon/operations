import { useNavigate } from 'react-router-dom';
import { Routes } from '../../models/routes.model';
import { Button } from '../atoms/Button';
import './Menu.css';

export const Menu = () => {
    const navigate = useNavigate();

    return (
        <div id="center">

            <div className="header-simple">
                <h1 className="main-title">Main Menu</h1>
                <p className="subtitle">Select a tool to start</p>
            </div>
            <div className="button-group">
                <Button
                    label="Addition"
                    onClick={() => navigate(Routes.ADDITION)}
                    className="counter"
                />
                <Button
                    label="Calculator"
                    onClick={() => navigate(Routes.CALCULATOR)}
                    className="counter"
                />
                <Button
                    label="Search"
                    onClick={() => navigate(Routes.SEARCH)}
                    className="counter"
                />
            </div>
        </div>
    );
};