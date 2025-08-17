import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname === "/") {
    return Response.redirect(new URL("/es/", context.url), 302);
  }
  return next();
});