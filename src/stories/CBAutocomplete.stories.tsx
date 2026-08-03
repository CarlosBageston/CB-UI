import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CBAutocomplete } from "..";

interface Product {
  id: number;
  name: string;
  category: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Chocolate ao Leite", category: "Doces" },
  { id: 2, name: "Chocolate Amargo 70%", category: "Doces" },
  { id: 3, name: "Chocolate Branco", category: "Doces" },
  { id: 4, name: "Café Torrado e Moído", category: "Bebidas" },
  { id: 5, name: "Café Solúvel", category: "Bebidas" },
  { id: 6, name: "Refrigerante Cola", category: "Bebidas" },
  { id: 7, name: "Refrigerante Guaraná", category: "Bebidas" },
  { id: 8, name: "Biscoito de Chocolate", category: "Doces" },
  { id: 9, name: "Biscoito Água e Sal", category: "Salgados" },
  { id: 10, name: "Batata Chips Original", category: "Salgados" },
  { id: 11, name: "Batata Chips Churrasco", category: "Salgados" },
  { id: 12, name: "Amendoim Torrado", category: "Salgados" },
  { id: 13, name: "Água Mineral", category: "Bebidas" },
  { id: 14, name: "Suco de Laranja", category: "Bebidas" },
  { id: 15, name: "Bala de Goma", category: "Doces" },
];

/** Simula uma chamada de API real, com latência de rede. */
function fakeProductApi(text: string, delay = 900): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalized = text.trim().toLowerCase();
      resolve(
        PRODUCTS.filter((p) => p.name.toLowerCase().includes(normalized)),
      );
    }, delay);
  });
}

/** Mesma API, mas sempre falha — usada para testar o estado de erro. */
function fakeProductApiWithError(): Promise<Product[]> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error("Falha ao consultar o servidor")), 800);
  });
}

const meta: Meta<typeof CBAutocomplete<Product>> = {
  title: "Components/CBAutocomplete",
  component: CBAutocomplete,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Produto",
    placeholder: "Pesquisar produto...",
    getLabel: (item: Product) => item.name,
    getValue: (item: Product) => item.id,
    color: "primary",
    radius: "md",
    debounce: 500,
    minSearchLength: 2,
    clearable: true,
  },
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "neutral",
        "danger",
        "success",
        "warning",
      ],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    debounce: { control: { type: "number", min: 0, max: 2000, step: 100 } },
    minSearchLength: { control: { type: "number", min: 0, max: 5, step: 1 } },
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: 340 }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof CBAutocomplete<Product>>;

/**
 * Busca local: filtra a lista recebida via `items`, sem debounce nem
 * chamadas de rede.
 */
export const BuscaLocal: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<Product | null>(null);

    return (
      <CBAutocomplete
        {...args}
        items={PRODUCTS}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};
export const BuscaLocalDark: Story = {
  decorators: [
    (Story) => (
      <div className="dark" style={{ width: 340 }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [value, setValue] = useState<Product | null>(null);

    return (
      <CBAutocomplete
        {...args}
        items={PRODUCTS}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};
/**
 * Busca remota: usa `onSearch`, com debounce de 500ms, cache por termo
 * pesquisado e cancelamento de respostas obsoletas. Pesquise "Chocolate",
 * limpe e pesquise novamente para ver que a segunda vez não gera loading
 * (resultado veio do cache).
 */
export const BuscaRemota: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<Product | null>(null);

    return (
      <CBAutocomplete
        {...args}
        value={value}
        onValueChange={setValue}
        onSearch={(text: string) => fakeProductApi(text)}
      />
    );
  },
};

/** Latência alta (2s) para evidenciar o spinner e o cancelamento de buscas antigas. */
export const BuscaRemotaLatenciaAlta: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<Product | null>(null);

    return (
      <CBAutocomplete
        {...args}
        value={value}
        onValueChange={setValue}
        onSearch={(text: string) => fakeProductApi(text, 2000)}
      />
    );
  },
};

/** A busca remota sempre falha — exibe o estado de erro no dropdown. */
export const EstadoDeErro: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<Product | null>(null);

    return (
      <CBAutocomplete
        {...args}
        value={value}
        onValueChange={setValue}
        onSearch={fakeProductApiWithError}
      />
    );
  },
};

/** Nenhum item da lista local corresponde ao termo digitado. */
export const SemResultados: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<Product | null>(null);

    return (
      <CBAutocomplete
        {...args}
        items={[]}
        value={value}
        onValueChange={setValue}
        placeholder="Tente pesquisar qualquer coisa"
      />
    );
  },
};

/** Já chega preenchido com um valor selecionado (estado controlado). */
export const ComValorInicial: Story = {
  render: (args: any) => {
    const [value, setValue] = useState<Product | null>(PRODUCTS[0]);

    return (
      <CBAutocomplete
        {...args}
        items={PRODUCTS}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const ComErroDeValidacao: Story = {
  args: {
    items: PRODUCTS,
    error: "Selecione um produto válido",
  },
};

export const ComHelperText: Story = {
  args: {
    items: PRODUCTS,
    helperText: "Pesquise pelo nome do produto",
  },
};

export const Desabilitado: Story = {
  args: {
    items: PRODUCTS,
    disabled: true,
    value: PRODUCTS[3],
  },
};

export const LoadingExterno: Story = {
  args: {
    items: PRODUCTS,
    loading: true,
    helperText: "Carregando lista de produtos...",
  },
};

/** minSearchLength alto — só busca a partir de 4 caracteres. */
export const MinimoDeCaracteres: Story = {
  args: {
    minSearchLength: 4,
  },
  render: (args: any) => {
    const [value, setValue] = useState<Product | null>(null);

    return (
      <CBAutocomplete
        {...args}
        value={value}
        onValueChange={setValue}
        onSearch={(text: string) => fakeProductApi(text, 500)}
      />
    );
  },
};

export const CoresEBordas: Story = {
  render: (args: any) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(
        [
          "primary",
          "secondary",
          "neutral",
          "danger",
          "success",
          "warning",
        ] as const
      ).map((color) => (
        <CBAutocomplete
          key={color}
          {...args}
          items={PRODUCTS}
          color={color}
          label={`Cor: ${color}`}
        />
      ))}
    </div>
  ),
};
