import { useState } from "react";
import type { CBColor } from "../theme/CBColor";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBSelector } from "../components";

const meta: Meta<typeof CBSelector> = {
    title: "Components/CBSelector",
    component: CBSelector,
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["checkbox", "radio", "switch"],
        },
        color: {
            control: { type: "select" },
            options: ["primary", "secondary", "success", "danger", "neutral"] as CBColor[],
        },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof CBSelector>;

export const Playground: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(false);
        return (
            <div className="flex flex-col gap-4 p-4">
                <CBSelector {...args} checked={checked} onChange={setChecked} label="Option 1" />
                <CBSelector
                    {...args}
                    checked={!checked}
                    onChange={setChecked}
                    label="Option 2"
                />
            </div>
        );
    },
};

export const Checkbox: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(false);
        return (
            <>
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox" />
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox Disabled" disabled />
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox" color="warning" />
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox" color="info" />
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox" color="danger" />
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox" color="dark" />
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox" color="light" />
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox" color="secondary" />
                <CBSelector {...args} type="checkbox" checked={checked} onChange={setChecked} label="Checkbox" color="success" />
            </>
        );
    },
};

export const Radio: Story = {
    render: (args) => {
        const [selected, setSelected] = useState("a");
        return (
            <div className="flex flex-col gap-2">
                <CBSelector
                    {...args}
                    type="radio"
                    checked={selected === "a"}
                    onChange={() => setSelected("a")}
                    label="Option A"
                />
                <CBSelector
                    {...args}
                    type="radio"
                    checked={selected === "b"}
                    onChange={() => setSelected("b")}
                    label="Option B"
                />
                <CBSelector {...args} type="radio" checked={selected === "c"} onChange={() => setSelected("c")} label="Option c" color="primary" />
                <CBSelector {...args} type="radio" checked={selected === "c"} onChange={() => setSelected("c")} label="Option c" color="warning" />
                <CBSelector {...args} type="radio" checked={selected === "d"} onChange={() => setSelected("d")} label="Option d" color="info" />
                <CBSelector {...args} type="radio" checked={selected === "f"} onChange={() => setSelected("f")} label="Option f" color="danger" />
                <CBSelector {...args} type="radio" checked={selected === "g"} onChange={() => setSelected("g")} label="Option g" color="dark" />
                <CBSelector {...args} type="radio" checked={selected === "2"} onChange={() => setSelected("2")} label="Option 2" color="light" />
                <CBSelector {...args} type="radio" checked={selected === "4"} onChange={() => setSelected("4")} label="Option 4" color="secondary" />
                <CBSelector {...args} type="radio" checked={selected === "5"} onChange={() => setSelected("5")} label="Option 5" color="success" />
            </div>
        );
    },
};

export const Switch: Story = {
    render: (args) => {
        const [enabled, setEnabled] = useState(false);
        return (
            <>
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 1" />
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 2 Disabled" disabled />
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 3" color="warning" />
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 4" color="info" />
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 5" color="danger" />
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 6" color="dark" />
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 7" color="light" />
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 8" color="secondary" />
                <CBSelector {...args} type="switch" checked={enabled} onChange={setEnabled} label="Checkbox 9" color="success" />
            </>
        );
    },
};

export const Disabled: Story = {
    render: (args) => (
        <div className="flex flex-col gap-2">
            <CBSelector {...args} checked={true} disabled label="Checked Disabled" />
            <CBSelector {...args} checked={false} disabled label="Unchecked Disabled" />
        </div>
    ),
};
