// src/stories/CBDataPicker.stories.tsx
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CBDataPicker, {
  type CBDataPickerProps,
} from "../components/CBDataPicker";
import CBInput from "../components/CBInput";

const meta: Meta<typeof CBDataPicker> = {
  title: "Form/CBDataPicker",
  component: CBDataPicker,
  argTypes: {
    label: { control: "text" },
    value: { control: false }, // controlado via render/useState, não pelo painel de args
    format: {
      control: { type: "select" },
      options: ["day", "month-year", "date", "datetime", "MMMM/YYYY"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
    },
    pickerMode: {
      control: { type: "radio" },
      options: ["modal", "dropdown"],
    },
    disabled: { control: "boolean" },
    withCalendar: { control: "boolean" },
    placeholder: { control: "text" },
    errorText: { control: "text" },
    onChange: { action: "changed" },
  },
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return (
        <div style={{ width: 340 }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<CBDataPickerProps>;

/**
 * Wrapper controlado: reflete de verdade a seleção de data no componente,
 * já que args estáticos não re-renderizam o value após onChange.
 */
function ControlledDatePicker(props: CBDataPickerProps) {
  const [value, setValue] = useState<Date | null>(props.value ?? null);
  return (
    <CBDataPicker
      {...props}
      value={value}
      onChange={(date) => {
        setValue(date);
        props.onChange?.(date);
      }}
    />
  );
}

export const Default: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
  args: {
    label: "Data de nascimento",
    value: null,
    format: "date",
    disabled: false,
    placeholder: "Selecione uma data",
    errorText: "",
  },
};

export const WithCalendar: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
  args: {
    ...Default.args,
    withCalendar: true,
  },
};

export const WithDropdown: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
  args: {
    ...Default.args,
    withCalendar: true,
    pickerMode: "dropdown",
  },
};

export const WithError: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
  args: {
    label: "Data de início",
    value: null,
    format: "date",
    placeholder: "Selecione uma data",
    errorText: "Data obrigatória",
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
  args: {
    ...Default.args,
    label: "Data (bloqueada)",
    value: new Date(),
    disabled: true,
  },
};

export const DayOnly: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
  args: {
    ...Default.args,
    label: "Dia",
    format: "day",
    value: new Date(),
  },
};

export const MonthYear: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
  args: {
    label: "Mês/Ano",
    value: new Date(),
    format: "month-year",
    placeholder: "Selecione mês/ano",
  },
};

export const DateTime: Story = {
  render: (args) => <ControlledDatePicker {...args} />,
  args: {
    label: "Data e hora",
    value: new Date(),
    format: "datetime",
    placeholder: "Selecione data e hora",
  },
};

export const RadiusVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      {(["none", "sm", "md", "lg", "full"] as const).map((radius) => (
        <ControlledDatePicker
          key={radius}
          label={`radius="${radius}"`}
          value={null}
          radius={radius}
          onChange={() => {}}
        />
      ))}
    </div>
  ),
};

/**
 * Compara lado a lado com o CBInput para validar
 * se o padrão visual (altura, borda, radius, label, erro) bateu.
 */
export const VisualParityWithCBInput: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <CBInput
        value="Olá mundo"
        label="Nome"
        placeholder="Digite seu nome"
        onChange={() => {}}
      />
      <ControlledDatePicker
        label="Data de nascimento"
        value={new Date()}
        placeholder="Selecione uma data"
        onChange={() => {}}
      />
      <CBInput
        value="Olá mundo"
        label="Nome"
        placeholder="Digite seu nome"
        error="Campo obrigatório"
        onChange={() => {}}
      />
      <ControlledDatePicker
        label="Data"
        value={new Date()}
        errorText="Campo obrigatório"
        onChange={() => {}}
      />
    </div>
  ),
};
