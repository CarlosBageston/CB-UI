import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBCheckbox } from "..";

const meta: Meta<typeof CBCheckbox> = {
    title: "Form/CBCheckbox",
    component: CBCheckbox,
    args: {
        label: "Aceito os termos",
        checked: false,
        variant: "default",
        disabled: false,
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "filled"],
        },
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof CBCheckbox>;

// ✅ Story base controlada com hook
export const Default: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(false);
        return <CBCheckbox {...args} checked={checked} onChange={setChecked} />;
    },
};

// ✅ Filled variant
export const Filled: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(true);
        return (
            <CBCheckbox
                {...args}
                label="Receber notificações"
                checked={checked}
                onChange={setChecked}
                variant="filled"
            />
        );
    },
};

// ✅ Sem label
export const WithoutLabel: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(false);
        return <CBCheckbox {...args} checked={checked} onChange={setChecked} />;
    },
};

// ✅ Desabilitado
export const Disabled: Story = {
    render: (args) => {
        return (
            <CBCheckbox
                {...args}
                label="Opção desabilitada"
                checked={true}
                disabled={true}
                onChange={() => { }}
            />
        );
    },
};
