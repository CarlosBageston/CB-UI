import type { Meta, StoryObj } from "@storybook/react-vite";
import CBToast from "../components/CBToast";


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

            {/* Renderizamos o Toast aqui */}
            <CBToast
                message="Operação concluida!"
                type="success"
                duration={5000}
                show
                onClose={() => { alert("Toast fechado!") }}
            />
        </div>
    ),
};
