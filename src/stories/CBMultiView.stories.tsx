import type { Meta, StoryObj } from "@storybook/react-vite";
import { FiHome, FiActivity, FiAirplay } from "react-icons/fi";
import { CBMultiView } from "..";
import type { Step } from "../components/CBMultiView";

const meta: Meta<typeof CBMultiView> = {
    title: "Components/CBStepper",
    component: CBMultiView,
};
export default meta;

type Story = StoryObj<typeof CBMultiView>;

const steps: Step[] = [
    { title: "Passo 1", content: (<><p>Conteúdo do passo 1</p> <p>Conteúdo do passo 1</p></>), icon: <FiHome /> },
    { title: "Passo 2", content: <p>Conteúdo do passo 2</p>, icon: <FiActivity /> },
    { title: "Passo 3", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 4", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 5", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 6", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 7", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 8", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 9", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 12", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 14", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 432", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 312", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 1233", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 3123", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
    { title: "Passo 1233", content: <p>Conteúdo do passo 3</p>, icon: <FiAirplay /> },
];

export const Tabs: Story = {
    render: () => <CBMultiView
        variant="tabs"
        steps={steps}

    />,
};

export const TabsStyle: Story = {
    render: () => <CBMultiView
        variant="tabs"
        steps={steps}
        className="max-w-[300px] overflow-x-auto"
        theme={{
            tabs: {
                segment: {
                    background: "#f1f5f9",
                    padding: "6px",
                    borderRadius: "14px",
                    hideIndicator: true,
                    border: "2px solid #2563eb",
                },
                button: {
                    background: "black",
                    text: "#475569",
                    activeBackground: "#2563eb",
                    activeText: "black",
                    border: "2px solid #2563eb",
                    rounded: true,
                }
            }
        }}
    />,
};

export const Accordion: Story = {
    render: () => <CBMultiView
        variant="accordion"
        steps={steps}
    />,
};
export const AccordionStyle: Story = {
    render: () => <CBMultiView
        variant="accordion"
        steps={[
            { title: "Perfil", content: <p>Dados</p> },
            { title: "Endereço", content: <p>Endereço</p> },
        ]}
        theme={{
            accordion: {
                header: {
                    background: "#f8fafc",
                    color: "#1e293b",
                    borderRadius: "12px",
                    padding: "12px",
                },
                content: {
                    background: "#ffffff",
                    padding: "16px",
                },
                indicator: { hide: true }
            }
        }}
    />,
};

export const Stepper: Story = {
    render: () => (
        <CBMultiView
            variant="stepper"
            steps={steps}
            color="secondary"
            // Personalizando botões
            initialStep={0}
            orientation="horizontal"
            // Novas props de botão
            showButtonNext={true}
            showButtonPrev={true}
            nextLabel="Avançar"
            prevLabel="Retornar"
            disableNext={(step) => step === 1} // bloqueia passo 2
            disablePrev={(step) => step === 0} // bloqueia botão voltar no passo 1
            className="bg-gray-50 p-4 rounded-lg"
            style={{ padding: '1rem' }}
        // classNameContent="flex "
        />
    ),
};

export const StepperVert: Story = {
    render: () => (
        <CBMultiView
            variant="stepper"
            steps={steps}
            orientation="vertical"
            color="dark"
            showButtonNext={true}
            nextLabel="Próximo"
            onNext={() => false}
            prevLabel="Anterior"
            disableNext={(step) => step === 2} // desabilita último passo
            className="bg-white p-6 rounded-md shadow-lg"
            theme={{
                stepper: {
                    button: {
                        prev: {
                            background: "#f43f5e",
                            text: "#000000",
                            border: "#b91c1c",
                            hover: "#ec4899",
                            active: "#be185d",
                        }
                    }
                },
            }}
        />
    ),
};
export const StepperCustomTheme: Story = {
    render: () => (
        <CBMultiView
            variant="stepper"
            steps={steps}
            orientation="horizontal"
            initialStep={0}
            color="primary"
            showButtonNext
            showButtonPrev
            nextLabel="Avançar"
            prevLabel="Voltar"
            disableNext={(step) => step === 1}
            disablePrev={(step) => step === 0}
            className="bg-gray-50 p-4 rounded-lg"
            style={{ padding: "1rem" }}
            theme={{
                stepper: {
                    titleColor: "#af0000",
                    circle: { background: "#4ade80", text: "#a30000" },
                    line: "#22d3ee",
                    button: {
                        next: {
                            background: "#f43f5e",
                            text: "#ffffff",
                            border: "#b91c1c",
                            hover: "#ec4899",
                            active: "#be185d",
                        },
                        prev: {
                            background: "#524749",
                            text: "#0e0e0e",
                            border: "#b91c1c",
                            hover: "#ec4899",
                            active: "#be185d",
                            variant: "outline",
                        }
                    }
                }
            }}
        />
    ),
};

export const StepperVerticalCustomTheme: Story = {
    render: () => (
        <CBMultiView
            variant="stepper"
            steps={steps}
            orientation="vertical"
            initialStep={0}
            showButtonNext
            showButtonPrev
            nextLabel={(index, length) => index === length - 1 ? "Último passo!" : "Próximo"}
            prevLabel={(index) => index === 0 ? "Cancelar" : "Voltar"}
            disableNext={(step) => step === 2}
            className="bg-white p-6 rounded-md shadow-lg"

            theme={{
                stepper: {
                    circle: { background: "#facc15", text: "#000000" },
                    line: "#10b981",
                    button: {
                        next: {
                            background: "#f43f5e",
                            text: "#ffffff",
                            border: "#b91c1c",
                            hover: "#ec4899",
                            active: "#be185d",
                            rounded: true
                        },
                        prev: {
                            background: "#524749",
                            text: "#851b1b",
                            border: "#b91c1c",
                            hover: "#ec4899",
                            active: "#be185d",
                            variant: "outline",
                            rounded: true
                        }
                    },
                    titleColor: "#111827",
                }
            }}
        />
    ),
};
