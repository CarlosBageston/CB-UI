import { IonRow, IonCol } from '@ionic/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CBSelect, { type CBSelectProps } from '../components/CBSelect';

interface OptionType {
    id: number;
    name: string;
}

const sampleOptions: OptionType[] = [
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
    { id: 3, name: 'Opção 3' },
];

const meta: Meta<typeof CBSelect> = {
    title: 'Form/CBSelect',
    component: CBSelect,
    argTypes: {
        error: { control: 'boolean' },
        helperText: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<CBSelectProps<OptionType>>;

export const Default: Story = {
    args: {
        label: 'Selecione uma opção',
        value: sampleOptions[0],
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
    },
};

export const ErrorState: Story = {
    args: {
        label: 'Selecione uma opção',
        value: sampleOptions[0],
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
        error: true,
        helperText: 'Campo obrigatório',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Selecione uma opção',
        value: sampleOptions[0],
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
        disabled: true,
    },
};

export const Loading: Story = {
    args: {
        label: 'Selecione uma opção',
        value: sampleOptions[0],
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
        loading: true,
    },
};

export const WithDifferentWidths: Story = {
    render: (args) => (
        <IonRow>
            <IonCol size="12" sizeMd="6" sizeLg="4">
                <CBSelect {...args} label="Largura 100%" color='warning' />
            </IonCol>
            <IonCol size="6" sizeMd="4" sizeLg="3">
                <CBSelect {...args} label="Largura 50%" />
            </IonCol>
            <IonCol size="4" sizeMd="3" sizeLg="2">
                <CBSelect {...args} label="Largura 33%" />
            </IonCol>
        </IonRow>
    ),
    args: {
        value: sampleOptions[0],
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
    },
};
