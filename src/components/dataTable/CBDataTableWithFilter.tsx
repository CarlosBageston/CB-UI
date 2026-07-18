import { useState } from "react";
import CBFilterBar, { type CBFilterOption } from "../CBFilterBar";

import type { CBDataTableProps } from "../../types/componentsDataTable";
import CBDataTable from "./dataTable";

interface CBDataTableWithFilterProps<T> extends CBDataTableProps<T> {
  filterColumns?: CBFilterOption[];

  filterPlaceholder?: string;

  showFilter?: boolean;

  filterClassName?: string;
}

function CBDataTableWithFilter<T>({
  data,
  filterColumns,
  filterPlaceholder = "Filtrar...",
  showFilter = true,
  filterClassName,
  ...tableProps
}: CBDataTableWithFilterProps<T>) {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="flex flex-col gap-6">
      {showFilter && (
        <CBFilterBar
          data={data}
          columns={filterColumns}
          placeholder={filterPlaceholder}
          onChange={setFilteredData}
          className={filterClassName}
        />
      )}

      <CBDataTable {...tableProps} data={filteredData} />
    </div>
  );
}

export default CBDataTableWithFilter;
