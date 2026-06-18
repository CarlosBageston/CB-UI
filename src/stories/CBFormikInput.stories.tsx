import type { Meta, StoryObj } from "@storybook/react-vite";
import { Formik, Form, useFormik } from "formik";
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
