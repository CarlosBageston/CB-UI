import type { Meta, StoryObj } from "@storybook/react-vite";
import CBGrid from "../components/CBGrid/CBGrid";
import CBGridItem from "../components/CBGrid/CBGridItem";
import { CBForm, CBFormikInput } from "../formikInput";
import { useFormik } from "formik";

const meta: Meta<typeof CBGrid> = {
  title: "Layout/CBGrid",
  component: CBGrid,
};

export default meta;

type Story = StoryObj<typeof CBGrid>;

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#3b82f6",
        color: "#fff",
        padding: "16px",
        borderRadius: "8px",
        textAlign: "center",
        fontWeight: 600,
      }}
    >
      {children}
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <CBGrid>
      <CBGridItem md={6}>
        <Box>6</Box>
      </CBGridItem>

      <CBGridItem md={6}>
        <Box>6</Box>
      </CBGridItem>

      <CBGridItem md={4}>
        <Box>4</Box>
      </CBGridItem>

      <CBGridItem md={8}>
        <Box>8</Box>
      </CBGridItem>

      <CBGridItem md={3}>
        <Box>3</Box>
      </CBGridItem>

      <CBGridItem md={3}>
        <Box>3</Box>
      </CBGridItem>

      <CBGridItem md={3}>
        <Box>3</Box>
      </CBGridItem>

      <CBGridItem md={3}>
        <Box>3</Box>
      </CBGridItem>

      <CBGridItem md={12}>
        <Box>12</Box>
      </CBGridItem>
    </CBGrid>
  ),
};
export const Responsive: Story = {
  render: () => (
    <CBGrid>
      <CBGridItem sm={12} md={6} lg={4}>
        <Box>sm=12 md=6 lg=4</Box>
      </CBGridItem>

      <CBGridItem sm={12} md={6} lg={8}>
        <Box>sm=12 md=6 lg=8</Box>
      </CBGridItem>

      <CBGridItem md={3}>
        <Box>3</Box>
      </CBGridItem>

      <CBGridItem md={9}>
        <Box>9</Box>
      </CBGridItem>
    </CBGrid>
  ),
};
export const Playground: Story = {
  args: {
    gap: 4,
  },
  render: (args) => (
    <CBGrid {...args}>
      <CBGridItem md={6}>
        <Box>6</Box>
      </CBGridItem>

      <CBGridItem md={6}>
        <Box>6</Box>
      </CBGridItem>

      <CBGridItem md={4}>
        <Box>4</Box>
      </CBGridItem>

      <CBGridItem md={8}>
        <Box>8</Box>
      </CBGridItem>
    </CBGrid>
  ),
};
export const Form: Story = {
  render: () => {
    const formik = useFormik({
      initialValues: {
        active: true,
        companyId: "",
        name: "",
        phone: "",
        email: "",
        document: "",
        zipCode: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        notes: "",
      },
      onSubmit: () => {},
    });

    return (
      <div className="w-full">
        <CBForm formik={formik}>
          {/* Informações Pessoais */}
          <h2 className="text-lg font-semibold text-(--text-primary) mb-3 border-b pb-1">
            Informações Pessoais
          </h2>

          <CBGrid gap={3}>
            <CBGridItem md={3}>
              <CBFormikInput
                name="name"
                label="Nome"
                placeholder="Ex: Mercado Silva"
              />
            </CBGridItem>

            <CBGridItem md={3}>
              <CBFormikInput
                name="email"
                label="E-mail"
                placeholder="Exemplo@exemplo.com"
              />
            </CBGridItem>

            <CBGridItem md={3}>
              <CBFormikInput
                name="phone"
                label="Telefone"
                mask="tel"
                placeholder="(XX) XXXXX-XXXX"
              />
            </CBGridItem>

            <CBGridItem md={6}>
              <CBFormikInput
                name="document"
                label="CPF / CNPJ"
                mask="cnpj"
                placeholder="000.000.000-00"
              />
            </CBGridItem>
          </CBGrid>

          <h2 className="text-lg font-semibold text-(--text-primary) mb-3 border-b pb-1">
            Endereço
          </h2>

          <CBGrid>
            <CBGridItem md={2}>
              <CBFormikInput
                name="zipCode"
                label="CEP"
                mask="cep"
                placeholder="00000-000"
              />
            </CBGridItem>

            <CBGridItem md={8}>
              <CBFormikInput
                name="street"
                label="Rua"
                placeholder="Ex: Av. Getulio Vargas"
              />
            </CBGridItem>

            <CBGridItem md={4}>
              <CBFormikInput
                name="number"
                label="Número"
                placeholder="Ex: 123"
              />
            </CBGridItem>

            <CBGridItem md={8}>
              <CBFormikInput
                name="neighborhood"
                label="Bairro"
                placeholder="Ex: Centro"
              />
            </CBGridItem>

            <CBGridItem md={8}>
              <CBFormikInput
                name="city"
                label="Cidade"
                placeholder="Ex: São Paulo"
              />
            </CBGridItem>

            <CBGridItem md={4}>
              <CBFormikInput name="state" label="Estado" placeholder="Ex: SP" />
            </CBGridItem>
          </CBGrid>

          {/* Informações Adicionais */}
          <h2 className="text-lg font-semibold text-(--text-primary) mb-3 border-b pb-1">
            Informações Adicionais
          </h2>

          <CBGrid>
            <CBGridItem md={12}>
              <CBFormikInput
                name="notes"
                label="Observações"
                placeholder="Ex: Esse cliente só recebe depois das 13h."
              />
            </CBGridItem>
          </CBGrid>
        </CBForm>
      </div>
    );
  },
};
