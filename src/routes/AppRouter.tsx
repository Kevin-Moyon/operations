import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { Routes } from '../models/routes.model';
import { AdditionPage } from '../pages/AdditionPage';
import { HomePage } from '../pages/HomePage';
import { CalculatorPage } from '../pages/CalculatorPage';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <ReactRoutes>

                <Route path={Routes.HOME} element={<HomePage />} />

                <Route path={Routes.ADDITION} element={<AdditionPage />} />
                <Route path={Routes.CALCULATOR} element={<CalculatorPage />} />

                <Route path="*" element={<div>404 - Página no encontrada</div>} />
            </ReactRoutes>
        </BrowserRouter>
    );
};