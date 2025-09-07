import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { CBInput } from '..';

const meta: Meta<typeof CBInput> = {
    title: 'Form/CBInput',
    component: CBInput,
};

export default meta;
type Story = StoryObj<typeof CBInput>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('');

        return (
            <CBInput
                {...args}
                value={value}
                onChangeValue={(val: string) => setValue(val)}
            />
        );
    },
    args: {
        label: 'Nome',
        placeholder: 'Digite seu nome',
    },
};

export const WithError: Story = {
    render: (args) => {
        const [value, setValue] = useState('');

        return (
            <CBInput
                {...args}
                value={value}
                onChangeValue={(val: string) => setValue(val)}
            />
        );
    },
    args: {
        label: 'Email',
        placeholder: 'Digite seu email',
        error: 'Email inválido',
    },
};
export const PasswordInput: Story = {
    render: (args) => {
        const [value, setValue] = useState('');

        return (
            <CBInput
                {...args}
                value={value}
                onChangeValue={(val: string) => setValue(val)}
            />
        )
    },
    args: {
        label: 'Senha',
        type: 'password',
        placeholder: 'Digite sua senha',
    },
};

export const WithMaskTel: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <CBInput
                {...args}
                value={value}
                onChangeValue={(val: string) => setValue(val)}
            />
        )
    },
    args: {
        label: 'Telefone',
        placeholder: '(00) 00000-0000',
        mask: 'tel',
        maxLength: 15,
    },
};
export const WithMaskCurrency: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <CBInput
                {...args}
                value={value}
                onChangeValue={(val: string) => setValue(val)}
            />
        );
    },
    args: {
        label: 'Valor',
        placeholder: 'R$ 0,00',
        mask: 'currency',
    },
};

export const WithMaskCepAndColors: Story = {
    render: (args) => {
        const [value, setValue] = useState('');

        return (
            <CBInput
                {...args}
                value={value}
                onChangeValue={(val: string) => setValue(val)}
            />
        );
    },
    args: {
        label: 'CEP',
        placeholder: '00000-000',
        mask: 'cep',
        maxLength: 9,
    },
};