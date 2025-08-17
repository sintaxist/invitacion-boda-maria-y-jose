import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Si estamos en la raíz "/" redirigimos a "/es/"
  if (pathname === "/") {
    return Response.redirect(new URL("/es/", context.url), 302);
  }

  return next();
});
