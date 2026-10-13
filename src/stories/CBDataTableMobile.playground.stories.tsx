import { useCallback, useEffect, useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FiCopy, FiLayers, FiPrinter, FiSend } from "react-icons/fi";
import {
  CBDataTableMobile,
  type CBDataTableAction,
  type CBTableColumn,
} from "../datatable";

/**
 * Stories que cobrem todas as possibilidades do CBDataTableMobile:
 * layout do card (automático e via `mobile`), temas, seleção, ações,
 * edição, paginação (client/server), loading, vazio, render/cellClass,
 * colunas agrupadas, campos aninhados e conteúdo longo.
 *
 * Comece pelo "Playground": todas as props principais estão nos Controls.
 */

// ─── Dados de exemplo ───────────────────────────────────────────────────────

type OrderStatus = "Pago" | "Pendente" | "Cancelado";

interface Order {
  id: number;
  code: string;
  customer: { name: string; city: string };
  status: OrderStatus;
  items: number;
  quantity: number;
  unitPrice: number;
  createdAt: string;
  phone: string;
  cpf: string;
  notes: string;
  lots: { code: string; qty: number }[];
}

const CUSTOMERS: [string, string][] = [
  ["Carlos Bageston", "Dois Vizinhos"],
  ["Maria Oliveira", "Pato Branco"],
  ["João da Silva", "Francisco Beltrão"],
  ["Ana Souza", "Cascavel"],
  ["Pedro Santos", "Curitiba"],
  ["Juliana Lima", "Toledo"],
  ["Rafael Costa", "Londrina"],
];

const STATUSES: OrderStatus[] = ["Pago", "Pendente", "Cancelado", "Pago"];

function makeOrders(count: number): Order[] {
  return Array.from({ length: count }, (_, i) => {
    const [name, city] = CUSTOMERS[i % CUSTOMERS.length];
    return {
      id: i + 1,
      code: `PED-${String(i + 1).padStart(4, "0")}`,
      customer: { name, city },
      status: STATUSES[i % STATUSES.length],
      items: (i % 5) + 1,
      quantity: (i % 4) + 1,
      unitPrice: 19.9 + ((i * 7) % 60),
      createdAt: `${String((i % 28) + 1).padStart(2, "0")}/10/2026`,
      phone: `4699${String(1000000 + i * 1371).slice(0, 7)}`,
      cpf: `${String(10000000000 + i * 987654321).slice(0, 11)}`,
      notes:
        i % 3 === 0
          ? "Entregar no período da tarde, portão lateral."
          : "Sem observações",
      lots: Array.from({ length: i % 3 }, (_, l) => ({
        code: `L-${i + 1}${l}`,
        qty: 10 * (l + 1),
      })),
    };
  });
}

const ALL_ORDERS = makeOrders(37);

/** Simula uma API paginada com delay */
function fakeFetchOrders(page: number, size: number) {
  return new Promise<{ data: Order[]; total: number }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: ALL_ORDERS.slice(page * size, page * size + size),
          total: ALL_ORDERS.length,
        }),
      700,
    ),
  );
}

// ─── Peças reutilizáveis ────────────────────────────────────────────────────

