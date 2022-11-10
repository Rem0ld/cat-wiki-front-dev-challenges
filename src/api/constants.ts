export const url =
  import.meta.env.VITE_ENV === 'development'
    ? 'http://localhost:3000/api/cat/'
    : import.meta.env.VITE_URL_PROD;
