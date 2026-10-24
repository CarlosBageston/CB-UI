import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FiGrid, FiList, FiCalendar, FiInbox, FiSend, FiArchive } from "react-icons/fi";
import CBSegment, { type CBSegmentOption } from "../components/CBSegment/CBSegment";

const meta: Meta<typeof CBSegment> = {
  title: "Components/CBSegment",
  component: CBSegment,
  argTypes: {
    variant: { control: "select", options: ["soft", "solid", "outline", "underline", "pills"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    rounded: { control: "select", options: ["none", "sm", "md", "lg", "xl", "full"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "info", "dark"],
    },
    iconPlacement: { control: "select", options: ["start", "end", "top"] },
    fullWidth: { control: "select", options: [false, true, "mobile"] },
  },
};

export default meta;

type Story = StoryObj<typeof CBSegment>;

const PERIOD_OPTIONS: CBSegmentOption[] = [
  { label: "7 dias", value: 7 },
  { label: "30 dias", value: 30 },
  { label: "90 dias", value: 90 },
  { label: "12 meses", value: 365 },
];

export const Playground: Story = {
  args: {
    items: PERIOD_OPTIONS,
    defaultValue: 30,
    variant: "soft",
    size: "medium",
    color: "primary",
    rounded: "lg",
    fullWidth: "mobile",
    animated: true,
  },
};

export const PeriodSelector: Story = {
  render: () => {
    const [period, setPeriod] = useState<number>(30);

    return (
      <div className="flex flex-col gap-3">
        <CBSegment
          aria-label="Período"
          items={PERIOD_OPTIONS}
          value={period}
          onValueChange={(opt) => setPeriod(Number(opt.value))}
        />
        <span className="text-sm text-(--cb-text-secondary)">
          Período selecionado: <b>{period}</b> dias
        </span>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(["soft", "solid", "outline", "underline", "pills"] as const).map((variant) => (
        <CBSegment
          key={variant}
          label={variant}
          variant={variant}
          items={PERIOD_OPTIONS}
          defaultValue={30}
        />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(["small", "medium", "large"] as const).map((size) => (
        <CBSegment
          key={size}
          label={size}
          size={size}
          items={["Dia", "Semana", "Mês"]}
          defaultValue="Semana"
        />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["primary", "secondary", "success", "danger", "#ca8a04"] as const).map((color) => (
        <CBSegment
          key={color}
          variant="solid"
          rounded="full"
          color={color}
          items={["Todos", "Ativos", "Inativos"]}
          defaultValue="Ativos"
        />
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <CBSegment
        aria-label="Visualização"
        variant="outline"
        items={[
          { label: "Grade", value: "grid", icon: <FiGrid /> },
          { label: "Lista", value: "list", icon: <FiList /> },
          { label: "Agenda", value: "calendar", icon: <FiCalendar /> },
        ]}
        defaultValue="grid"
      />
      <CBSegment
        aria-label="Visualização"
        iconPlacement="top"
        size="large"
        items={[
          { label: "Grade", value: "grid", icon: <FiGrid /> },
          { label: "Lista", value: "list", icon: <FiList /> },
          { label: "Agenda", value: "calendar", icon: <FiCalendar /> },
        ]}
        defaultValue="list"
      />
    </div>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <CBSegment
        aria-label="Caixa"
        variant="underline"
        items={[
          { label: "Entrada", value: "inbox", icon: <FiInbox />, badge: 12 },
          { label: "Enviados", value: "sent", icon: <FiSend /> },
          { label: "Arquivados", value: "archive", icon: <FiArchive />, badge: 3 },
        ]}
        defaultValue="inbox"
      />
      <CBSegment
        aria-label="Pedidos"
        variant="solid"
        color="secondary"
        items={[
          { label: "Pendentes", value: "pending", badge: 8 },
          { label: "Pagos", value: "paid", badge: 24 },
          { label: "Cancelados", value: "canceled", badge: 1 },
        ]}
        defaultValue="paid"
      />
    </div>
  ),
};

interface Plan {
  id: string;
  name: string;
  available: boolean;
}

export const CustomObjects: Story = {
  render: () => {
    const plans: Plan[] = [
      { id: "free", name: "Free", available: true },
      { id: "pro", name: "Pro", available: true },
      { id: "enterprise", name: "Enterprise", available: false },
    ];
    const [plan, setPlan] = useState<Plan>(plans[1]);

    return (
      <CBSegment<Plan>
        label="Plano"
        helperText="Enterprise disponível apenas sob consulta"
        items={plans}
        value={plan}
        onValueChange={setPlan}
        getLabel={(p) => p.name}
        getValue={(p) => p.id}
        disabled={(p) => !p.available}
      />
    );
  },
};

export const FullWidthAndScrollable: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-md">
      <CBSegment fullWidth items={["Resumo", "Detalhes", "Histórico"]} defaultValue="Resumo" />
      <CBSegment
        scrollable
        fullWidth={false}
        variant="underline"
        items={["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]}
        defaultValue="Out"
      />
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    label: "Tipo de pessoa",
    items: ["Física", "Jurídica"],
    error: "Selecione o tipo de pessoa",
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <CBSegment
        aria-label="Tema"
        rounded="full"
        trackColor="#0f172a"
        indicatorColor="linear-gradient(90deg, #f97316, #ec4899)"
        textColor="#94a3b8"
        activeTextColor="#fff"
        items={["Claro", "Escuro", "Sistema"]}
        defaultValue="Escuro"
      />
      <CBSegment
        aria-label="Modo"
        rounded="none"
        variant="outline"
        color="--cb-color-success"
        itemClassName={(_, selected) => (selected ? "uppercase tracking-wide" : "")}
        items={["Rascunho", "Publicado"]}
        defaultValue="Publicado"
      />
    </div>
  ),
};

const STATUS_FILTERS: CBSegmentOption[] = [
  { label: "Todos", value: "ALL", badge: 128, color: "dark" },
  { label: "Pendentes", value: "PENDING", badge: 14, color: "warning" },
  { label: "Em preparo", value: "PREPARING", badge: 6, color: "info" },
  { label: "Entregues", value: "DELIVERED", badge: 102, color: "success" },
  { label: "Cancelados", value: "CANCELED", badge: 6, color: "danger" },
];

export const StatusFilterPills: Story = {
  render: () => {
    const [status, setStatus] = useState<string>("ALL");

    return (
      <div className="flex flex-col gap-6 max-w-3xl">
        <CBSegment
          aria-label="Filtrar por status"
          variant="pills"
          size="small"
          rounded="full"
          items={STATUS_FILTERS}
          value={status}
          onValueChange={(opt) => setStatus(String(opt.value))}
        />
        <CBSegment
          aria-label="Filtrar por status"
          variant="pills"
          rounded="md"
          items={STATUS_FILTERS}
          defaultValue="PENDING"
        />
      </div>
    );
  },
};
