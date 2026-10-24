import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import CBDataTableWithFilter from "../components/dataTable/CBDataTableWithFilter";
import CBSegment from "../components/CBSegment/CBSegment";
import CBButton from "../components/CBButton";
import type {
  CBDataTableHandle,
  CBTableColumn,
  CBTableQuery,
} from "../types/componentsDataTable";

interface Person {
  id: string;
  name: string;
  role: "Admin" | "User" | "Guest";
  age: number;
  city: { name: string };
}

const NAMES = ["Carlos", "Maria", "João", "Ana", "Pedro", "Julia", "Lucas", "Bruna", "Rafael", "Camila"];
const CITIES = ["Dois Vizinhos", "Pato Branco", "Francisco Beltrão", "Curitiba"];
const ROLES: Person["role"][] = ["Admin", "User", "Guest"];

// "Banco" em memória — simula o backend
const seed = (): Person[] =>
  Array.from({ length: 87 }, (_, i) => ({
    id: String(i + 1),
    name: `${NAMES[i % NAMES.length]} ${i + 1}`,
    role: ROLES[i % ROLES.length],
    age: 18 + ((i * 7) % 50),
    city: { name: CITIES[i % CITIES.length] },
  }));
let DB: Person[] = seed();

const getPath = (obj: unknown, path: string) =>
  path.split(".").reduce<unknown>((acc, key) => (acc as Record<string, unknown>)?.[key], obj);

type Filters = { role: Person["role"] | "ALL" };

/** Simula `GET /people?page=&size=&sortBy=&...` com latência. */
function fakeApi(query: CBTableQuery<Filters>, signal: AbortSignal) {
  return new Promise<{ rows: Person[]; total: number }>((resolve, reject) => {
    const timer = setTimeout(() => {
      let rows = [...DB];

      if (query.filters.role !== "ALL") {
        rows = rows.filter((p) => p.role === query.filters.role);
      }

      if (query.search) {
        const term = query.search.term.toLowerCase();
        const cols = query.search.column ? [query.search.column] : query.search.columns;
        rows = rows.filter((p) => cols.some((c) => String(getPath(p, c)).toLowerCase().includes(term)));
      }

      if (query.sort) {
        const { field, direction } = query.sort;
        rows.sort((a, b) => {
          const va = getPath(a, field) as string | number;
          const vb = getPath(b, field) as string | number;
          const cmp = va < vb ? -1 : va > vb ? 1 : 0;
          return direction === "asc" ? cmp : -cmp;
        });
      }

      const start = query.page * query.pageSize;
      resolve({ rows: rows.slice(start, start + query.pageSize), total: rows.length });
    }, 600);

    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}

const columns: CBTableColumn<Person>[] = [
  { field: "name", headerName: "Nome", col: 2 },
  { field: "role", headerName: "Perfil", col: 1 },
  { field: "age", headerName: "Idade", col: 1 },
  { field: "city.name", headerName: "Cidade", col: 2 },
];

const meta: Meta<typeof CBDataTableWithFilter<Person, Filters>> = {
  title: "Form/CBDataTableWithFilter/Server",
  component: CBDataTableWithFilter<Person, Filters>,
};

export default meta;
type Story = StoryObj<typeof CBDataTableWithFilter<Person, Filters>>;

export const ServerSide: Story = {
  beforeEach: () => {
    DB = seed();
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const footer = (text: string) =>
      waitFor(() => expect(canvasElement.textContent).toContain(text), { timeout: 4000 });

    // Carga inicial: 87 registros, 10 por página
    await footer("Total de 87 registros");
    await footer("Página 1 de 9");

    // Ordenação no servidor pelo cabeçalho
    const firstAge = () =>
      canvasElement.querySelector(".ag-row[row-index='0'] [col-id='age']")?.textContent;
    await userEvent.click(await canvas.findByText("Idade"));
    await waitFor(() => expect(firstAge()).toBe("18"), { timeout: 4000 });
    await userEvent.click(canvas.getByText("Idade"));
    await waitFor(() => expect(firstAge()).toBe("67"), { timeout: 4000 });

    // Paginação
    const next = await waitFor(() => {
      const btn = canvas.getByText("Próxima").closest("ion-button")!;
      expect(btn.classList.contains("button-disabled")).toBe(false);
      expect(getComputedStyle(btn).pointerEvents).not.toBe("none");
      return btn;
    });
    await userEvent.click(next);
    await footer("Página 2 de 9");

    // Filtro externo volta para a página 0
    await userEvent.click(canvas.getByRole("radio", { name: "Admin" }));
    await footer("Total de 29 registros");
    await footer("Página 1 de 3");

    // Busca no servidor (debounce)
    const input = await waitFor(() => {
      const el = canvasElement.querySelector<HTMLInputElement>("ion-input input");
      expect(el).not.toBeNull();
      return el!;
    });
    await userEvent.type(input, "Carlos");
    await footer("Total de 3 registros");

    // Excluir recarrega sozinho (no desktop, seleciona a linha antes)
    await userEvent.click(await canvas.findByText("Carlos 1"));
    const del = await waitFor(() => {
      const btn = canvasElement.querySelector<HTMLElement>("ion-button[aria-label='Excluir']")!;
      expect(btn).not.toBeNull();
      expect(getComputedStyle(btn).pointerEvents).not.toBe("none");
      return btn;
    });
    await userEvent.click(del);
    await footer("Total de 2 registros");
  },
  render: () => {
    const [role, setRole] = useState<Filters["role"]>("ALL");
    const tableRef = useRef<CBDataTableHandle>(null);

    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <CBSegment
            aria-label="Perfil"
            variant="pills"
            size="small"
            rounded="full"
            items={["ALL", ...ROLES]}
            getLabel={(r) => (r === "ALL" ? "Todos" : r)}
            value={role}
            onValueChange={(r) => setRole(r as Filters["role"])}
          />
          <CBButton size="small" variant="outline" onClick={() => tableRef.current?.reload()}>
            Recarregar
          </CBButton>
        </div>

        <CBDataTableWithFilter<Person, Filters>
          tableRef={tableRef}
          columns={columns}
          getRowId={(p) => p.id}
          filters={{ role }}
          fetchData={fakeApi}
          pageSize={10}
          initialSort={{ field: "name", direction: "asc" }}
          filterColumns={[
            { label: "Nome", value: "name" },
            { label: "Cidade", value: "city.name" },
          ]}
          filterPlaceholder="Pesquisar pessoa"
          onEdit={(p) => alert(`Editar ${p.name}`)}
          onDelete={async (p) => {
            await new Promise((r) => setTimeout(r, 300));
            DB = DB.filter((x) => x.id !== p.id);
          }}
          onFetchError={(err) => console.error(err)}
        />
      </div>
    );
  },
};
