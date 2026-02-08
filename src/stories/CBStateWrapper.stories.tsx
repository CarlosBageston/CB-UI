import type { Meta, StoryObj } from "@storybook/react-vite";
import CBStateWrapper from "../components/CBStateWrapper/CBStateWrapper";
import { FiCreditCard } from "react-icons/fi";
import { useEffect, useState } from "react";

const meta: Meta<typeof CBStateWrapper> = {
    title: "Components/CBStateWrapper",
    component: CBStateWrapper,
    args: {
        minHeight: "200px",
    },
};

export default meta;

type Story = StoryObj<typeof CBStateWrapper>;

/* -------------------------------
   LOADING
--------------------------------*/
export const Loading: Story = {
    args: {
        isLoading: true,
        loadingLabel: "Carregando cartões...",
        theme: {
            loadingLabel: { color: "#ff0" },
            container: { border: "1px solid #ff0" },
        },
    },
};

/* -------------------------------
   EMPTY
--------------------------------*/
export const Empty: Story = {
    args: {
        isEmpty: true,
        emptyTitle: "Nenhum cartão cadastrado",
        emptyMessages: ["Adicione seu primeiro cartão para começar"],
        emptyIcon: <FiCreditCard size={40} />,
        data: [],
    },
};

/* -------------------------------
   ERRO
--------------------------------*/
export const Error: Story = {
    args: {
        error: "Erro ao buscar dados no servidor",
        onRetry: () => alert("Tentando novamente..."),
        theme: {
            errorTitle: { color: "#ff0" },
            container: { border: "1px solid #ff0" },

        },
        data: [],
    },
};

/* -------------------------------
   CONTENT
--------------------------------*/
export const Content: Story = {
    args: {
        children: (
            <div className="p-4 border border-gray-300 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-1">🎉 Conteúdo Real</h3>
                <p className="text-gray-600">
                    O wrapper mostra o conteúdo quando não está carregando, vazio ou com erro.
                </p>
            </div>
        ),
        data: [{ id: 1, name: "Conteúdo Real" }],
    },
};

/* -------------------------------
   EMPTY COM BOTÃO
--------------------------------*/
export const EmptyWithButton: Story = {
    args: {
        isEmpty: true,
        emptyTitle: "Nenhum cartão encontrado",
        onRetry: () => alert("Adicionar novo cartão"),
        data: [],
    },
};

export const LoadingFlash: React.FC = () => {
    const [data, setData] = useState<any[] | null>(null);

    useEffect(() => {
        // Simula carregamento rápido e piscada
        const timer = setTimeout(() => {
            setData([
                {
                    id: 1,
                    name: "Cartão 1",
                },
                {
                    id: 2,
                    name: "Cartão 2",
                },
            ]);
        }, 200); // 200ms de delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <CBStateWrapper
            data={data}
            emptyMessages={["Nenhum cartão cadastrado"]}
            loadingLabel="Carregando cartões..."
            theme={{ container: { border: "1px solid #f00" } }}
        >
            {data?.map((item: any, index: number) => (
                <div key={index}>Cartão {item.name}</div>
            ))}
        </CBStateWrapper>
    );
};