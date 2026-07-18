import { useState, useEffect, useRef } from "react";
import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { FiSearch, FiFilter } from "react-icons/fi";

/**
 * Opção de coluna para filtragem
 */
export interface CBFilterOption<T = unknown> {
  /**
   * Identificador interno do filtro.
   */
  value: string;

  /**
   * Texto exibido para o usuário.
   */
  label: string;

  /**
   * Define como pegar o valor usado na busca.
   *
   * Caso não seja informado, usa o campo informado em `value`.
   */
  getValue?: (item: T) => unknown;
}

function getFilterValue<T>(item: T, column?: CBFilterOption<T>): unknown {
  if (!column) {
    return item;
  }

  if (column.getValue) {
    return column.getValue(item);
  }

  return (item as Record<string, unknown>)[column.value];
}

/**
 * Props do CBFilterBar
 */
interface CBFilterBarProps<T> {
  /** Dados originais que serão filtrados */
  data: T[];
  /** Colunas opcionais para filtro específico */
  columns?: CBFilterOption[];
  /** Placeholder do campo de pesquisa */
  placeholder?: string;
  /** Valor inicial do input */
  initialQuery?: string;
  /** Callback que retorna os dados filtrados */
  onChange: (filteredData: T[]) => void;
  /** Classes adicionais para o container */
  className?: string;
  /** Classes adicionais para o input */
  inputClassName?: string;
  /** Classes adicionais para o select */
  selectClassName?: string;
  /** Estilo inline opcional */
  style?: React.CSSProperties;
}

/**
 * CBFilterBar
 *
 * Componente de barra de filtro para listas e tabelas.
 * Permite buscar por qualquer coluna ou por coluna específica.
 *
 * @example
 * ```tsx
 * <CBFilterBar
 *   data={users}
 *   columns={[
 *     { value: "name", label: "Nome" },
 *     { value: "email", label: "E-mail" },
 *   ]}
 *   placeholder="Buscar usuário..."
 *   onChange={(filtered) => setFilteredUsers(filtered)}
 * />
 * ```
 */
function CBFilterBar<T>({
  data,
  columns = [],
  placeholder = "Filtrar...",
  onChange,
  initialQuery,
  className = "",
  inputClassName = "",
  selectClassName = "",
  style,
}: CBFilterBarProps<T>) {
  const [query, setQuery] = useState(initialQuery ?? "");
  const [selectedColumn, setSelectedColumn] = useState<string | undefined>();
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (!query) {
      onChangeRef.current(data);
      return;
    }

    const q = query.toLowerCase();

    const filtered = data.filter((item) => {
      if (selectedColumn) {
        const column = columns.find((col) => col.value === selectedColumn);

        const value = String(getFilterValue(item, column) ?? "").toLowerCase();

        return value.includes(q);
      }

      return Object.values(item as Record<string, any>).some((v) =>
        String(v).toLowerCase().includes(q),
      );
    });

    onChangeRef.current(filtered);
  }, [query, selectedColumn, JSON.stringify(data)]); // JSON.stringify estabiliza: só reexecuta quando o conteúdo muda, não a referência

  return (
    <div
      className={`flex items-center max-w-lg gap-3 bg-gray-100 rounded-lg shadow-sm p-2! ${className}`}
      style={style}
    >
      <FiSearch className="text-gray-500" />

      <IonInput
        value={query}
        placeholder={placeholder}
        onIonInput={(e) => setQuery(e.detail.value!)}
        clearInput
        className={`flex-1 ${inputClassName}`}
      />

      {columns.length > 0 && (
        <div className="flex items-center gap-2">
          <FiFilter className="text-gray-500" size={20} />
          <IonSelect
            value={selectedColumn}
            placeholder="Coluna"
            onIonChange={(e) => setSelectedColumn(e.detail.value)}
            interface="popover"
            className={selectClassName}
          >
            <IonSelectOption value={undefined}>Todas</IonSelectOption>
            {columns.map((col) => (
              <IonSelectOption key={col.value} value={col.value}>
                {col.label}
              </IonSelectOption>
            ))}
          </IonSelect>
        </div>
      )}
    </div>
  );
}

export default CBFilterBar;
