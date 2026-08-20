import type { Meta, StoryObj } from "@storybook/react-vite";
import { Formik, Form, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { CBForm, CBFormikInput } from "../formikInput";

const meta: Meta<typeof CBFormikInput> = {
  title: "Form/CBFormikInput",
  component: CBFormikInput,
};

export default meta;

type Story = StoryObj<typeof CBFormikInput>;

const validationSchema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  salary: Yup.number()
    .typeError("Informe um valor válido")
    .required("Salário obrigatório"),
});

export const Playground: Story = {
  render: () => (
    <Formik
      initialValues={{
        name: "",
        email: "",
        salary: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, errors, touched }) => (
        <Form
          style={{
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: 24,
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <h2>CBFormikInput</h2>

          <CBFormikInput
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
          />

          <CBFormikInput
            name="email"
            type="email"
            label="E-mail"
            placeholder="email@exemplo.com"
          />

          <CBFormikInput
            name="salary"
            label="Salário"
            placeholder="R$ 0,00"
            mask="currency"
            valueSource="raw"
            transformValue={(value) => Number(value)}
          />
          <CBFormikInput
            name="telefone"
            label="Telefone"
            placeholder="(00) 00000-0000"
            mask="tel"
            valueSource="raw"
            maxLength={15}
          />
          <CBFormikInput
            name="cnpj"
            label="CNPJ"
            placeholder="(00) 00000-0000"
            mask="cnpj"
            valueSource="raw"
            maxLength={18}
          />

          <button type="submit">Salvar</button>

          <div
            style={{
              marginTop: 20,
              padding: 16,
              borderRadius: 8,
              background: "#f5f5f5",
              fontSize: 14,
            }}
          >
            <strong>Values</strong>

            <pre>{JSON.stringify(values, null, 2)}</pre>

            <strong>Errors</strong>

            <pre>{JSON.stringify(errors, null, 2)}</pre>

            <strong>Touched</strong>

            <pre>{JSON.stringify(touched, null, 2)}</pre>
          </div>
        </Form>
      )}
    </Formik>
  ),
};
export const TouchedValidation: Story = {
  render: () => (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Campo obrigatório"),
      })}
      onSubmit={() => {}}
    >
      <Form
        style={{
          maxWidth: 500,
          padding: 24,
        }}
      >
        <CBFormikInput
          name="name"
          label="Nome"
          placeholder="Clique e saia do campo"
        />
      </Form>
    </Formik>
  ),
};
export const WithUseFormik: Story = {
  render: () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        salary: 152.05,
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail obrigatório"),
        salary: Yup.number()
          .typeError("Valor inválido")
          .required("Salário obrigatório")
          .min(0.01, "Salário deve ser maior 0"),
      }),
      onSubmit: (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      },
    });

    return (
      <CBForm formik={formik}>
        <h2>CBFormikInput + useFormik</h2>
        <CBFormikInput name="name" label="Nome" placeholder="Digite seu nome" />

        <CBFormikInput
          name="email"
          label="E-mail"
          type="email"
          placeholder="email@exemplo.com"
        />

        <CBFormikInput
          name="salary"
          label="Salário"
          placeholder="R$ 0,00"
          mask="currency"
          valueSource="raw"
          transformValue={Number}
        />

        <button type="submit">Salvar</button>

        <div
          style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 8,
            background: "#f5f5f5",
            fontSize: 14,
          }}
        >
          <strong>Values</strong>

          <pre>{JSON.stringify(formik.values, null, 2)}</pre>

          <strong>Errors</strong>

          <pre>{JSON.stringify(formik.errors, null, 2)}</pre>

          <strong>Touched</strong>

          <pre>{JSON.stringify(formik.touched, null, 2)}</pre>

          <strong>isValid</strong>

          <pre>{JSON.stringify(formik.isValid, null, 2)}</pre>
        </div>
      </CBForm>
    );
  },
};

export const InteractiveEvents: Story = {
  render: () => {
    const formik = useFormik({
      initialValues: { search: "" },
      onSubmit: () => {},
    });

    const [events, setEvents] = useState<
      { id: number; type: string; detail: string; time: string }[]
    >([]);

    const log = (type: string, detail = "") => {
      const time = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setEvents((prev) => [
        { id: Date.now(), type, detail, time },
        ...prev.slice(0, 19),
      ]);
    };

    const badgeColor: Record<string, string> = {
      onClick: "#6366f1",
      onKeyDown: "#0ea5e9",
      onEnterPress: "#10b981",
    };

    return (
      <CBForm formik={formik}>
        <div
          style={{
            maxWidth: 520,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            fontFamily: "sans-serif",
          }}
        >
          <h2 style={{ margin: 0 }}>Eventos: onClick · onKeyDown · onEnterPress</h2>

          <CBFormikInput
            name="search"
            label="Campo de teste"
            placeholder="Clique, digite ou pressione Enter..."
            onClick={() => log("onClick")}
            onKeyDown={(e) => log("onKeyDown", `key="${e.key}"`)}
            onEnterPress={() => log("onEnterPress", "🚀 Enter pressionado!")}
          />

          <div
            style={{
              background: "#0f172a",
              borderRadius: 12,
              padding: 16,
              minHeight: 220,
              overflowY: "auto",
              maxHeight: 320,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: "#64748b",
                marginBottom: 4,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Event Log (últimos 20)
            </span>

            {events.length === 0 && (
              <span
                style={{ color: "#475569", fontSize: 13, fontStyle: "italic" }}
              >
                Nenhum evento ainda. Interaja com o campo acima.
              </span>
            )}

            {events.map((ev) => (
              <div
                key={ev.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  fontFamily: "monospace",
                }}
              >
                <span style={{ color: "#475569", minWidth: 70 }}>{ev.time}</span>
                <span
                  style={{
                    background: badgeColor[ev.type] ?? "#6b7280",
                    color: "#fff",
                    borderRadius: 4,
                    padding: "1px 7px",
                    fontSize: 11,
                    fontWeight: 600,
                    minWidth: 110,
                    textAlign: "center",
                  }}
                >
                  {ev.type}
                </span>
                <span style={{ color: "#cbd5e1" }}>{ev.detail}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setEvents([])}
            style={{
              alignSelf: "flex-start",
              background: "transparent",
              border: "1px solid #334155",
              color: "#94a3b8",
              borderRadius: 6,
              padding: "4px 12px",
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            Limpar log
          </button>
        </div>
      </CBForm>
    );
  },
};
