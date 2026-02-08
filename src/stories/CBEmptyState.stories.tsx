import { FiCreditCard } from "react-icons/fi";
import CBEmptyState from "../components/CBStateWrapper/CBEmptyState";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CBEmptyState> = {
    title: "Components/CBEmptyState",
    component: CBEmptyState,
    args: {
        title: "Nada por aqui",
        onButtonClick: () => alert("Botão clicado!"),
        isEmpty: true,
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

export const WithChildren: Story = {
    args: {
        isEmpty: false,
        children: (
            <div
                style={{
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                }}
            >
                <h3>🎉 Conteúdo Real</h3>
                <p>O EmptyState não aparece quando isEmpty = false.</p>
            </div>
        ),
    },
};

export const Themed: Story = {
    args: {
        title: "Custom Theme",
        messages: ["Tema aplicado com sucesso"],
        theme: {
            card: {
                backgroundColor: "#1e1e1e",
                color: "white",
                padding: "2rem",
            },
            message: { color: "#c2c2c2" },
            button: { backgroundColor: "#ff4d4d" },
        },
    },
};