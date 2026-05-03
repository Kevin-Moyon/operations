export const Routes = {
    HOME: '/',
    ADDITION: '/addition',
    CALCULATOR: '/calculator',
    SEARCH: '/search'
} as const;


export type AppRoutes = typeof Routes[keyof typeof Routes];