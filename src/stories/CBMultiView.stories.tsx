import type { Meta, StoryObj } from "@storybook/react-vite";
import { FiHome, FiActivity, FiAirplay, FiAlertCircle, FiAlertOctagon, FiAlertTriangle } from "react-icons/fi";
import { CBMultiView } from "..";

const meta: Meta<typeof CBMultiView> = {
    title: "Components/CBStepper",
    component: CBMultiView,
};
export default meta;

type Story = StoryObj<typeof CBMultiView>;

const steps = [
    { title: "Passo 1", content: (<><p>Conteúdo do passo 1</p><p>Conteúdo do passo 1</p><p>Conteúdo do passo 1</p><p>Conteúdo do passo 1</p></>), icon: <FiHome /> },
    { title: "Passo 2", content: (<><p>Conteúdo do passo 2</p><p>Conteúdo do passo 2</p><p>Conteúdo do passo 2</p><p>Conteúdo do passo 2</p></>), icon: <FiActivity /> },
    { title: "Passo 3", content: (<><p>Conteúdo do passo 3</p><p>Conteúdo do passo 3</p><p>Conteúdo do passo 3</p><p>Conteúdo do passo 3</p></>), icon: <FiAirplay /> },
    { title: "Passo 4", content: (<><p>Conteúdo do passo 4</p><p>Conteúdo do passo 4</p><p>Conteúdo do passo 4</p><p>Conteúdo do passo 4</p></>), icon: <FiAlertCircle /> },
    { title: "Passo 5", content: (<><p>Conteúdo do passo 5</p><p>Conteúdo do passo 5</p><p>Conteúdo do passo 5</p><p>Conteúdo do passo 5</p></>), icon: <FiAlertOctagon /> },
    { title: "Passo 6", content: (<><p>Conteúdo do passo 6</p><p>Conteúdo do passo 6</p><p>Conteúdo do passo 6</p><p>Conteúdo do passo 6</p></>), icon: <FiAlertTriangle /> },
];

export const Tabs: Story = {
    render: () => <CBMultiView variant="tabs" steps={steps} />,
};

export const Accordion: Story = {
    render: () => <CBMultiView variant="accordion" steps={steps} />,
};

export const Stepper: Story = {
    render: () => <CBMultiView variant="stepper" steps={steps} />,
};
export const StepperVert: Story = {
    render: () => <CBMultiView variant="stepper" steps={steps} orientation="vertical" />,
};
