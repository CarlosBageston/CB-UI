
import type { Meta, StoryObj } from "@storybook/react-vite";
import { IoPencil, IoTrash } from "react-icons/io5";
import { CBButton, CBCard } from "..";

const meta: Meta<typeof CBCard> = {
    title: "Components/CBCard",
    component: CBCard,
};

export default meta;
type Story = StoryObj<typeof CBCard>;

export const Default: Story = {
    render: () => (
        <CBCard title="Título do Card" subtitle="Subtítulo">
            Este é um card moderno usando Ionic e Tailwind.
        </CBCard>
    ),
};
export const RealisticCard: Story = {
    render: () => (
        <CBCard
            title="Pedido #12345"
            subtitle="Criado em 05/09/2025"
            collapsible
            defaultCollapsed={true}
            footer={
                <div className="flex flex-col items-start p-4 gap-2">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-sm font-medium">Total:</span>
                        <span className="text-sm font-semibold">R$ 123,45</span>
                    </div>
                    <div className="flex gap-2 w-full">
                        <CBButton color="danger" label="Cancelar" className="flex-1" variant="outline" />
                        <CBButton label="Confirmar" className="flex-1" />
                    </div>
                </div>
            }
        >
            <div className="flex flex-col gap-2">
                <p className="text-sm">
                    Cliente: <span className="font-medium">Carlos Bageston</span>
                </p>
                <p className="text-sm">
                    Status: <span className="font-semibold text-green-500">Concluído</span>
                </p>
                <p className="text-sm">
                    Observações: Entregar antes das 18h, sem talheres.
                </p>
                <div className="mt-2 flex flex-col gap-1">
                    <p className="text-sm font-medium">Itens do pedido:</p>
                    <ul className="list-disc list-inside text-sm">
                        <li>Marmita Grande - Frango x1</li>
                        <li>Marmita Média - Carne x2</li>
                        <li>Suco Natural x1</li>
                    </ul>
                </div>
            </div>
        </CBCard>
    ),
};


export const CollapsibleCard: Story = {
    render: () => (
        <CBCard
            title="Card Collapsible"
            subtitle="Clique no ícone para abrir/fechar"
            collapsible
            defaultCollapsed
        >
            Conteúdo expansível do card.
        </CBCard>
    ),
};

export const CardWithActions: Story = {
    render: () => (
        <CBCard
            title="Card com Ações"
            headerActions={
                <div className="flex gap-2">
                    <IoPencil className="cursor-pointer text-gray-500 dark:text-gray-300" />
                    <IoTrash className="cursor-pointer text-red-500" />
                </div>
            }
        >
            Conteúdo principal com ações no header.
        </CBCard>
    ),
};
