import { themes } from "./App";

declare module "styled-components" {
  type CustomTheme = typeof themes.light;
  export interface DefaultTheme extends CustomTheme {}
}
