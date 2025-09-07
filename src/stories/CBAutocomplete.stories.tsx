// src/stories/CBAutocomplete.stories.tsx
import { IonRow, IonCol } from '@ionic/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CBAutocomplete, { type CBAutocompleteProps } from '../components/CBAutoComplete';

interface OptionType {
    id: number;
    name: string;
}

const sampleOptions: OptionType[] = [
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
    { id: 3, name: 'Opção 3' },
];

const meta: Meta<typeof CBAutocomplete> = {
    title: 'Form/CBAutocomplete',
    component: CBAutocomplete,
    argTypes: {
        placeholder: { control: 'text' },
        loading: { control: 'boolean' },
        rounded: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        variant: {
            control: 'select',
            options: ['search', 'select'],
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'neutral', 'light', 'dark'],
        },
    },
};

export default meta;
type Story = StoryObj<CBAutocompleteProps<OptionType>>;

// ===== VARIANTE SELECT =====
export const SelectVariant: Story = {
    args: {
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
        placeholder: 'Selecione uma opção...',
        variant: 'select',
        label: 'Autocomplete tipo Select',
        onSelect: (item) => console.log(item),
    },
};

// ===== VARIANTE SEARCH =====
export const SearchVariant: Story = {
    args: {
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
        placeholder: 'Pesquisar...',
        variant: 'search',
        label: 'Autocomplete tipo Search',
        onSelect: (item) => console.log(item),
    },
};

// ===== DIFERENTES LARGURAS =====
export const WithDifferentWidths: Story = {
    render: (args) => (
        <IonRow className="gap-4">
            <IonCol size="12" sizeMd="6" sizeLg="4">
                <CBAutocomplete {...args} placeholder="Largura 100%" />
            </IonCol>
            <IonCol size="6" sizeMd="4" sizeLg="3">
                <CBAutocomplete {...args} placeholder="Largura 50%" />
            </IonCol>
            <IonCol size="4" sizeMd="3" sizeLg="2">
                <CBAutocomplete {...args} placeholder="Largura 33%" />
            </IonCol>
        </IonRow>
    ),
    args: {
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
        variant: 'select',
        color: 'secondary',
        label: 'Autocomplete responsivo',
    },
};

// ===== LOADING =====
export const Loading: Story = {
    args: {
        items: sampleOptions,
        getLabel: (opt) => opt.name,
        getValue: (opt) => opt.id,
        placeholder: 'Carregando...',
        variant: 'select',
        loading: true,
        label: 'Autocomplete Loading',
    },
};
