// src/stories/CBDataPicker.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import CBDataPicker, { type CBDataPickerProps } from "../components/CBDataPicker";

const meta: Meta<typeof CBDataPicker> = {
    title: 'Form/CBDataPicker',
    component: CBDataPicker,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'date' },
        format: {
            control: { type: 'select' },
            options: ['day', 'month-year', 'date', 'datetime', 'MMMM/YYYY']
        },
        disabled: { control: 'boolean' },
        placeholder: { control: 'text' },
        errorText: { control: 'text' },
        onChange: { action: 'changed' },
    }
};

export default meta;
type Story = StoryObj<CBDataPickerProps>;

export const Default: Story = {
    args: {
        label: 'Data de nascimento',
        value: null,
        format: 'date',
        disabled: false,
        placeholder: 'Selecione uma data',
        errorText: '',
    },
};
export const WithCalendar: Story = {
    args: {
        label: 'Data de nascimento',
        value: null,
        format: 'date',
        disabled: false,
        placeholder: 'Selecione uma data',
        errorText: '',
        withCalendar: true
    },
};
export const WithDropdown: Story = {
    args: {
        label: 'Data de nascimento',
        value: null,
        format: 'date',
        disabled: false,
        placeholder: 'Selecione uma data',
        errorText: '',
        withCalendar: true,
        pickerMode: 'dropdown'
    },
};
export const WithError: Story = {
    args: {
        label: 'Data de início',
        value: null,
        format: 'date',
        placeholder: 'Selecione uma data',
        errorText: 'Data obrigatória',
    },
};

export const MonthYear: Story = {
    args: {
        label: 'Mês/Ano',
        value: new Date(),
        format: 'month-year',
        placeholder: 'Selecione mês/ano',
    },
};

export const DateTime: Story = {
    args: {
        label: 'Data e hora',
        value: new Date(),
        format: 'datetime',
        placeholder: 'Selecione data e hora',
    },
};
