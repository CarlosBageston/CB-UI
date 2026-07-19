import { useState, useEffect, useRef } from "react";
import { IonInput, IonItem, IonList, IonPopover } from "@ionic/react";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import { DEFAULT_THEMES } from "./dataTable/theme/themeDataTable";
import CBButton from "./CBButton";

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
  /** Estilo opcional */
  theme?: "light" | "dark";
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
  theme,
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

  const classes = DEFAULT_THEMES[theme ?? "dark"].classes;
  const colors = DEFAULT_THEMES[theme ?? "dark"].colorsFiler;

  return (
    <div
      className={`flex items-center max-w-lg gap-3 ${classes.wrapper} rounded-lg shadow-sm p-2! ${className}`}
      style={style}
    >
      <FiSearch className={classes.textPrimary} />

      <IonInput
        value={query}
        placeholder={placeholder}
        onIonInput={(e) => setQuery(e.detail.value!)}
        clearInput
        className={`flex-1 ${inputClassName}`}
      />

      {columns.length > 0 && (
        <div className="flex items-center gap-2">
          <FiFilter className={classes.textPrimary} size={20} />
          <div
            className="self-stretch w-px"
            style={{ backgroundColor: colors.border }}
          />
          <CBButton
            variant="clear"
            id="filter-column-button"
            className={`${selectClassName} min-w-28! max-w-28! truncate`}
            backgroundColor="transparent"
            textColor={colors.text}
            size="small"
            iconEnd={<FiChevronDown size={14} className={colors.text} />}
          >
            {selectedColumn
              ? columns.find((c) => c.value === selectedColumn)?.label
              : "Todas"}
          </CBButton>

          <IonPopover
            trigger="filter-column-button"
            triggerAction="click"
            dismissOnSelect
            alignment="end"
          >
            <IonList
              style={{
                background: colors.background,
              }}
            >
              <IonItem
                button
                onClick={() => setSelectedColumn(undefined)}
                style={{
                  "--background": colors.background,
                  "--color": colors.text,
                }}
              >
                Todas
              </IonItem>

              {columns.map((col) => (
                <IonItem
                  key={col.value}
                  button
                  style={{
                    "--background": colors.background,
                    "--color": colors.text,
                  }}
                  onClick={() => setSelectedColumn(col.value)}
                >
                  {col.label}
                </IonItem>
              ))}
            </IonList>
          </IonPopover>
        </div>
      )}
    </div>
  );
}

export default CBFilterBar;
