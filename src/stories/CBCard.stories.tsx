
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBCard } from "..";

const meta: Meta<typeof CBCard> = {
    title: "Components/CBCard",
    component: CBCard,
};

export default meta;
type Story = StoryObj<typeof CBCard>;

export const Default: Story = {
    render: () => (
        <CBCard title="Título do Card" subtitle="Subtítulo">
            <div>

                Este é um card moderno usando Ionic e Tailwind.
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
export const RealisticCard: Story = {
    render: () => (
        <CBCard
            title="Pedido #12345"
            subtitle="Criado em 05/09/2025"
            collapsible
            defaultCollapsed={true}
            theme={{
                contentCard: {
                    padding: '0'
                }
            }}
            footer={
                <div className="flex flex-col items-start p-4 gap-2">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-sm font-medium">Total:</span>
                        <span className="text-sm font-semibold">R$ 123,45</span>
                    </div>
                </div>
            }
        >
            Conteúdo expansível do card.
        </CBCard>
    ),
};
export const CardWithActions: Story = {
    render: () => (
        <CBCard
            title="Card com Ações"
            onClickEdit={() => console.log("Edit")}
            onClickDelete={() => console.log("Delete")}
        >
            Conteúdo principal com ações no header.
        </CBCard>
    ),
};
