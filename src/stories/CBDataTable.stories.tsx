// CBDataTable.stories.tsx
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBDataTable, CBFilterBar } from "../components";

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
  { id: 1, name: "Carlos", role: "Admin", age: 28, email: "V2aQs@example.com", phone: "1234567890" },
  { id: 2, name: "Maria", role: "User", age: 25, email: "9aTt8@example.com", phone: "9876543210" },
  { id: 3, name: "João", role: "Manager", age: 35, email: "jFt9o@example.com", phone: "5555555555" },
  { id: 4, name: "Ana", role: "User", age: 30, email: "8dE2s@example.com", phone: "1111111111" },
  { id: 5, name: "Pedro", role: "Admin", age: 40, email: "V2aQs@example.com", phone: "2222222222" },
  { id: 6, name: "Julia", role: "User", age: 27, email: "9aTt8@example.com", phone: "3333333333" },
  { id: 7, name: "Rafael", role: "Manager", age: 32, email: "jFt9o@example.com", phone: "4444444444" },
  { id: 8, name: "Leticia", role: "User", age: 29, email: "8dE2s@example.com", phone: "5555555555" },
  { id: 9, name: "Guilherme", role: "Admin", age: 38, email: "V2aQs@example.com", phone: "6666666666" },
  { id: 10, name: "Fernanda", role: "User", age: 31, email: "9aTt8@example.com", phone: "7777777777" },
  { id: 11, name: "Thiago", role: "Manager", age: 33, email: "jFt9o@example.com", phone: "8888888888" },
  { id: 12, name: "Isabella", role: "User", age: 26, email: "8dE2s@example.com", phone: "9999999999" },
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

        <CBDataTable<User> columns={[
          { field: 'name', headerName: 'Nome', },
          { field: 'role', headerName: 'Cargo', },
        ]} data={filtered} pageSize={4} />
      </div>
    );
  },
};


// 2. Table com dados simples
export const WithData: Story = {
  render: () => {

    return <CBDataTable<User>
      columns={[
        { field: 'name', headerName: 'Nome', col: 2 },
        { field: 'role', headerName: 'Cargo', col: 2 },
        { field: 'age', headerName: 'Idade', col: 2 },
        { field: 'email', headerName: 'E-mail', col: 2 },
        { field: 'phone', headerName: 'Telefone', col: 2 },
        {
          colId: 'situacao',
          headerName: 'Situação do usuário',
          col: 2,
          valueGetter: () => (Math.random() > 0.5 ? 'Ativo' : 'Inativo'),
        }, //campo que nao existe nos arrey de dados, mas pode ser utilizado no valueGetter passando o colID
      ]}
      data={mockData}
      pageSize={4}
      emptyMessage="Nenhum usuário encontrado"
      onEdit={(e) => { console.log(e) }}
      onDelete={() => { console.log("onDelete") }}
    />;
  },
};

// 3. Table vazia
export const Empty: Story = {
  render: () => {

    return (
      <CBDataTable<User>
        columns={[
          { field: 'name', headerName: 'Nome', col: 2 },
          { field: 'role', headerName: 'Cargo', col: 2 },
          { field: 'age', headerName: 'Idade', col: 2 },
          { field: 'email', headerName: 'E-mail', col: 2 },
          { field: 'phone', headerName: 'Telefone', col: 2 },
        ]}
        data={[]}
        emptyMessage="Nenhum usuário encontrado"
        pageSize={3}
      />
    );
  },
};
