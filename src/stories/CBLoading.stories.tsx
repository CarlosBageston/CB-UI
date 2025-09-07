import type { Meta, StoryObj } from "@storybook/react-vite";
import CBLoading from "../components/CBLoading";
import { hideCBLoading, showCBLoading } from "../hooks/CBLoadingController";
import { CBButton } from "..";

const meta: Meta<typeof CBLoading> = {
    title: "Feedback/CBLoading",
    component: CBLoading,
};
export default meta;

type Story = StoryObj<typeof CBLoading>;

export const Default: Story = {
    render: () => (
        <>
            {/* CBLoading precisa estar montado */}
            <CBLoading />

            <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
                <CBButton
                    label="Abrir Loading"
                    onClick={() => showCBLoading({})}
                />
                <CBButton
                    label="Fechar Loading"
                    onClick={() => hideCBLoading()}
                />
            </div>
        </>
    ),
};
export const Linear: Story = {
    render: () => (
        <>
            {/* CBLoading precisa estar montado */}
            <CBLoading />

            <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
                <CBButton
                    label="Abrir Loading"
                    onClick={() => showCBLoading({ color: "primary", type: "linear" })}
                />
                <CBButton
                    label="Fechar Loading"
                    onClick={() => hideCBLoading()}
                />
            </div>
        </>
    ),
};
export const Dots: Story = {
    render: () => (
        <>
            {/* CBLoading precisa estar montado */}
            <CBLoading />

            <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
                <CBButton
                    label="Abrir Loading"
                    onClick={() => showCBLoading({ color: "primary", type: "dots", withBg: false, withText: false })}
                />
                <CBButton
                    label="Abrir Loading Com Background"
                    onClick={() => showCBLoading({ color: "primary", type: "dots" })}
                />
                <CBButton
                    label="Fechar Loading"
                    onClick={() => hideCBLoading()}
                />
            </div>
        </>
    ),
};
