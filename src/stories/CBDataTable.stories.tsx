// CBDataTable.stories.tsx
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBFilterBar } from "..";
import CBDataTable from "../components/CBDataTable";

interface User {
  id: number;
  name: string;
  role: string;
  age: number;
  email: string;
  phone: string;
}

const meta: Meta<typeof CBDataTable<User>> = {
  title: "Form/CBDataTable",
  component: CBDataTable<User>,
};

export default meta;
type Story = StoryObj<typeof CBDataTable<User>>;

const mockData: User[] = [
  {
    id: 1,
    name: "Carlos",
    role: "Admin",
    age: 28,
    email: "V2aQs@example.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Maria",
    role: "User",
    age: 25,
    email: "9aTt8@example.com",
    phone: "9876543210",
  },
  {
    id: 3,
    name: "João",
    role: "Manager",
    age: 35,
    email: "jFt9o@example.com",
    phone: "5555555555",
  },
  {
    id: 4,
    name: "Ana",
    role: "User",
    age: 30,
    email: "8dE2s@example.com",
    phone: "1111111111",
  },
  {
    id: 5,
    name: "Pedro",
    role: "Admin",
    age: 40,
    email: "V2aQs@example.com",
    phone: "2222222222",
  },
  {
    id: 6,
    name: "Julia",
    role: "User",
    age: 27,
    email: "9aTt8@example.com",
    phone: "3333333333",
  },
  {
    id: 7,
    name: "Rafael",
    role: "Manager",
    age: 32,
    email: "jFt9o@example.com",
    phone: "4444444444",
  },
  {
    id: 8,
    name: "Leticia",
    role: "User",
    age: 29,
    email: "8dE2s@example.com",
    phone: "5555555555",
  },
  {
    id: 9,
    name: "Guilherme",
    role: "Admin",
    age: 38,
    email: "V2aQs@example.com",
    phone: "6666666666",
  },
  {
    id: 10,
    name: "Fernanda",
    role: "User",
    age: 31,
    email: "9aTt8@example.com",
    phone: "7777777777",
  },
  {
    id: 11,
    name: "Thiago",
    role: "Manager",
    age: 33,
    email: "jFt9o@example.com",
    phone: "8888888888",
  },
  {
    id: 12,
    name: "Isabella",
    role: "User",
    age: 26,
    email: "8dE2s@example.com",
    phone: "9999999999",
  },
];

export const WithFilter: Story = {
  render: () => {
    const [filtered, setFiltered] = useState<User[]>(mockData);
    return (
      <div className="space-y-3">
        <CBFilterBar<User>
          data={mockData}
          columns={[
            { value: "name", label: "Nome" },
            { value: "role", label: "Cargo" },
          ]}
          onChange={setFiltered}
          className="w-[400px]"
        />

        <CBDataTable<User>
          columns={[
            { field: "name", headerName: "Nome" },
            { field: "role", headerName: "Cargo" },
          ]}
          data={filtered}
          pageSize={4}
        />
      </div>
    );
  },
};

// 2. Table com dados simples
export const WithData: Story = {
  render: () => {
    return (
      <CBDataTable<User>
        columns={[
          { field: "name", headerName: "Nome", col: 2 },
          { field: "role", headerName: "Cargo", col: 2 },
          { field: "age", headerName: "Idade", col: 2 },
          { field: "email", headerName: "E-mail", col: 2 },
          { field: "phone", headerName: "Telefone", col: 2 },
          {
            colId: "situacao",
            headerName: "Situação do usuário",
            col: 2,
            valueGetter: () => (Math.random() > 0.5 ? "Ativo" : "Inativo"),
          }, //campo que nao existe nos arrey de dados, mas pode ser utilizado no valueGetter passando o colID
        ]}
        data={mockData}
        pageSize={4}
        emptyMessage="Nenhum usuário encontrado"
        onEdit={(e: User) => {
          console.log(e);
        }}
        onDelete={() => {
          console.log("onDelete");
        }}
      />
    );
  },
};

// 3. Table vazia
export const Empty: Story = {
  render: () => {
    return (
      <CBDataTable<User>
        columns={[
          { field: "name", headerName: "Nome", col: 2 },
          { field: "role", headerName: "Cargo", col: 2 },
          { field: "age", headerName: "Idade", col: 2 },
          { field: "email", headerName: "E-mail", col: 2 },
          { field: "phone", headerName: "Telefone", col: 2 },
        ]}
        data={[]}
        emptyMessage="Nenhum usuário encontrado"
        pageSize={3}
      />
    );
  },
};

// 4. Colunas agrupadas (ColGroupDef)
// Testa se o flex fica proporcional corretamente DENTRO do grupo
// (era o bug do totalCol calculado errado na versão antiga).
export const GroupedColumns: Story = {
  render: () => {
    return (
      <CBDataTable<User>
        columns={[
          { field: "name", headerName: "Nome", col: 2 },
          {
            headerName: "Dados pessoais",
            col: 3,
            children: [
              { field: "age", headerName: "Idade", col: 1 },
              { field: "role", headerName: "Cargo", col: 2 },
            ],
          },
          {
            headerName: "Contato",
            col: 4,
            children: [
              { field: "email", headerName: "E-mail", col: 3 },
              { field: "phone", headerName: "Telefone", col: 1 },
            ],
          },
        ]}
        data={mockData}
        pageSize={5}
      />
    );
  },
};

