import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  CBRadioCardGroup,
  type CBRadioCardGroupProps,
} from "../components/CBRadio/CBRadioCardGroup";
import { FiLayers, FiSliders, FiCheckCircle } from "react-icons/fi";

enum ProductionType {
  FIXED = "FIXED",
  VARIABLE = "VARIABLE",
}

interface PlanOption {
  id: string;
  name: string;
  description: string;
  price: string;
}

const planOptions: PlanOption[] = [
  {
    id: "basic",
    name: "Básico",
    description: "Ideal para pequenas operações com até 10 colaboradores.",
    price: "R$ 49/mês",
  },
  {
    id: "pro",
    name: "Profissional",
    description:
      "Recursos avançados, automação de lotes e suporte prioritário.",
    price: "R$ 149/mês",
  },
  {
    id: "enterprise",
    name: "Empresarial",
    description: "Customizações ilimitadas, múltiplos galpões e API dedicada.",
    price: "Sob consulta",
  },
];

const meta: Meta<typeof CBRadioCardGroup> = {
  title: "Form/CBRadioCardGroup",
  component: CBRadioCardGroup,
  argTypes: {
    columns: {
      control: { type: "select" },
      options: [1, 2, 3, 4],
    },
    disabled: { control: "boolean" },
    color: { control: "text" },
    radioPlacement: {
      control: { type: "inline-radio" },
      options: ["start", "end"],
    },
  },
};

export default meta;
type Story = StoryObj<CBRadioCardGroupProps<PlanOption>>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<PlanOption>(planOptions[0]);

    return (
      <div className="p-4 max-w-2xl">
        <CBRadioCardGroup
          label="Escolha seu Plano"
          items={planOptions}
          value={selected}
          onValueChange={setSelected}
          getLabel={(item) => item.name}
          getValue={(item) => item.id}
          getDescription={(item) => item.description}
          columns={2}
        />
      </div>
    );
  },
};

export const ProductionTypeLotRefactor: StoryObj = {
  name: "Caso de Uso: Tipo de Produção (Refatoração)",
  render: () => {
    const PRODUCTION_TYPE_INFO: Record<
      ProductionType,
      { title: string; description: string }
    > = {
      [ProductionType.FIXED]: {
        title: "Produção Fixa",
        description: "Parâmetros estáticos com padrão pré-definido e rígido.",
      },
      [ProductionType.VARIABLE]: {
        title: "Produção Variável",
        description:
          "Composição dinâmica e flexível ajustada por lote composto.",
      },
    };

    const [type, setType] = useState<ProductionType>(ProductionType.FIXED);

    return (
      <div className="p-4 max-w-3xl">
        <h2 className="text-lg font-semibold text-(--text-primary) mb-3 border-b pb-1">
          Tipo de Produção
        </h2>

        <CBRadioCardGroup
          items={[ProductionType.FIXED, ProductionType.VARIABLE]}
          value={type}
          onValueChange={setType}
          getValue={(item) => item}
          getLabel={(item) => PRODUCTION_TYPE_INFO[item].title}
          getDescription={(item) => PRODUCTION_TYPE_INFO[item].description}
          renderIcon={(item) =>
            item === ProductionType.FIXED ? <FiSliders /> : <FiLayers />
          }
          columns={2}
        />

        <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200">
          Componente selecionado:{" "}
          <strong>{PRODUCTION_TYPE_INFO[type].title}</strong>
        </div>
      </div>
    );
  },
};

export const WithExtraFooterAndThreeColumns: Story = {
  name: "Com Rodapé Customizado e 3 Colunas",
  render: () => {
    const [selected, setSelected] = useState<PlanOption>(planOptions[1]);

    return (
      <div className="p-4 max-w-4xl">
        <CBRadioCardGroup
          label="Planos de Assinatura"
          items={planOptions}
          value={selected}
          onValueChange={setSelected}
          getLabel={(item) => item.name}
          getValue={(item) => item.id}
          getDescription={(item) => item.description}
          columns={3}
          renderExtra={(item, isSelected) => (
            <div className="flex items-center justify-between font-medium">
              <span
                className={
                  isSelected
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : "text-gray-600 dark:text-gray-400"
                }
              >
                {item.price}
              </span>
              {isSelected && (
                <FiCheckCircle className="text-blue-600 dark:text-blue-400" />
              )}
            </div>
          )}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="p-4 max-w-2xl">
        <CBRadioCardGroup
          label="Opções Desabilitadas"
          items={planOptions}
          value={planOptions[0]}
          getLabel={(item) => item.name}
          getValue={(item) => item.id}
          getDescription={(item) => item.description}
          disabled={true}
          columns={2}
        />
      </div>
    );
  },
};

export const CustomColorsAndStyling: Story = {
  name: "Cores e Estilos Customizados (Novas Props)",
  render: () => {
    const [selected, setSelected] = useState<PlanOption>(planOptions[1]);

    return (
      <div className="p-4 max-w-3xl space-y-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            1. Customização com Classes Dinâmicas (labelClassName,
            iconClassName, descriptionClassName)
          </h3>
          <CBRadioCardGroup
            items={planOptions}
            value={selected}
            onValueChange={setSelected}
            getLabel={(item) => item.name}
            getValue={(item) => item.id}
            getDescription={(item) => item.description}
            columns={3}
            renderIcon={() => <FiSliders />}
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            2. Cor Temática Própria para o Ícone (iconColor)
          </h3>
          <CBRadioCardGroup
            items={planOptions}
            value={selected}
            onValueChange={setSelected}
            getLabel={(item) => item.name}
            getValue={(item) => item.id}
            getDescription={(item) => item.description}
            columns={3}
            renderIcon={() => <FiLayers />}
          />
        </div>
      </div>
    );
  },
};
