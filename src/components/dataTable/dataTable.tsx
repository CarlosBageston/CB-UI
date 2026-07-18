import CBDataTableDesktop from "./CBDataTableDesktop";
import CBDataTableMobile from "./CBDataTableMobile";
import type { CBDataTableProps } from "../../types/componentsDataTable";
import useMediaQuery from "../../hooks/useMediaQuery";

function CBDataTable<T>(props: CBDataTableProps<T>) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { modeTable = "auto" } = props;

  if (modeTable === "mobile") {
    return <CBDataTableMobile {...props} />;
  }

  if (modeTable === "desktop") {
    return <CBDataTableDesktop {...props} />;
  }

  return isMobile ? (
    <CBDataTableMobile {...props} />
  ) : (
    <CBDataTableDesktop {...props} />
  );
}

export default CBDataTable;
