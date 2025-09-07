import type { Meta, StoryObj } from "@storybook/react-vite";
import CBToast from "../components/CBToast";
import { showCBToast } from "../hooks/cbToastController";
import { CBButton } from "../components";


const meta: Meta<typeof CBToast> = {
    title: "Feedback/CBToast",
    component: CBToast,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof CBToast>;

export const Playground: Story = {
    render: () => (
        <div className="flex flex-col gap-3 items-center">

            {/* Botões para disparar diferentes tipos */}
            <CBButton
                label="Mostrar Toast de sucesso"
                onClick={() => showCBToast({ message: "Operação concluída!", type: "success", duration: 5000000 })}
            />

            <CBButton
                label="Mostrar Toast de erro"
                onClick={() => showCBToast({ message: "Algo deu errado!", type: "error" })}
            />

            <CBButton
                label="Mostrar Toast de atenção"
                onClick={() => showCBToast({ message: "Atenção necessária!", type: "warning" })}
            />

            <CBButton
                label="Mostrar Toast de informação"
                onClick={() => showCBToast({ message: "Informação útil!", type: "info" })}
            />
            {/* Renderizamos o Toast aqui */}
            <CBToast />
        </div>
    ),
};
