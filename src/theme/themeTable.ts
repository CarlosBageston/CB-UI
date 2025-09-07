// themeTable.ts
import {
  colorSchemeDarkBlue,
  colorSchemeLightCold,
  themeQuartz,
  type Theme,
} from "ag-grid-community";
const themeDarkBlue: Theme = themeQuartz.withPart(colorSchemeDarkBlue);
const themeLightCold: Theme = themeQuartz.withPart(colorSchemeLightCold);

export const getThemeTable = (isDark: boolean) =>
  isDark ? themeDarkBlue : themeLightCold;
