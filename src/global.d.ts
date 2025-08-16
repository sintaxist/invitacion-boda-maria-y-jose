/// <reference types="astro/client" />

declare module "*.astro" {
  import type { AstroComponentFactory, AstroProps } from "astro";
  const Component: AstroComponentFactory<AstroProps>;
  export default Component;
}