// 5. Render customizado por célula (cellRenderer via `render`)
// Ex: badge colorido por role, e formatação de telefone.
export const CustomRender: Story = {
  render: () => {
    const roleColor: Record<string, string> = {
      Admin: "bg-red-500/20 text-red-400",
      Manager: "bg-blue-500/20 text-blue-400",
      User: "bg-gray-500/20 text-gray-300",
    };

    return (
      <CBDataTable<User>
        columns={[
          { field: "name", headerName: "Nome", col: 2 },
          {
            field: "role",
            headerName: "Cargo",
            col: 2,
            align: "center",
            render: (user) => (
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${roleColor[user.role]}`}
              >
                {user.role}
              </span>
            ),
          },
          {
            field: "phone",
            headerName: "Telefone",
            col: 2,
            render: (user) =>
              user.phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
          },
        ]}
        data={mockData}
        pageSize={5}
      />
    );
  },
};

// 6. getRowId + edição/remoção alterando o array
// Testa a reconciliação correta de linhas (sem esse prop, o AG Grid
// pode perder seleção/estado ao remover/editar por índice).
export const WithGetRowIdAndCrud: Story = {
  render: () => {
    const [rows, setRows] = useState<User[]>(mockData);

    const handleDelete = (user: User) => {
      setRows((prev) => prev.filter((r) => r.id !== user.id));
    };

    const handleEdit = (user: User) => {
      setRows((prev) =>
        prev.map((r) =>
          r.id === user.id ? { ...r, name: `${r.name} (editado)` } : r,
        ),
      );
    };

    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-400">
          Linhas restantes: {rows.length}. Delete/edite e confirme que a
          seleção/página não bagunça (graças ao getRowId).
        </p>
        <CBDataTable<User>
          columns={[
            { field: "name", headerName: "Nome", col: 2 },
            { field: "role", headerName: "Cargo", col: 2 },
            { field: "age", headerName: "Idade", col: 1 },
          ]}
          data={rows}
          pageSize={4}
          getRowId={(user) => String(user.id)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    );
  },
};

// 7. Passthrough de propriedades nativas do ColDef (sortable, filter, pinned)
// Testa o fix do spread no mapColumn: antes essas props eram aceitas
// pelo TS mas silenciosamente ignoradas em runtime.
export const NativeColDefPassthrough: Story = {
  render: () => {
    return (
      <CBDataTable<User>
        columns={[
          {
            field: "name",
            headerName: "Nome",
            col: 2,
            pinned: "left",
            sortable: true,
          },
          {
            field: "role",
            headerName: "Cargo",
            col: 2,
            sortable: true,
            filter: true,
          },
          { field: "age", headerName: "Idade", col: 1, sortable: true },
          { field: "email", headerName: "E-mail", col: 2 },
        ]}
        data={mockData}
        pageSize={6}
      />
    );
  },
};

// 8. Alinhamento de colunas (left / center / right)
export const ColumnAlignment: Story = {
  render: () => {
    return (
      <CBDataTable<User>
        columns={[
          { field: "name", headerName: "Nome (left)", col: 2, align: "left" },
          {
            field: "age",
            headerName: "Idade (center)",
            col: 1,
            align: "center",
          },
          {
            field: "phone",
            headerName: "Telefone (right)",
            col: 2,
            align: "right",
          },
        ]}
        data={mockData}
        pageSize={5}
      />
    );
  },
};

// 9. Somente visualização (sem onEdit/onDelete -> sem botões flutuantes)
export const ReadOnly: Story = {
  render: () => {
    return (
      <CBDataTable<User>
        columns={[
          { field: "name", headerName: "Nome", col: 2 },
          { field: "role", headerName: "Cargo", col: 2 },
          { field: "email", headerName: "E-mail", col: 3 },
        ]}
        data={mockData}
        pageSize={5}
      />
    );
  },
};

// 10.5 Seleção múltipla + exclusão em lote
export const MultiSelectDelete: Story = {
  render: () => {
    const [rows, setRows] = useState<User[]>(mockData);

    const handleDelete = (user: User) => {
      // Chamado uma vez por linha selecionada quando selectionMode="multiple"
      setRows((prev) => prev.filter((r) => r.id !== user.id));
    };

    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-400">
          Marque várias linhas pelo checkbox (ou use o checkbox do header pra
          marcar tudo) e clique em excluir. Linhas restantes: {rows.length}.
        </p>
        <CBDataTable<User>
          columns={[
            { field: "name", headerName: "Nome", col: 2 },
            { field: "role", headerName: "Cargo", col: 2 },
            { field: "age", headerName: "Idade", col: 1 },
          ]}
          data={rows}
          pageSize={6}
          selectionMode="multiple"
          getRowId={(user) => String(user.id)}
          onDelete={handleDelete}
        />
      </div>
    );
  },
};

// 11. Muitas linhas + paginação pequena, pra testar navegação entre páginas
export const ManyRowsPagination: Story = {
  render: () => {
    const bigData: User[] = Array.from({ length: 60 }, (_, i) => ({
      id: i + 1,
      name: `Usuário ${i + 1}`,
      role: ["Admin", "User", "Manager"][i % 3],
      age: 20 + (i % 40),
      email: `user${i + 1}@example.com`,
      phone: `1${String(i).padStart(9, "0")}`,
    }));

    return (
      <CBDataTable<User>
        columns={[
          { field: "name", headerName: "Nome", col: 2 },
          { field: "role", headerName: "Cargo", col: 2 },
          { field: "age", headerName: "Idade", col: 1 },
        ]}
        data={bigData}
        pageSize={5}
        getRowId={(user) => String(user.id)}
      />
    );
  },
};
