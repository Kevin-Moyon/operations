import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../models/routes.model';
import { Button } from '../atoms/Button';
import './Menu.css';

export const Menu = () => {
    const navigate = useNavigate();


    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        setOffset({ x, y });
    };

    return (

        <div className="main-menu-container" onMouseMove={handleMouseMove} style={{ overflow: 'hidden' }}>

            <div className="main-menu-background" style={{
                transform: `translate(${offset.x * 1.2}px, ${offset.y * 1.2}px)`,
                transition: 'transform 0.1s ease-out'
            }}>
            </div>


            <div className="content" >

                <div className="header-simple" style={{
                    transform: `translate(${offset.x * 0.4}px, ${offset.y * 0.4}px)`,
                    transition: 'transform 0.1s ease-out'
                }}>
                    <h1 className="main-title">Main Menu</h1>
                    <p className="subtitle">Select a tool to start</p>
                </div>
                <div className="button-group" style={{
                    transform: `translate(${offset.x * -0.6}px, ${offset.y * -0.6}px)`,
                    transition: 'transform 0.1s ease-out'
                }}>
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

        </div>
    );
};