import type { Meta, StoryObj } from "@storybook/react-vite";
import CBFabButton, { type CBFabButtonProps } from "../components/CBFabButton";
import { IoAdd, IoClose } from "react-icons/io5";

const meta: Meta<typeof CBFabButton> = {
    title: 'Components/CBFabButton',
    component: CBFabButton,
    argTypes: {
        tooltip: { control: 'text' },
        icon: { control: false },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        showCancel: { control: 'boolean' },
        recording: { control: 'boolean' },
        cancelIcon: { control: false },
        color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'neutral', 'light', 'dark'] },
        onClick: { action: 'clicked' },
        onCancel: { action: 'cancelled' },
    }
};

export default meta;
type Story = StoryObj<CBFabButtonProps>;

// STORY PADRÃO
export const Primary: Story = {
    args: {
        tooltip: 'Tooltip padrão',
        icon: IoAdd,
        color: 'primary',
    },
};

// TESTANDO LOADING
export const Loading: Story = {
    args: {
        icon: IoAdd,
        loading: true,
        color: 'success',
    },
};

// TESTANDO DISABLED
export const Disabled: Story = {
    args: {
        icon: IoAdd,
        disabled: true,
        color: 'warning',
    },
};

// TESTANDO CANCEL
export const WithCancel: Story = {
    args: {
        tooltip: 'Gravando...',
        icon: IoAdd,
        showCancel: true,
        recording: true,
        onCancel: () => console.log('Cancelado'),
        cancelIcon: IoClose,
        color: 'danger',
    },
};

// TESTANDO DIFERENTES CORES
export const AllColors: Story = {
    render: (args) => (
        <div className="flex gap-4 p-6 space-x-4">
            <CBFabButton {...args} color="primary" tooltip="Primary" className="!mb-100" />
            <CBFabButton {...args} color="secondary" tooltip="Secondary" className="!mb-85" />
            <CBFabButton {...args} color="success" tooltip="Success" className="!mb-70" />
            <CBFabButton {...args} color="warning" tooltip="Warning" className="!mb-55" />
            <CBFabButton {...args} color="danger" tooltip="Danger" className="!mb-40" />
            <CBFabButton {...args} color="info" tooltip="Info" className="!mb-25" />
            <CBFabButton {...args} color="neutral" tooltip="Neutral" className="!mb-10" />
            <CBFabButton {...args} color="light" tooltip="Light" className="!-mb-5" />
            <CBFabButton {...args} color="dark" tooltip="Dark" className="!-mb-20" />
        </div>
    ),
};