function StatusBadge({ status }: { status: OrderStatus }) {
  const styles: Record<OrderStatus, string> = {
    Pago: "bg-emerald-500/15 text-emerald-500",
    Pendente: "bg-amber-500/15 text-amber-500",
    Cancelado: "bg-rose-500/15 text-rose-500",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

const MobileFrame = ({
  children,
  dark = false,
  label,
}: {
  children: React.ReactNode;
  dark?: boolean;
  label?: string;
}) => (
  <div className="flex flex-col items-center gap-2">
    {label && (
      <span className="text-xs font-semibold text-slate-500">{label}</span>
    )}
    <div
      className={`w-97.5 h-200 max-h-200 rounded-4xl p-3 border-8 overflow-auto scrollbar-hidden border-slate-900 shadow-2xl ${
        dark ? "bg-[#0f1621]" : "bg-slate-100"
      }`}
    >
      {children}
    </div>
  </div>
);

const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap justify-center gap-8 bg-slate-200 min-h-screen py-6">
    {children}
  </div>
);

/** Painel com os últimos eventos disparados pela tabela */
function useEventLog() {
  const [events, setEvents] = useState<string[]>([]);
  const log = useCallback(
    (msg: string) =>
      setEvents((prev) =>
        [`${new Date().toLocaleTimeString()} · ${msg}`, ...prev].slice(0, 4),
      ),
    [],
  );
  const panel = (
    <div className="mb-3 p-3 rounded-xl bg-slate-800 text-[11px] text-slate-200 space-y-0.5 min-h-14">
      {events.length === 0 ? (
        <span className="text-slate-400">Os eventos aparecem aqui</span>
      ) : (
        events.map((e, i) => (
          <div key={i} className={i === 0 ? "text-white" : "text-slate-400"}>
            {e}
          </div>
        ))
      )}
    </div>
  );
  return { log, panel };
}

/** Colunas no modo automático (sem `mobile`) */
const autoColumns: CBTableColumn<Order>[] = [
  { field: "customer.name", headerName: "Cliente", col: 3 },
  { field: "code", headerName: "Pedido", col: 2 },
  {
    field: "status",
    headerName: "Situação",
    col: 2,
    render: (row) => <StatusBadge status={row.status} />,
  },
  { field: "items", headerName: "Itens", col: 1 },
  { field: "createdAt", headerName: "Data", col: 2 },
  { field: "unitPrice", headerName: "Preço unit.", col: 2, mask: "currency" },
  {
    colId: "total",
    headerName: "Total",
    col: 2,
    mask: "currency",
    valueGetter: (p) => (p.data?.quantity ?? 0) * (p.data?.unitPrice ?? 0),
  },
  { field: "customer.city", headerName: "Cidade", col: 2 },
  { field: "phone", headerName: "Telefone", col: 2, mask: "tel" },
  { field: "cpf", headerName: "CPF", col: 2, mask: "cpf" },
  { field: "notes", headerName: "Observações", col: 3 },
];

// ─── Meta / Playground ──────────────────────────────────────────────────────

interface PlaygroundArgs {
  theme: "light" | "dark";
  layout: "auto" | "explicit" | "onlyTitle" | "titleAndTrailing";
  selectionMode: "single" | "multiple";
  withEdit: boolean;
  withDelete: boolean;
  withCustomActions: boolean;
  editable: boolean;
  singleClickEdit: boolean;
  autoFocusFirstEditableCell: boolean;
  defaultExpanded: boolean;
  pagination: "client" | "server";
  pageSize: number;
  showFooter: boolean;
  loading: boolean;
  empty: boolean;
  emptyMessage: string;
}

const meta: Meta<PlaygroundArgs> = {
  title: "Form/CBDataTable/Mobile Completo",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<PlaygroundArgs>;

const noControls = { controls: { disable: true } };

export const Playground: Story = {
  args: {
    theme: "light",
    layout: "auto",
    selectionMode: "single",
    withEdit: true,
    withDelete: true,
    withCustomActions: true,
    editable: true,
    singleClickEdit: true,
    autoFocusFirstEditableCell: false,
    defaultExpanded: false,
    pagination: "client",
    pageSize: 5,
    showFooter: true,
    loading: false,
    empty: false,
    emptyMessage: "Nenhum pedido encontrado",
  },
  argTypes: {
    theme: { control: "inline-radio", options: ["light", "dark"] },
    layout: {
      control: "select",
      options: ["auto", "explicit", "onlyTitle", "titleAndTrailing"],
      description:
        "auto = sem `mobile`; explicit = papéis via `mobile`; onlyTitle/titleAndTrailing = cards mínimos",
    },
    selectionMode: { control: "inline-radio", options: ["single", "multiple"] },
    pagination: {
      control: "inline-radio",
      options: ["client", "server"],
      description: "server = usa page/totalRows/onPageChange com delay",
    },
    pageSize: { control: { type: "number", min: 1, max: 50 } },
  },
  render: (args) => {
    const PlaygroundDemo = () => {
      const { log, panel } = useEventLog();
      const [rows, setRows] = useState<Order[]>(ALL_ORDERS);

      // Paginação server
      const [page, setPage] = useState(0);
      const [pageSize, setPageSize] = useState(args.pageSize);
      const [serverRows, setServerRows] = useState<Order[]>([]);
      const [serverLoading, setServerLoading] = useState(false);

      useEffect(() => setPageSize(args.pageSize), [args.pageSize]);

      useEffect(() => {
        if (args.pagination !== "server") return;
        setServerLoading(true);
        fakeFetchOrders(page, pageSize).then((res) => {
          // Aplica as edições locais sobre a página que veio da "API"
          setServerRows(
            res.data.map((o) => rows.find((r) => r.id === o.id) ?? o),
          );
          setServerLoading(false);
        });
      }, [page, pageSize, args.pagination, rows]);

      const columns = useMemo<CBTableColumn<Order>[]>(() => {
        const qty: CBTableColumn<Order> = {
          field: "quantity",
          headerName: "Quantidade",
          col: 1,
          editable: args.editable
            ? (p) => p.data?.status !== "Cancelado"
            : false,
          cellEditor: "agNumberCellEditor",
          cellEditorParams: { min: 1, max: 99, precision: 0 },
          onCellValueChanged: (p) => {
            log(
              `quantity: ${String(p.oldValue)} → ${String(p.newValue)} (${p.data?.code})`,
            );
            setRows((prev) =>
              prev.map((r) =>
                r.id === p.data?.id
                  ? { ...r, quantity: Number(p.newValue ?? 0) }
                  : r,
              ),
            );
          },
        };

        const notes: CBTableColumn<Order> = {
          field: "notes",
          headerName: "Observações",
          col: 3,
          editable: args.editable,
          cellEditor: "agTextCellEditor",
          onCellValueChanged: (p) => {
            log(`notes alterado (${p.data?.code})`);
            setRows((prev) =>
              prev.map((r) =>
                r.id === p.data?.id ? { ...r, notes: String(p.newValue) } : r,
              ),
            );
          },
        };

        const base = autoColumns.filter((c) => c.field !== "notes");
        const withEditables = [
          ...base.slice(0, 4),
          qty,
          ...base.slice(4),
          notes,
        ];

        switch (args.layout) {
          case "explicit":
            return withEditables.map((c) => {
              const id = c.field ?? c.colId;
              if (id === "code") return { ...c, mobile: "title" as const };
              if (id === "status") return { ...c, mobile: "trailing" as const };
              if (id === "customer.name" || id === "total" || id === "quantity")
                return { ...c, mobile: "grid" as const };
              if (id === "cpf") return { ...c, mobile: "hidden" as const };
              return { ...c, mobile: "detail" as const };
            });
          case "onlyTitle":
            return [autoColumns[0]];
          case "titleAndTrailing":
            return [autoColumns[0], autoColumns[6]];
          default:
            return withEditables;
        }
      }, [args.layout, args.editable, log]);

      const actions: CBDataTableAction<Order>[] = args.withCustomActions
        ? [
            {
              icon: <FiLayers size={18} />,
              color: "secondary",
              children: "",
              disabled: (sel) => sel.length !== 1 || !sel[0].lots.length,
              onClick: ([r]) =>
                log(
                  `Lotes de ${r.code}: ${r.lots.map((l) => l.code).join(", ")}`,
                ),
            },
            {
              icon: <FiPrinter size={18} />,
              color: "secondary",
              children: "",
              disabled: (sel) => sel.length === 0,
              onClick: (sel) =>
                log(`Imprimir: ${sel.map((r) => r.code).join(", ")}`),
            },
          ]
        : [];

      const isServer = args.pagination === "server";
      const data = args.empty ? [] : isServer ? serverRows : rows;

      return (
        <MobileFrame dark={args.theme === "dark"}>
          {panel}
          <CBDataTableMobile<Order>
            key={`${args.layout}-${args.selectionMode}-${args.pagination}-${args.defaultExpanded}-${args.autoFocusFirstEditableCell}`}
            columns={columns}
            data={data}
            getRowId={(r) => String(r.id)}
            theme={args.theme}
            selectionMode={args.selectionMode}
            pageSize={pageSize}
            showFooter={args.showFooter}
            loading={args.loading || (isServer && serverLoading)}
            emptyMessage={args.emptyMessage}
            defaultExpanded={args.defaultExpanded}
            singleClickEdit={args.singleClickEdit}
            autoFocusFirstEditableCell={args.autoFocusFirstEditableCell}
            onEdit={args.withEdit ? (r) => log(`onEdit: ${r.code}`) : undefined}
            onDelete={
              args.withDelete
                ? (r) => {
                    log(`onDelete: ${r.code}`);
                    setRows((prev) => prev.filter((x) => x.id !== r.id));
                  }
                : undefined
            }
            actions={actions}
            {...(isServer
              ? {
                  page,
                  totalRows: args.empty ? 0 : ALL_ORDERS.length,
                  onPageChange: (p: number) => {
                    log(`onPageChange: ${p}`);
                    setPage(p);
                  },
                  onPageSizeChange: (s: number) => {
                    log(`onPageSizeChange: ${s}`);
                    setPageSize(s);
                    setPage(0);
                  },
                }
              : {})}
          />
        </MobileFrame>
      );
    };

    return (
      <Page>
        <PlaygroundDemo />
      </Page>
    );
  },
};

// ─── Layout do card ─────────────────────────────────────────────────────────

/**
 * Sem `mobile` em nenhuma coluna:
 * - 1ª coluna (Cliente) = título
 * - última coluna com mask "currency" (Total) = destaque
 * - as 4 seguintes = grade
 * - o resto = "Ver mais"
 */
export const LayoutAutomatico: Story = {
  parameters: noControls,
  render: () => (
    <Page>
      <MobileFrame label="Distribuição automática">
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={ALL_ORDERS.slice(0, 6)}
          getRowId={(r) => String(r.id)}
          theme="light"
          pageSize={5}
        />
      </MobileFrame>
    </Page>
  ),
};

/**
 * Papéis definidos via `mobile`, incluindo "hidden" e `hide`.
 * Como alguma coluna usa "grid", só as marcadas entram na grade.
 */
export const LayoutComPropMobile: Story = {
  parameters: noControls,
  render: () => (
    <Page>
      <MobileFrame label="title / trailing / grid / detail / hidden">
        <CBDataTableMobile<Order>
          columns={[
            { field: "code", headerName: "Pedido", mobile: "title" },
            {
              field: "status",
              headerName: "Situação",
              mobile: "trailing",
              render: (r) => <StatusBadge status={r.status} />,
            },
            { field: "customer.name", headerName: "Cliente", mobile: "grid" },
            {
              colId: "total",
              headerName: "Total",
              mask: "currency",
              mobile: "grid",
              valueGetter: (p) =>
                (p.data?.quantity ?? 0) * (p.data?.unitPrice ?? 0),
            },
            { field: "createdAt", headerName: "Data", mobile: "detail" },
            { field: "phone", headerName: "Telefone", mask: "tel" },
            { field: "cpf", headerName: "CPF (hidden)", mobile: "hidden" },
            { field: "notes", headerName: "Obs. (hide)", hide: true },
          ]}
          data={ALL_ORDERS.slice(0, 6)}
          getRowId={(r) => String(r.id)}
          theme="light"
          pageSize={5}
        />
      </MobileFrame>
    </Page>
  ),
};

/** Cards mínimos: só título, título + destaque e sem coluna de moeda */
export const CardsMinimos: Story = {
  parameters: noControls,
  render: () => (
    <Page>
      <MobileFrame label="Só título">
        <CBDataTableMobile<Order>
          columns={[{ field: "customer.name", headerName: "Cliente" }]}
          data={ALL_ORDERS.slice(0, 4)}
          getRowId={(r) => String(r.id)}
          theme="light"
        />
      </MobileFrame>
      <MobileFrame label="Título + destaque">
        <CBDataTableMobile<Order>
          columns={[
            { field: "customer.name", headerName: "Cliente" },
            { field: "unitPrice", headerName: "Preço", mask: "currency" },
          ]}
          data={ALL_ORDERS.slice(0, 4)}
          getRowId={(r) => String(r.id)}
          theme="light"
        />
      </MobileFrame>
      <MobileFrame label="Sem moeda (sem destaque)">
        <CBDataTableMobile<Order>
          columns={[
            { field: "customer.name", headerName: "Cliente" },
            { field: "code", headerName: "Pedido" },
            { field: "createdAt", headerName: "Data" },
          ]}
          data={ALL_ORDERS.slice(0, 4)}
          getRowId={(r) => String(r.id)}
          theme="light"
        />
      </MobileFrame>
    </Page>
  ),
};

/** Textos longos, muitos campos e valores vazios ("-") */
export const ConteudoLongo: Story = {
  parameters: noControls,
  render: () => {
    const rows: Order[] = [
      {
        ...ALL_ORDERS[0],
        customer: {
          name: "Distribuidora de Alimentos e Bebidas Sudoeste do Paraná LTDA",
          city: "Dois Vizinhos",
        },
        notes:
          "Cliente pediu para entregar somente após as 14h, ligar antes, portão lateral, cuidado com o cachorro. Nota fiscal em nome da filial.",
        unitPrice: 1234567.89,
      },
      {
        ...ALL_ORDERS[1],
        phone: "",
        cpf: "",
        notes: "",
      },
    ];
    return (
      <Page>
        <MobileFrame label="Quebra de linha e campos vazios">
          <CBDataTableMobile<Order>
            columns={autoColumns}
            data={rows}
            getRowId={(r) => String(r.id)}
            theme="light"
            defaultExpanded
          />
        </MobileFrame>
      </Page>
    );
  },
};

// ─── Temas ──────────────────────────────────────────────────────────────────

export const TemaClaroEEscuro: Story = {
  parameters: noControls,
  render: () => (
    <Page>
      <MobileFrame label='theme="light"'>
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={ALL_ORDERS.slice(0, 5)}
          getRowId={(r) => String(r.id)}
          theme="light"
          selectionMode="multiple"
          onDelete={() => {}}
        />
      </MobileFrame>
      <MobileFrame dark label='theme="dark"'>
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={ALL_ORDERS.slice(0, 5)}
          getRowId={(r) => String(r.id)}
          theme="dark"
          selectionMode="multiple"
          onDelete={() => {}}
        />
      </MobileFrame>
    </Page>
  ),
};

/** Tema customizado via `themeConfig` (as classes substituem as do tema base) */
export const TemaCustomizado: Story = {
  parameters: noControls,
  render: () => (
    <Page>
      <MobileFrame label="themeConfig">
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={ALL_ORDERS.slice(0, 5)}
          getRowId={(r) => String(r.id)}
          theme="light"
          selectionMode="multiple"
          onDelete={() => {}}
          themeConfig={{
            classes: {
              wrapper: "text-indigo-950",
              card: "bg-indigo-50 border-indigo-100 shadow-md shadow-indigo-900/5",
              cardSelected: "ring-2 ring-indigo-500 border-indigo-500",
              textPrimary: "text-indigo-950",
              textMuted: "text-indigo-400",
              divider: "border-indigo-100",
              badge: "bg-indigo-600 text-white",
              checkboxBorder: "border-indigo-300",
              selectPagination: "bg-white border border-indigo-200",
              surfaceMuted: "bg-white/70",
            },
          }}
        />
      </MobileFrame>
    </Page>
  ),
};

// ─── Estados ────────────────────────────────────────────────────────────────

export const Estados: Story = {
  parameters: noControls,
  render: () => (
    <Page>
      <MobileFrame label="loading sem dados (skeleton)">
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={[]}
          getRowId={(r) => String(r.id)}
          theme="light"
          loading
        />
      </MobileFrame>
      <MobileFrame label="loading com dados">
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={ALL_ORDERS.slice(0, 3)}
          getRowId={(r) => String(r.id)}
          theme="light"
          loading
        />
      </MobileFrame>
      <MobileFrame dark label="vazio + emptyMessage">
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={[]}
          getRowId={(r) => String(r.id)}
          theme="dark"
          emptyMessage="Nenhum pedido para os filtros selecionados"
        />
      </MobileFrame>
    </Page>
  ),
};

// ─── Seleção e ações ────────────────────────────────────────────────────────

/**
 * single: ações em cada card.
 * multiple: checkbox nos cards, "selecionar todos" e ações em lote no topo
 * (onEdit só habilita com 1 selecionado; onDelete roda para cada um).
 */
export const SelecaoEAcoes: Story = {
  parameters: noControls,
  render: () => {
    const Demo = ({ mode }: { mode: "single" | "multiple" }) => {
      const { log, panel } = useEventLog();
      const [rows, setRows] = useState(ALL_ORDERS.slice(0, 8));
      return (
        <MobileFrame label={`selectionMode="${mode}"`}>
          {panel}
          <CBDataTableMobile<Order>
            columns={autoColumns}
            data={rows}
            getRowId={(r) => String(r.id)}
            theme="light"
            selectionMode={mode}
            pageSize={4}
            onEdit={(r) => log(`onEdit: ${r.code}`)}
            onDelete={(r) => {
              log(`onDelete: ${r.code}`);
              setRows((prev) => prev.filter((x) => x.id !== r.id));
            }}
            actions={[
              {
                icon: <FiCopy size={18} />,
                color: "primary",
                children: "",
                disabled: (sel) => sel.length !== 1,
                onClick: ([r]) => log(`Duplicar: ${r.code}`),
              },
              {
                icon: <FiSend size={18} />,
                color: "success",
                children: "",
                disabled: (sel) =>
                  sel.length === 0 || sel.some((r) => r.status !== "Pago"),
                onClick: (sel) =>
                  log(`Enviar: ${sel.map((r) => r.code).join(", ")}`),
              },
            ]}
          />
        </MobileFrame>
      );
    };
    return (
      <Page>
        <Demo mode="single" />
        <Demo mode="multiple" />
      </Page>
    );
  },
};

// ─── Edição ─────────────────────────────────────────────────────────────────

/**
 * - Quantidade: número (min 1, max 99), editável só se não estiver cancelado
 * - Observações: texto, fica nos detalhes ("Ver mais")
 * - Esquerda: clique único + autoFocusFirstEditableCell
 * - Direita: clique duplo (singleClickEdit=false) + defaultExpanded
 * Enter confirma, Esc cancela, sair do campo confirma.
 */
export const Edicao: Story = {
  parameters: noControls,
  render: () => {
    const Demo = ({ single }: { single: boolean }) => {
      const { log, panel } = useEventLog();
      const [rows, setRows] = useState(ALL_ORDERS.slice(0, 6));
      const update = (id: number | undefined, patch: Partial<Order>) =>
        setRows((prev) =>
          prev.map((r) => (r.id === id ? { ...r, ...patch } : r)),
        );

      return (
        <MobileFrame
          label={single ? "clique único + autoFocus" : "clique duplo + expandido"}
        >
          {panel}
          <CBDataTableMobile<Order>
            columns={[
              { field: "customer.name", headerName: "Cliente" },
              {
                field: "status",
                headerName: "Situação",
                render: (r) => <StatusBadge status={r.status} />,
              },
              {
                field: "quantity",
                headerName: "Quantidade",
                editable: (p) => p.data?.status !== "Cancelado",
                cellEditor: "agNumberCellEditor",
                cellEditorParams: { min: 1, max: 99, precision: 0 },
              },
              { field: "unitPrice", headerName: "Preço", mask: "currency" },
              {
                colId: "total",
                headerName: "Total",
                mask: "currency",
                mobile: "trailing",
                valueGetter: (p) =>
                  (p.data?.quantity ?? 0) * (p.data?.unitPrice ?? 0),
              },
              {
                field: "notes",
                headerName: "Observações",
                mobile: "detail",
                editable: true,
                cellEditor: "agTextCellEditor",
              },
            ]}
            data={rows}
            getRowId={(r) => String(r.id)}
            theme="light"
            singleClickEdit={single}
            autoFocusFirstEditableCell={single}
            defaultExpanded={!single}
            onCellValueChanged={(p) => {
              const field = p.colDef.field as keyof Order;
              log(
                `${String(field)}: ${String(p.oldValue)} → ${String(p.newValue)}`,
              );
              update(p.data?.id, {
                [field]: field === "quantity" ? Number(p.newValue ?? 0) : p.newValue,
              } as Partial<Order>);
            }}
          />
        </MobileFrame>
      );
    };
    return (
      <Page>
        <Demo single />
        <Demo single={false} />
      </Page>
    );
  },
};

// ─── Paginação ──────────────────────────────────────────────────────────────

/** Paginação no servidor: page, totalRows, onPageChange, onPageSizeChange e loading */
export const PaginacaoServidor: Story = {
  parameters: noControls,
  render: () => {
    const Demo = () => {
      const [page, setPage] = useState(0);
      const [size, setSize] = useState(10);
      const [rows, setRows] = useState<Order[]>([]);
      const [total, setTotal] = useState(0);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        setLoading(true);
        fakeFetchOrders(page, size).then((res) => {
          setRows(res.data);
          setTotal(res.total);
          setLoading(false);
        });
      }, [page, size]);

      return (
        <MobileFrame label="server">
          <CBDataTableMobile<Order>
            columns={autoColumns}
            data={rows}
            getRowId={(r) => String(r.id)}
            theme="light"
            page={page}
            pageSize={size}
            totalRows={total}
            loading={loading}
            onPageChange={setPage}
            onPageSizeChange={(s) => {
              setSize(s);
              setPage(0);
            }}
          />
        </MobileFrame>
      );
    };
    return (
      <Page>
        <Demo />
      </Page>
    );
  },
};

