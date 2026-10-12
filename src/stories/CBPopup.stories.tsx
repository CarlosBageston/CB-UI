import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import CBPopup from "../components/CBPopup";
import CBButton from "../components/CBButton";
import CBInput from "../components/CBInput";

const meta: Meta<typeof CBPopup> = {
  title: "Components/CBPopup",
  component: CBPopup,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "neutral",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CBPopup>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-6 flex flex-col items-start gap-4">
        <CBButton
          children="Abrir CBPopup (Default)"
          onClick={() => setOpen(true)}
        />

        <CBPopup
          {...args}
          isOpen={open}
          onDismiss={() => setOpen(false)}
          title="Confirmação de Ação"
          subtitle="Verifique as informações antes de continuar"
          color="primary"
          footer={
            <div className="flex justify-end gap-2 w-full">
              <CBButton
                children="Cancelar"
                variant="clear"
                onClick={() => setOpen(false)}
              />
              <CBButton
                children="Confirmar"
                color="primary"
                onClick={() => {
                  alert("Confirmado!");
                  setOpen(false);
                }}
              />
            </div>
          }
        >
          <div className="flex flex-col gap-2 py-2">
            <p>
              Este é o componente <strong>CBPopup</strong>. Ele se comporta como
              um card centralizado overlay no meio da tela.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              Possui altura ajustável ao conteúdo com limite max-h-[85vh] e
              scroll interno no IonContent.
            </p>
          </div>
        </CBPopup>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
      <div className="p-6 flex flex-col items-start gap-4">
        <CBButton
          children="Abrir Popup de Formulário"
          color="secondary"
          onClick={() => setOpen(true)}
        />

        <CBPopup
          isOpen={open}
          onDismiss={() => setOpen(false)}
          title="Novo Usuário"
          subtitle="Preencha os dados do cadastro"
          size="md"
          color="secondary"
          footer={
            <div className="flex justify-end gap-2 w-full">
              <CBButton
                children="Cancelar"
                variant="outline"
                color="neutral"
                onClick={() => setOpen(false)}
              />
              <CBButton
                children="Salvar"
                color="secondary"
                onClick={() => {
                  alert(`Salvo: ${name} (${email})`);
                  setOpen(false);
                }}
              />
            </div>
          }
        >
          <div className="flex flex-col gap-4 py-2">
            <CBInput
              label="Nome Completo"
              value={name}
              onChange={setName}
              placeholder="Digite seu nome"
            />
            <CBInput
              label="E-mail"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="exemplo@email.com"
            />
          </div>
        </CBPopup>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [activeSize, setActiveSize] = useState<
      "sm" | "md" | "lg" | "xl" | null
    >(null);

    return (
      <div className="p-6 flex flex-wrap gap-3">
        {(["sm", "md", "lg", "xl"] as const).map((sz) => (
          <CBButton
            key={sz}
            children={`Tamanho ${sz.toUpperCase()}`}
            variant="outline"
            onClick={() => setActiveSize(sz)}
          />
        ))}

        {activeSize && (
          <CBPopup
            isOpen={!!activeSize}
            onDismiss={() => setActiveSize(null)}
            title={`Popup Tamanho: ${activeSize.toUpperCase()}`}
            subtitle={`Controlado via prop size="${activeSize}"`}
            size={activeSize}
            color="info"
            footer={
              <div className="flex justify-end">
                <CBButton
                  children="Fechar"
                  onClick={() => setActiveSize(null)}
                />
              </div>
            }
          >
            <p className="py-4">
              Este popup está sendo exibido no tamanho <code>{activeSize}</code>
              .
            </p>
          </CBPopup>
        )}
      </div>
    );
  },
};
