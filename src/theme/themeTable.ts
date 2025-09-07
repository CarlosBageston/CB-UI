// themeTable.ts
import {
  colorSchemeDarkBlue,
  colorSchemeLightCold,
  themeQuartz,
} from "ag-grid-community";
const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);
const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);

export const getThemeTable = (isDark: boolean) =>
  isDark ? themeDarkBlue : themeLightCold;
