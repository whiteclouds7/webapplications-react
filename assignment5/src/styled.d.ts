import { themes } from "./App";

declare module "styled-components" {
  type CustomTheme = typeof themes.light;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}

  // the other solution if I don't disable eslint but the one above is nicer i think
  // export interface DefaultTheme extends CustomTheme {
  //   backgroundColor: string;
  //   color: string;
  // }
}
