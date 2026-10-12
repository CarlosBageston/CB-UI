import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBDataTable, type CBTableColumn } from "../datatable";

/**
 * Simula a tela de produção: só os produtos INTERMEDIÁRIOS (compostos)
 * têm a coluna "Necessário" editável e destacada. Os demais ficam só leitura.
 */
type ProductType = "RAW_MATERIAL" | "INTERMEDIATE_PRODUCT";

interface IngredientRow {
  productId: string;
  productName: string;
  productType: ProductType;
  unit: string;
  requiredQuantity: number;
  availableQuantity: number;
}

const initialData: IngredientRow[] = [
  {
    productId: "1",
    productName: "Farinha de trigo",
    productType: "RAW_MATERIAL",
    unit: "kg",
    requiredQuantity: 10,
    availableQuantity: 50,
  },
  {
    productId: "2",
    productName: "Massa base (intermediário)",
    productType: "INTERMEDIATE_PRODUCT",
    unit: "kg",
    requiredQuantity: 8,
    availableQuantity: 12,
  },
  {
    productId: "3",
    productName: "Açúcar",
    productType: "RAW_MATERIAL",
    unit: "kg",
    requiredQuantity: 3,
    availableQuantity: 20,
  },
  {
    productId: "4",
    productName: "Recheio (intermediário)",
    productType: "INTERMEDIATE_PRODUCT",
    unit: "kg",
    requiredQuantity: 5,
    availableQuantity: 4,
  },
];

const isIntermediate = (p: { data?: IngredientRow }) =>
  p.data?.productType === "INTERMEDIATE_PRODUCT";

/**
 * Colunas definidas fora do componente (não recriam a cada render).
 * `cellClass` como função: no desktop recebe CellClassParams, no mobile
 * recebe só `{ data }`. Por isso usamos apenas `p.data`.
 */
const editableColumns: CBTableColumn<IngredientRow>[] = [
  { field: "productName", headerName: "Produto", col: 2 },
  { field: "unit", headerName: "Unidade", col: 1 },
  {
    field: "requiredQuantity",
    headerName: "Necessário",
    col: 1,
    editable: isIntermediate,
    cellClass: (p) => (isIntermediate(p) ? "cell-editavel" : undefined),
    cellEditor: "agNumberCellEditor",
    cellEditorParams: { min: 0, precision: 0 },
    singleClickEdit: true,
  },
  { field: "availableQuantity", headerName: "Disponível", col: 1 },
];

/**
 * CSS do destaque. Em produção isso vai no CSS global do app/lib;
 * aqui fica embutido para a story ser autossuficiente.
 */
const highlightCss = `
.ag-cell.cell-editavel,
.cell-editavel {
  background: rgb(59 130 246 / 0.12);
  box-shadow: inset 0 0 0 1px rgb(59 130 246 / 0.5);
  border-radius: 6px;
  cursor: text;
  transition: background 0.15s, box-shadow 0.15s;
}
.ag-cell.cell-editavel:hover,
.cell-editavel:hover {
  background: rgb(59 130 246 / 0.2);
  box-shadow: inset 0 0 0 1px rgb(59 130 246);
}
.ag-cell.cell-editavel::after {
  content: "✎";
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 11px;
  opacity: 0.6;
  pointer-events: none;
}
.ag-cell.cell-editavel.ag-cell-inline-editing {
  background: transparent;
  box-shadow: none;
}
.ag-cell.cell-editavel.ag-cell-inline-editing::after {
  display: none;
}
/* mobile: span inline com lápis no fluxo normal */
span.cell-editavel {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 10px;
}
span.cell-editavel::after {
  content: "✎";
  position: static;
  transform: none;
  font-size: 11px;
  opacity: 0.6;
}
`;

/** Wrapper com estado: edita o dado e mostra o log de alterações. */
function EditableTableDemo({ mode }: { mode: "desktop" | "mobile" }) {
  const [data, setData] = useState<IngredientRow[]>(initialData);
  const [log, setLog] = useState<string[]>([]);

  return (
    <div className={mode === "mobile" ? "max-w-100" : "w-full"}>
      <style>{highlightCss}</style>

      <CBDataTable<IngredientRow>
        modeTable={mode}
        defaultExpanded
        theme="dark"
        columns={editableColumns}
        data={data}
        showFooter={false}
        pageSize={10}
        getRowId={(row) => row.productId}
        onCellValueChanged={(e) => {
          const newValue = Number(e.newValue) || 0;
          setData((current) =>
            current.map((row) =>
              row.productId === e.data.productId
                ? { ...row, requiredQuantity: newValue }
                : row,
            ),
          );
          setLog((current) => [
            `${e.data.productName}: ${String(e.oldValue)} → ${newValue}`,
            ...current,
          ]);
        }}
      />

      <div className="mt-4 rounded-md border border-gray-500/40 p-3 text-xs">
        <strong>Log de edições</strong>
        {log.length === 0 ? (
          <p className="opacity-60">
            Edite "Necessário" de um produto intermediário.
          </p>
        ) : (
          <ul className="mt-1 list-disc pl-4">
            {log.map((entry, i) => (
              <li key={i}>{entry}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const meta: Meta<typeof CBDataTable<IngredientRow>> = {
  title: "Form/CBDataTable/Editable",
  component: CBDataTable<IngredientRow>,
};

export default meta;
type Story = StoryObj<typeof CBDataTable<IngredientRow>>;

/**
 * Desktop: só "Massa base" e "Recheio" (intermediários) ficam destacados
 * e editáveis. Farinha e Açúcar devem ficar normais e sem edição.
 */
export const EditableOnlyCompositeDesktop: Story = {
  render: () => <EditableTableDemo mode="desktop" />,
};

/**
 * Mobile: cards expandidos. O valor de "Necessário" só vira um campo
 * destacado (com lápis) nos cards dos intermediários. Toque para editar,
 * Enter confirma, Esc cancela.
 */
export const EditableOnlyCompositeMobile: Story = {
  render: () => <EditableTableDemo mode="mobile" />,
};

/** Lado a lado, para comparar o comportamento dos dois modos. */
export const EditableOnlyCompositeBoth: Story = {
  render: () => (
    <div className="space-y-8">
      <EditableTableDemo mode="desktop" />
      <EditableTableDemo mode="mobile" />
    </div>
  ),
};
