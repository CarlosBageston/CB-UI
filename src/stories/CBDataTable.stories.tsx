import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBDataTable } from "../datatable";
import { mockData, type User } from "../helper/mockDataUser";

const meta: Meta<typeof CBDataTable<User>> = {
  title: "Form/CBDataTable",
  component: CBDataTable<User>,
};

export default meta;
type Story = StoryObj<typeof CBDataTable<User>>;

// 2. Table com dados simples
export const WithDataMobile: Story = {
  render: () => {
    return (
      <div className="space-y-3 max-w-100 flex">
        <CBDataTable<User>
          getRowId={(item) => item.id.toString()}
          modeTable="mobile"
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
      </div>
    );
  },
};

// 3. Table vazia
export const EmptyMobile: Story = {
  render: () => {
    return (
      <CBDataTable<User>
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
    );
  },
};
