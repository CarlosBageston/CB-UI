import { IonIcon } from '@ionic/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { add } from 'ionicons/icons';
import CBButton, { type CBButtonProps } from '../components/CBButton';

const meta: Meta<typeof CBButton> = {
    title: 'Components/CBButton',
    component: CBButton,
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'danger', 'success'] },
        rounded: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        gradient: { control: 'text' },
        loadingText: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<CBButtonProps>;

export const Primary: Story = {
    args: {
        label: 'Primary Button',
        size: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Button',
        variant: 'outline',
        size: 'medium',
    },
};

export const Outline: Story = {
    args: {
        label: 'Outline Button',
        variant: 'outline',
        color: 'warning',
        size: 'medium',
    },
};

export const Rounded: Story = {
    args: {
        label: 'Rounded Button',
        rounded: true,
        size: 'medium',
    },
};

export const WithIcons: Story = {
    args: {
        label: 'Button with Icon',
        iconStart: <IonIcon icon={add} />,
        size: 'medium',
    },
};

export const CustomColors: Story = {
    args: {
        label: 'Custom Colors Button',
        size: 'medium',
        backgroundColor: '#f43f5e', // fundo
        textColor: '#000000',       // texto
        borderColor: '#968686',     // borda
        hoverColor: '#cfc9cc',      // hover
        activeColor: '#130c0f',     // ativo
    },
};

export const IconAndClick: Story = {
    args: {
        label: 'Next',
        iconEnd: <IonIcon icon={add} />,
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
        borderColor: '#1d4ed8',
        hoverColor: '#2563eb',
        activeColor: '#1e40af',
        onClick: () => alert('Botão clicado!'),
    },
};

export const Loading: Story = {
    args: {
        label: 'Loading Button',
        loading: true,
        loadingText: 'Carregando...',
        size: 'medium',
    },
};

export const FullWidth: Story = {
    args: {
        label: 'Full Width Button',
        fullWidth: true,
        size: 'medium',
    },
};
export const Gradient: Story = {
    args: {
        label: 'Gradient Button',
        gradient: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
        rounded: true,
        size: 'medium',
    },
};