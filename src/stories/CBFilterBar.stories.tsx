import { useState } from "react";
import CBFilterBar, { type CBFilterOption } from "../components/CBFilterBar";
import type { Meta, StoryObj } from "@storybook/react-vite";

interface User {
    name: string;
    role: string;
    age: number;
}

const mockData: User[] = [
    { name: "Carlos", role: "Developer", age: 28 },
    { name: "Ana", role: "Designer", age: 25 },
    { name: "João", role: "Manager", age: 35 },
    { name: "Maria", role: "Developer", age: 30 },
];

const columns: CBFilterOption[] = [
    { value: "name", label: "Nome" },
    { value: "role", label: "Cargo" },
    { value: "age", label: "Idade" },
];

const meta: Meta<typeof CBFilterBar> = {
    title: "Components/CBFilterBar",
    component: CBFilterBar,
};

export default meta;
type Story = StoryObj<typeof CBFilterBar>;

// ---------- Exemplos ----------

// 1️⃣ Filtrando usuários por qualquer coluna
export const Default: Story = {
    render: () => {
        const [filtered, setFiltered] = useState<User[]>(mockData);

        return (
            <div>
                <CBFilterBar<User>
                    data={mockData}
                    columns={columns}
                    onChange={setFiltered}
                />
                <pre>{JSON.stringify(filtered, null, 2)}</pre>
            </div>
        );
    },
};

// 2️⃣ Apenas filtro geral (sem coluna)
export const WithoutColumns: Story = {
    render: () => {
        const [filtered, setFiltered] = useState<User[]>(mockData);

        return (
            <div>
                <CBFilterBar<User> data={mockData} onChange={setFiltered} />
                <pre>{JSON.stringify(filtered, null, 2)}</pre>
            </div>
        );
    },
};

// 3️⃣ Filtro com colunas limitadas (ex.: apenas nome e cargo)
export const LimitedColumns: Story = {
    render: () => {
        const [filtered, setFiltered] = useState<User[]>(mockData);
        const limitedColumns = columns.filter(c => c.value !== "age");

        return (
            <div>
                <CBFilterBar<User>
                    data={mockData}
                    columns={limitedColumns}
                    onChange={setFiltered}
                />
                <pre>{JSON.stringify(filtered, null, 2)}</pre>
            </div>
        );
    },
};

// 4️⃣ Usando placeholder personalizado
export const CustomPlaceholder: Story = {
    render: () => {
        const [filtered, setFiltered] = useState<User[]>(mockData);

        return (
            <div>
                <CBFilterBar<User>
                    data={mockData}
                    columns={columns}
                    placeholder="Digite para buscar..."
                    onChange={setFiltered}
                />
                <pre>{JSON.stringify(filtered, null, 2)}</pre>
            </div>
        );
    },
};

// 5️⃣ Filtro inicial já com query
export const WithInitialQuery: Story = {
    render: () => {
        const [filtered, setFiltered] = useState<User[]>(mockData);

        return (
            <div>
                <CBFilterBar<User>
                    data={mockData}
                    columns={columns}
                    onChange={setFiltered}
                    initialQuery="João"
                />
                <pre>{JSON.stringify(filtered, null, 2)}</pre>
            </div>
        );
    },
};

// 6️⃣ Usando className personalizado
export const CustomClassNames: Story = {
    render: () => {
        const [filtered, setFiltered] = useState<User[]>(mockData);

        return (
            <div>
                <CBFilterBar<User>
                    data={mockData}
                    columns={columns}
                    onChange={setFiltered}
                    className="rounded-full bg-blue-50 p-4"       // arredondado e padding custom
                    inputClassName="text-sm font-medium"          // input menor e estilizado
                    selectClassName="text-blue-500"                 // select estilizado
                    style={{ maxWidth: 400 }}                     // largura máxima inline
                />
                <pre>{JSON.stringify(filtered, null, 2)}</pre>
            </div>
        );
    },
};