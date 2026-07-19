import CBDataTableDesktop from "./CBDataTableDesktop";
import CBDataTableMobile from "./CBDataTableMobile";
import type { CBDataTableProps } from "../../types/componentsDataTable";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useTheme } from "../../hooks/useTheme";

function CBDataTable<T>(props: CBDataTableProps<T>) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { modeTable = "auto" } = props;
  const themeComputed = useTheme(props.theme);
  console.log("themeComputed", themeComputed);
  if (modeTable === "mobile") {
    return <CBDataTableMobile {...props} theme={themeComputed} />;
  }

  if (modeTable === "desktop") {
    return <CBDataTableDesktop {...props} theme={themeComputed} />;
  }

  return isMobile ? (
    <CBDataTableMobile {...props} theme={themeComputed} />
  ) : (
    <CBDataTableDesktop {...props} theme={themeComputed} />
  );
}

export default CBDataTable;
