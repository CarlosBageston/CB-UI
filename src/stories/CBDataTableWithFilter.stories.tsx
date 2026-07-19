import type { Meta, StoryObj } from "@storybook/react-vite";
import CBDataTableWithFilter from "../components/dataTable/CBDataTableWithFilter";
import { mockData, type User } from "../helper/mockDataUser";

const meta: Meta<typeof CBDataTableWithFilter<User>> = {
  title: "Form/CBDataTableWithFilter",
  component: CBDataTableWithFilter<User>,
};

export default meta;
type Story = StoryObj<typeof CBDataTableWithFilter<User>>;
const MobileFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center bg-slate-200 min-h-screen">
      <div className="w-[390px] min-h-[700px] rounded-4xl p-2 border-8 border-slate-900 overflow-hidden shadow-2xl bg-white">
        {children}
      </div>
    </div>
  );
};

export const DefaultMobile: Story = {
  render: () => {
    return (
      <MobileFrame>
        <CBDataTableWithFilter<User>
          modeTable="mobile"
          data={mockData}
          getRowId={(user) => String(user.id)}
          columns={[
            {
              field: "name",
              headerName: "Nome muito grande para testar",
            },
            {
              field: "role",
              headerName: "Cargo",
            },
            {
              field: "age",
              headerName: "Idade",
            },
            {
              field: "email",
              headerName: "Email",
            },
          ]}
          filterColumns={[
            {
              value: "name",
              label: "Nome muito grande para testar",
            },
            {
              value: "email",
              label: "Email",
            },
            {
              value: "role",
              label: "Cargo",
            },
          ]}
          filterPlaceholder="Buscar usuário..."
          pageSize={5}
          onEdit={(user) => console.log("editar", user)}
          onDelete={(user) => console.log("deletar", user)}
        />
      </MobileFrame>
    );
  },
};

export const DefaultDesktop: Story = {
  render: () => {
    return (
      <>
        <CBDataTableWithFilter<User>
          modeTable="desktop"
          data={mockData}
          theme="dark"
          getRowId={(user) => String(user.id)}
          filterColumns={[{ label: "nome", value: "name" }]}
          columns={[
            {
              field: "name",
              headerName: "Nome",
            },
            {
              field: "role",
              headerName: "Cargo",
            },
            {
              field: "age",
              headerName: "Idade",
            },
            {
              field: "email",
              headerName: "Email",
            },
          ]}
          filterPlaceholder="Buscar usuário..."
          pageSize={5}
          onEdit={(user) => console.log("editar", user)}
          onDelete={(user) => console.log("deletar", user)}
        />
      </>
    );
  },
};
