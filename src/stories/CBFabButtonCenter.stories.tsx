// src/stories/CBFabButtonCenter.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import CBFabButtonCenter, { type CBFabButtonCenterProps } from '../components/CBFabButtonCenter';
import { IoAdd, IoCheckmarkOutline, IoClose } from 'react-icons/io5';

const meta: Meta<typeof CBFabButtonCenter> = {
    title: 'Components/CBFabButtonCenter',
    component: CBFabButtonCenter,
    argTypes: {
        icon: { control: false },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        color: {
            control: 'select',
            options: [
                'primary', 'secondary', 'success', 'warning',
                'danger', 'info', 'neutral', 'light', 'dark'
            ]
        },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<CBFabButtonCenterProps>;

export const Default: Story = {
    render: (args) => {
        return (
            <div className="relative w-full h-full flex justify-center">
                <CBFabButtonCenter
                    {...args}
                />

            </div>
        )
    },
    args: {
        icon: IoAdd,
        loading: false,
        disabled: false,
        color: 'primary',
    },
};

export const Loading: Story = {
    args: {
        icon: IoAdd,
        loading: true,
        disabled: false,
        color: 'success',
    },
};

export const Disabled: Story = {
    args: {
        icon: IoCheckmarkOutline,
        loading: false,
        disabled: true,
        color: 'warning',
    },
};

export const CustomIcon: Story = {
    args: {
        icon: IoClose,
        loading: false,
        disabled: false,
        color: 'danger',
    },
};
