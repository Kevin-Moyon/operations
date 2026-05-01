export const Routes = {
    HOME: '/',
    ADDITION: '/addition',
    DISNEY: '/disney',
    GIFS: '/gifs'
} as const;


export type AppRoutes = typeof Routes[keyof typeof Routes];