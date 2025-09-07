import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBTextArea } from "../components";

const meta: Meta<typeof CBTextArea> = {
    title: "Form/CBTextArea",
    component: CBTextArea,
    args: {
        label: "Descrição",
        placeholder: "Digite aqui...",
        value: "",
        disabled: false,
        rows: 4,
    },
    argTypes: {
        onChangeValue: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof CBTextArea>;

// ✅ Variante default controlada
export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return <CBTextArea {...args} value={value} onChangeValue={setValue} />;
    },
};

// ✅ Variante filled
export const Filled: Story = {
    render: (args) => {
        const [value, setValue] = useState("Texto inicial...");
        return (
            <CBTextArea
                {...args}
                value={value}
                onChangeValue={setValue}
            />
        );
    },
};

// ✅ Error state
export const Error: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return (
            <CBTextArea
                {...args}
                value={value}
                onChangeValue={setValue}
                error={value.length < 5 ? "Digite pelo menos 5 caracteres" : ""}
            />
        );
    },
};
export const CountCharacters: Story = {
    render: (args) => {
        const [value, setValue] = useState("");
        return (
            <CBTextArea
                {...args}
                value={value}
                onChangeValue={setValue}
                maxLength={180}
                error={value.length < 5 ? "Digite pelo menos 5 caracteres" : ""}
            />
        );
    },
};

// ✅ Disabled
export const Disabled: Story = {
    render: (args) => {
        return (
            <CBTextArea
                {...args}
                value="Não é possível editar"
                onChangeValue={() => { }}
                disabled={true}
            />
        );
    },
};
