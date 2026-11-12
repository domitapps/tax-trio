// Buduje ścieżkę z uwzględnieniem `base` (np. /tax-trio na GitHub Pages).
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
