import { useCallback, useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBDataTableMobile } from "../datatable";
import { mockData, type User } from "../helper/mockDataUser";
import {
  fakeFetchUsers,
  userColumns,
  type MockUser,
  type PaginationDto,
} from "../helper/mockPagination";

const meta: Meta<typeof CBDataTableMobile<User>> = {
  title: "Form/CBDataTableMobile",
  component: CBDataTableMobile<User>,
};

export default meta;
type Story = StoryObj<typeof CBDataTableMobile<User>>;
const MobileFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center bg-slate-200 min-h-screen">
      <div className="w-[390px] h-[800px] max-h-[800px] overflow-auto rounded-4xl p-2 border-8 border-slate-900  shadow-2xl bg-white">
        {children}
      </div>
    </div>
  );
};

export const ServerPagination: Story = {
  render: () => {
    const ServerPaginationDemo = () => {
      const [page, setPage] = useState(0);
      const [pageSize, setPageSize] = useState(10);
      const [response, setResponse] = useState<PaginationDto<MockUser>>();
      const [loading, setLoading] = useState(false);

      const load = useCallback(() => {
        setLoading(true);
        fakeFetchUsers({ page, size: pageSize })
          .then(setResponse)
          .finally(() => setLoading(false));
      }, [page, pageSize]);

      useEffect(() => {
        load();
      }, [load]);

      return (
        <CBDataTableMobile
          columns={userColumns}
          // theme="light"
          data={response?.data ?? []}
          page={page}
          pageSize={pageSize}
          totalRows={response?.totalElements ?? 0}
          onPageChange={setPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setPage(0);
          }}
          loading={loading}
          getRowId={(u: MockUser) => String(u.id)}
        />
      );
    };

    return (
      <MobileFrame>
        <ServerPaginationDemo />
      </MobileFrame>
    );
  },
};
// 2. Table com dados simples
export const WithData: Story = {
  render: () => {
    return (
      <MobileFrame>
        <CBDataTableMobile<User>
          getRowId={(item) => item.id.toString()}
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
      </MobileFrame>
    );
  },
};

// 3. Table vazia
export const Empty: Story = {
  render: () => {
    return (
      <MobileFrame>
        <CBDataTableMobile<User>
          getRowId={(item) => item.id.toString()}
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
      </MobileFrame>
    );
  },
};

// 4. Colunas agrupadas (ColGroupDef)
// Testa se o flex fica proporcional corretamente DENTRO do grupo
// (era o bug do totalCol calculado errado na versão antiga).
export const GroupedColumns: Story = {
  render: () => {
    return (
      <MobileFrame>
        <CBDataTableMobile<User>
          getRowId={(item) => item.id.toString()}
          theme="light"
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
      </MobileFrame>
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
      <MobileFrame>
        <CBDataTableMobile<User>
          getRowId={(item) => item.id.toString()}
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
      </MobileFrame>
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
      <MobileFrame>
        <div className="space-y-3">
          <p className="text-sm text-gray-400">
            Linhas restantes: {rows.length}. Delete/edite e confirme que a
            seleção/página não bagunça (graças ao getRowId).
          </p>
          <CBDataTableMobile<User>
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
      </MobileFrame>
    );
  },
};

// 7. Passthrough de propriedades nativas do ColDef (sortable, filter, pinned)
// Testa o fix do spread no mapColumn: antes essas props eram aceitas
// pelo TS mas silenciosamente ignoradas em runtime.
export const NativeColDefPassthrough: Story = {
  render: () => {
    return (
      <MobileFrame>
        <CBDataTableMobile<User>
          getRowId={(item) => item.id.toString()}
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
      </MobileFrame>
    );
  },
};

// 8. Alinhamento de colunas (left / center / right)
export const ColumnAlignment: Story = {
  render: () => {
    return (
      <MobileFrame>
        <CBDataTableMobile<User>
          getRowId={(item) => item.id.toString()}
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
      </MobileFrame>
    );
  },
};

// 8.5. Teste explícito e isolado de alinhamento
// Objetivo: confirmar visualmente se as classes ag-cell-left/center/right
// realmente aplicam text-align/justify-content nas células. Se o conteúdo
// aparecer sempre no mesmo lugar independente da coluna, o problema é CSS
// ausente para essas classes (não é lógica do mapColumn).
export const AlignmentDebug: Story = {
  render: () => {
    const debugData = [{ id: 1, label: "AAAA" }];

    return (
      <MobileFrame>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            As 3 colunas abaixo têm o MESMO valor ("AAAA"). Se o alinhamento
            estiver funcionando, o texto deve aparecer encostado à esquerda na
            1ª coluna, centralizado na 2ª, e encostado à direita na 3ª.
          </p>
          <CBDataTableMobile<{ id: number; label: string }>
            getRowId={(item) => item.id.toString()}
            columns={[
              {
                field: "label",
                colId: "left",
                headerName: "align: left",
                col: 1,
                align: "left",
              },
              {
                field: "label",
                colId: "center",
                headerName: "align: center",
                col: 1,
                align: "center",
              },
              {
                field: "label",
                colId: "right",
                headerName: "align: right",
                col: 1,
                align: "right",
              },
            ]}
            data={debugData}
            pageSize={1}
          />
        </div>
      </MobileFrame>
    );
  },
};

// 9. Somente visualização (sem onEdit/onDelete -> sem botões flutuantes)
export const ReadOnly: Story = {
  render: () => {
    return (
      <MobileFrame>
        <CBDataTableMobile<User>
          getRowId={(item) => item.id.toString()}
          columns={[
            { field: "name", headerName: "Nome", col: 2 },
            { field: "role", headerName: "Cargo", col: 2 },
            { field: "email", headerName: "E-mail", col: 3 },
          ]}
          data={mockData}
          pageSize={5}
        />
      </MobileFrame>
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
      <MobileFrame>
        <div className="space-y-3">
          <p className="text-sm text-gray-400">
            Marque várias linhas pelo checkbox (ou use o checkbox do header pra
            marcar tudo) e clique em excluir. Linhas restantes: {rows.length}.
          </p>
          <CBDataTableMobile<User>
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
      </MobileFrame>
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
      <MobileFrame>
        <CBDataTableMobile<User>
          columns={[
            { field: "name", headerName: "Nome", col: 2 },
            { field: "role", headerName: "Cargo", col: 2 },
            { field: "age", headerName: "Idade", col: 1 },
          ]}
          data={bigData}
          pageSize={5}
          getRowId={(user) => String(user.id)}
        />
      </MobileFrame>
    );
  },
};
