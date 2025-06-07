import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en'
});

export const config = {
  matcher: [
    '/((?!_next|favicon.ico).*)'
  ]
};
// Este middleware intercepta las solicitudes y aplica la localización según el idioma seleccionado.