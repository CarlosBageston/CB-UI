import { useState } from "react";
import CBFilterBar, { type CBFilterOption } from "../CBFilterBar";

import type { CBDataTableProps } from "../../types/componentsDataTable";
import CBDataTable from "./dataTable";
import { useTheme } from "../../hooks/useTheme";

interface CBDataTableWithFilterProps<T> extends CBDataTableProps<T> {
  filterColumns?: CBFilterOption[];

  filterPlaceholder?: string;

  filterClassName?: string;
}

function CBDataTableWithFilter<T>({
  data,
  filterColumns,
  filterPlaceholder = "Buscar...",
  filterClassName,
  theme,
  ...tableProps
}: CBDataTableWithFilterProps<T>) {
  const [filteredData, setFilteredData] = useState(data);
  const themeComputed = useTheme(theme);

  return (
    <div className="flex flex-col gap-6">
      <CBFilterBar
        data={data}
        columns={filterColumns}
        placeholder={filterPlaceholder}
        onChange={setFilteredData}
        className={filterClassName}
        theme={themeComputed}
      />

      <CBDataTable {...tableProps} data={filteredData} theme={theme} />
    </div>
  );
}

export default CBDataTableWithFilter;
