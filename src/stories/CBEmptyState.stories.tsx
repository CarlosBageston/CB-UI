
import { FiCreditCard } from "react-icons/fi";
import CBEmptyState from "../components/CBEmptyState";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CBEmptyState> = {
    title: "Components/CBEmptyState",
    component: CBEmptyState,
    args: {
        title: "Nada por aqui",
        onButtonClick: () => alert("Botão clicado!"),
    },
};

export default meta;

type Story = StoryObj<typeof CBEmptyState>;

export const Default: Story = {};

export const Transactions: Story = {
    args: {
        title: "Sem transações",
        icon: <FiCreditCard />,
    },
};

export const CustomMessages: Story = {
    args: {
        messages: [
            "🌟 Aqui você ainda não fez nada!",
            "🤷‍♂️ Nada encontrado. Vamos adicionar algo?",
        ],
        title: "Personalizado",
        buttonLabel: "Adicionar Item",
    },
};