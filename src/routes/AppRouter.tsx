import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { Routes } from '../models/routes.model';
import { AdditionPage } from '../pages/AdditionPage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <ReactRoutes>

                <Route path={Routes.HOME} element={<div>Home (Próximamente)</div>} />

                <Route path={Routes.ADDITION} element={<AdditionPage />} />

                {/* <Route path={Routes.DISNEY} element={<DisneyPage />} /> */}
                {/* <Route path={Routes.GIFS} element={<GifsPage />} /> */}

                <Route path="*" element={<div>404 - Página no encontrada</div>} />
            </ReactRoutes>
        </BrowserRouter>
    );
};