/** Paginação local (client) e sem rodapé (showFooter=false) */
export const PaginacaoClienteESemRodape: Story = {
  parameters: noControls,
  render: () => (
    <Page>
      <MobileFrame label="client, pageSize=3">
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={ALL_ORDERS}
          getRowId={(r) => String(r.id)}
          theme="light"
          pageSize={3}
        />
      </MobileFrame>
      <MobileFrame label="showFooter=false">
        <CBDataTableMobile<Order>
          columns={autoColumns}
          data={ALL_ORDERS.slice(0, 4)}
          getRowId={(r) => String(r.id)}
          theme="light"
          pageSize={10}
          showFooter={false}
        />
      </MobileFrame>
    </Page>
  ),
};

// ─── Colunas ────────────────────────────────────────────────────────────────

/**
 * - render: badge de situação
 * - cellClass (string e função): destaca valores
 * - valueGetter: recebe `{ data }` igual ao AG Grid
 * - masks: currency, tel, cpf
 * - children: colunas agrupadas são "achatadas" no mobile
 * - field com ponto: campos aninhados (customer.city)
 */
export const RecursosDeColuna: Story = {
  parameters: noControls,
  render: () => (
    <Page>
      <MobileFrame label="render, cellClass, valueGetter, masks, children">
        <CBDataTableMobile<Order>
          columns={[
            { field: "code", headerName: "Pedido" },
            {
              field: "status",
              headerName: "Situação",
              render: (r) => <StatusBadge status={r.status} />,
            },
            {
              headerName: "Cliente",
              children: [
                { field: "customer.name", headerName: "Nome" },
                { field: "customer.city", headerName: "Cidade" },
              ],
            },
            {
              colId: "lots",
              headerName: "Lotes",
              valueGetter: (p) => p.data?.lots.length,
              cellClass: (p) =>
                p.data?.lots.length ? "text-emerald-600!" : "text-rose-500!",
            },
            {
              colId: "total",
              headerName: "Total",
              mask: "currency",
              cellClass: "font-bold!",
              valueGetter: (p) =>
                (p.data?.quantity ?? 0) * (p.data?.unitPrice ?? 0),
            },
            { field: "phone", headerName: "Telefone", mask: "tel" },
            { field: "cpf", headerName: "CPF", mask: "cpf" },
          ]}
          data={ALL_ORDERS.slice(0, 6)}
          getRowId={(r) => String(r.id)}
          theme="light"
          defaultExpanded
        />
      </MobileFrame>
    </Page>
  ),
};
