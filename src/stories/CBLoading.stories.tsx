import type { Meta, StoryObj } from "@storybook/react-vite";
import CBLoading from "../components/CBLoading";

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
            <CBLoading
                color="primary"
                type="circular"
                isOpen
                message="Carregando..."
                withBg
                withText
            />
        </>
    ),
};
export const Linear: Story = {
    render: () => (
        <>
            <CBLoading
                color="primary"
                type="linear"
                isOpen
                message="Carregando..."
                withBg
                withText
            />
        </>
    ),
};
export const Dots: Story = {
    render: () => (
        <>
            {/* CBLoading precisa estar montado */}
            <CBLoading
                color="primary"
                type="dots"
                isOpen
                message="Carregando..."
                withBg
                withText
            />
        </>
    ),
};
