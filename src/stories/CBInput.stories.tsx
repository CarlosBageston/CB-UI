import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CBInput } from "..";

const meta: Meta<typeof CBInput> = {
  title: "Form/CBInput",
  component: CBInput,
};

export default meta;

type Story = StoryObj<typeof CBInput>;

export const Playground: Story = {
  render: () => {
    const [form, setForm] = useState({
      nome: "",
      email: "",
      senha: "",
      telefone: "",
      cep: "",
      salario: "",
      idade: "",
    });

    const [rawValues, setRawValues] = useState({
      telefone: "",
      cep: "",
      salario: "",
    });

    return (
      <div
        style={{
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: 24,
        }}
        className="max-h-full overflow-auto"
      >
        <h2>Cadastro de Usuário</h2>

        <CBInput
          label="Nome"
          placeholder="Carlos Bageston"
          value={form.nome}
          onChange={(nome) => setForm((prev) => ({ ...prev, nome }))}
        />

        <CBInput
          label="Email"
          type="email"
          placeholder="carlos@email.com"
          value={form.email}
          onChange={(email) => setForm((prev) => ({ ...prev, email }))}
        />

        <CBInput
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={form.senha}
          onChange={(senha) => setForm((prev) => ({ ...prev, senha }))}
        />

        <CBInput
          label="Telefone"
          placeholder="(00) 00000-0000"
          mask="tel"
          maxLength={15}
          value={form.telefone}
          onChange={(telefone) => setForm((prev) => ({ ...prev, telefone }))}
          onRawChange={(raw) =>
            setRawValues((prev) => ({ ...prev, telefone: raw }))
          }
        />

        <CBInput
          label="CEP"
          placeholder="00000-000"
          mask="cep"
          maxLength={9}
          value={form.cep}
          onChange={(cep) => setForm((prev) => ({ ...prev, cep }))}
          onRawChange={(raw) => setRawValues((prev) => ({ ...prev, cep: raw }))}
        />

        <CBInput
          label="Salário"
          placeholder="R$ 0,00"
          mask="currency"
          value={form.salario}
          onChange={(salario) => setForm((prev) => ({ ...prev, salario }))}
          onRawChange={(raw) =>
            setRawValues((prev) => ({ ...prev, salario: raw }))
          }
        />

        <CBInput
          label="Idade"
          type="number"
          placeholder="18"
          value={form.idade}
          onChange={(idade) => setForm((prev) => ({ ...prev, idade }))}
        />

        <CBInput
          label="Email com erro"
          type="email"
          placeholder="email@invalido"
          value="emailinvalido.com"
          error="Formato de email inválido"
          onChange={() => {}}
        />

        <CBInput
          label="Campo desabilitado"
          value="Valor bloqueado"
          disabled
          onChange={() => {}}
        />

        <div
          style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 8,
            background: "#f5f5f5",
            fontSize: 14,
          }}
        >
          <strong>Valores formatados:</strong>

          <pre>{JSON.stringify(form, null, 2)}</pre>

          <strong>Valores brutos:</strong>

          <pre>{JSON.stringify(rawValues, null, 2)}</pre>
        </div>
      </div>
    );
  },
};
export const Colors: Story = {
  render: () => {
    const [values, setValues] = useState({
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
      neutral: "",
    });

    return (
      <div
        style={{
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: 24,
        }}
      >
        <h2>Colors</h2>

        <CBInput
          label="Primary"
          color="primary"
          value={values.primary}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, primary: value }))
          }
        />

        <CBInput
          label="Secondary"
          color="secondary"
          value={values.secondary}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, secondary: value }))
          }
        />

        <CBInput
          label="Success"
          color="success"
          value={values.success}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, success: value }))
          }
        />

        <CBInput
          label="Warning"
          color="warning"
          value={values.warning}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, warning: value }))
          }
        />

        <CBInput
          label="Danger"
          color="danger"
          value={values.danger}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, danger: value }))
          }
        />

        <CBInput
          label="Neutral"
          color="neutral"
          value={values.neutral}
          onChange={(value) =>
            setValues((prev) => ({ ...prev, neutral: value }))
          }
        />
      </div>
    );
  },
};
export const LabelPlacements: Story = {
  render: () => (
    <div
      style={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 24,
      }}
    >
      <h2>Label Placements</h2>

      <CBInput
        label="Stacked"
        labelPlacement="stacked"
        value=""
        onChange={() => {}}
      />

      <CBInput
        label="Floating"
        labelPlacement="floating"
        value=""
        onChange={() => {}}
      />

      <CBInput
        label="Fixed"
        labelPlacement="fixed"
        value="Valor preenchido"
        onChange={() => {}}
      />
    </div>
  ),
};
export const FillVariants: Story = {
  render: () => {
    const [outline, setOutline] = useState("");
    const [solid, setSolid] = useState("");

    return (
      <div
        style={{
          maxWidth: 500,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: 24,
        }}
      >
        <h2>Fill Variants</h2>

        <CBInput
          label="Outline"
          fill="outline"
          placeholder="Digite algo"
          value={outline}
          onChange={setOutline}
        />

        <CBInput
          label="Solid"
          fill="solid"
          placeholder="Digite algo"
          value={solid}
          onChange={setSolid}
        />

        <CBInput
          label="Outline com erro"
          fill="outline"
          value="teste"
          error="Campo inválido"
          onChange={() => {}}
        />

        <CBInput
          label="Solid com erro"
          fill="solid"
          value="teste"
          error="Campo inválido"
          onChange={() => {}}
        />
      </div>
    );
  },
};
