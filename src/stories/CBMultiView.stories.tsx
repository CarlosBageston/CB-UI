// CBStepper.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FiUser,
  FiMapPin,
  FiCreditCard,
  FiCheckCircle,
  FiFileText,
  FiSettings,
  FiLock,
} from "react-icons/fi";
import { CBMultiView } from "..";
import type { Step } from "../components/CBMultiView";

const meta: Meta<typeof CBMultiView> = {
  title: "Components/CBStepper",
  component: CBMultiView,
  parameters: {
    layout: "padded",
  },
};
export default meta;

type Story = StoryObj<typeof CBMultiView>;

// ─── Steps realistas ──────────────────────────────────────────────────────────

const checkoutSteps: Step[] = [
  {
    title: "Dados pessoais",
    icon: <FiUser />,
    content: (
      <div className="flex flex-col gap-2">
        <input
          className="border rounded px-3 py-2 text-sm"
          placeholder="Nome completo"
        />
        <input className="border rounded px-3 py-2 text-sm" placeholder="CPF" />
        <input
          className="border rounded px-3 py-2 text-sm"
          placeholder="E-mail"
        />
      </div>
    ),
  },
  {
    title: "Endereço",
    icon: <FiMapPin />,
    content: (
      <div className="flex flex-col gap-2">
        <input className="border rounded px-3 py-2 text-sm" placeholder="CEP" />
        <input className="border rounded px-3 py-2 text-sm" placeholder="Rua" />
        <div className="flex gap-2">
          <input
            className="border rounded px-3 py-2 text-sm w-1/3"
            placeholder="Número"
          />
          <input
            className="border rounded px-3 py-2 text-sm flex-1"
            placeholder="Complemento"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Pagamento",
    icon: <FiCreditCard />,
    content: (
      <div className="flex flex-col gap-2">
        <input
          className="border rounded px-3 py-2 text-sm"
          placeholder="Número do cartão"
        />
        <div className="flex gap-2">
          <input
            className="border rounded px-3 py-2 text-sm w-1/2"
            placeholder="Validade"
          />
          <input
            className="border rounded px-3 py-2 text-sm w-1/2"
            placeholder="CVV"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Confirmação",
    icon: <FiCheckCircle />,
    content: (
      <div className="text-sm text-gray-600 space-y-1">
        <p>✅ Dados pessoais preenchidos</p>
        <p>✅ Endereço confirmado</p>
        <p>✅ Cartão válido</p>
        <p className="font-semibold text-gray-800 mt-2">
          Tudo certo! Clique em "Finalizar" para concluir.
        </p>
      </div>
    ),
  },
];

const onboardingSteps: Step[] = [
  {
    title: "Bem-vindo",
    icon: <FiUser />,
    content: (
      <p className="text-sm text-gray-600">
        Vamos configurar sua conta em poucos passos. Isso levará menos de 2
        minutos.
      </p>
    ),
  },
  {
    title: "Seu perfil",
    icon: <FiFileText />,
    content: (
      <div className="flex flex-col gap-2">
        <input
          className="border rounded px-3 py-2 text-sm"
          placeholder="Como quer ser chamado?"
        />
        <select className="border rounded px-3 py-2 text-sm text-gray-500">
          <option value="">Área de atuação</option>
          <option>Desenvolvimento</option>
          <option>Design</option>
          <option>Produto</option>
        </select>
      </div>
    ),
  },
  {
    title: "Preferências",
    icon: <FiSettings />,
    content: (
      <div className="flex flex-col gap-2 text-sm text-gray-700">
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked /> Receber novidades por e-mail
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Ativar modo escuro por padrão
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked /> Notificações push
        </label>
      </div>
    ),
  },
  {
    title: "Segurança",
    icon: <FiLock />,
    content: (
      <div className="flex flex-col gap-2">
        <input
          type="password"
          className="border rounded px-3 py-2 text-sm"
          placeholder="Crie uma senha"
        />
        <input
          type="password"
          className="border rounded px-3 py-2 text-sm"
          placeholder="Confirme a senha"
        />
      </div>
    ),
  },
  {
    title: "Pronto!",
    icon: <FiCheckCircle />,
    content: (
      <p className="text-sm text-gray-600">
        Conta configurada com sucesso. Você já pode começar a usar a plataforma.
        🎉
      </p>
    ),
  },
];

// ─── Stories ─────────────────────────────────────────────────────────────────

/**
 * Caso base: horizontal sem customização.
 * Serve para validar comportamento padrão de navegação e animações.
 */
export const HorizontalBasico: Story = {
  name: "Horizontal — Básico",
  render: () => (
    <CBMultiView
      variant="stepper"
      orientation="horizontal"
      steps={checkoutSteps}
      nextLabel={(i, len) => (i === len - 1 ? "Finalizar" : "Próximo")}
      prevLabel="Voltar"
    />
  ),
};

/**
 * Verifica que disableNext e disablePrev funcionam corretamente.
 * Passo 2 (índice 1) bloqueia o avanço — útil para testar validação de formulário.
 */
export const HorizontalComBloqueio: Story = {
  name: "Horizontal — Bloqueio de navegação",
  render: () => (
    <CBMultiView
      variant="stepper"
      orientation="horizontal"
      steps={checkoutSteps}
      nextLabel="Avançar"
      prevLabel="Retornar"
      disableNext={(step) => step === 1}
      disablePrev={(step) => step === 0}
    />
  ),
};

/**
 * Verifica que onNext assíncrono bloqueia navegação quando retorna false.
 * Simula validação de backend (ex: checar CEP).
 */
export const HorizontalComValidacaoAssincrona: Story = {
  name: "Horizontal — Validação assíncrona",
  render: () => (
    <CBMultiView
      variant="stepper"
      orientation="horizontal"
      steps={checkoutSteps}
      nextLabel="Avançar"
      prevLabel="Voltar"
      onNext={async (step) => {
        if (step === 1) {
          await new Promise((r) => setTimeout(r, 800));
          return false; // bloqueia passo de endereço sempre
        }
        return true;
      }}
    />
  ),
};

/**
 * Tema customizado: cobre circle, line, titleColor e botões individualmente.
 * Caso principal para testar o sistema de tema do stepper.
 */
export const HorizontalTemaCustom: Story = {
  name: "Horizontal — Tema customizado",
  render: () => (
    <CBMultiView
      variant="stepper"
      orientation="horizontal"
      steps={checkoutSteps}
      nextLabel="Avançar"
      prevLabel="Voltar"
      className="bg-slate-50 p-6 rounded-xl"
      theme={{
        stepper: {
          titleColor: "#1e293b",
          circle: { background: "#6366f1", text: "#ffffff" },
          line: "#a5b4fc",
          button: {
            next: {
              background: "#6366f1",
              text: "#ffffff",
              hover: "#4f46e5",
              active: "#4338ca",
            },
            prev: {
              variant: "outline",
              border: "#6366f1",
              text: "#6366f1",
            },
          },
        },
      }}
    />
  ),
};

/**
 * Caso base vertical com fluxo de onboarding.
 * Valida expansão/colapso animado do conteúdo e linha conectora.
 */
export const VerticalBasico: Story = {
  name: "Vertical — Básico",
  render: () => (
    <div className="max-w-md">
      <CBMultiView
        variant="stepper"
        orientation="vertical"
        steps={onboardingSteps}
        nextLabel={(i, len) => (i === len - 1 ? "Concluir" : "Continuar")}
        prevLabel={(i) => (i === 0 ? "Cancelar" : "Voltar")}
      />
    </div>
  ),
};

/**
 * Verifica que goTo (clicar em círculo) valida passos intermediários.
 * onNext bloqueia no passo 2 — clicar em passo 4 direto deve falhar.
 */
export const VerticalGoToComValidacao: Story = {
  name: "Vertical — goTo com validação intermediária",
  render: () => (
    <div className="max-w-md">
      <CBMultiView
        variant="stepper"
        orientation="vertical"
        steps={onboardingSteps}
        nextLabel="Continuar"
        prevLabel="Voltar"
        onNext={(step) => {
          if (step === 2) return false; // bloqueia saída do passo "Preferências"
        }}
      />
    </div>
  ),
};

/**
 * Tema customizado vertical com labels dinâmicos e botões arredondados.
 */
export const VerticalTemaCustom: Story = {
  name: "Vertical — Tema customizado",
  render: () => (
    <div className="max-w-md bg-white p-6 rounded-xl shadow-md">
      <CBMultiView
        variant="stepper"
        orientation="vertical"
        steps={onboardingSteps}
        color="primary"
        nextLabel={(i, len) => (i === len - 1 ? "🎉 Finalizar" : "Continuar")}
        prevLabel={(i) => (i === 0 ? "Sair" : "Voltar")}
        theme={{
          stepper: {
            titleColor: "#111827",
            circle: { background: "#f59e0b", text: "#1c1917" },
            line: "#fcd34d",
            button: {
              next: {
                background: "#f59e0b",
                text: "#1c1917",
                hover: "#d97706",
                active: "#b45309",
                rounded: true,
              },
              prev: {
                variant: "clear",
                text: "#6b7280",
                rounded: true,
              },
            },
          },
        }}
      />
    </div>
  ),
};

/**
 * Valida que initialStep funciona para iniciar em passo diferente de 0.
 */
export const HorizontalInitialStep: Story = {
  name: "Horizontal — initialStep=2",
  render: () => (
    <CBMultiView
      variant="stepper"
      orientation="horizontal"
      steps={checkoutSteps}
      initialStep={2}
      nextLabel="Avançar"
      prevLabel="Voltar"
    />
  ),
};

/**
 * Valida que showButtonNext/showButtonPrev ocultam os botões corretamente.
 * Útil quando a navegação é controlada externamente.
 */
export const HorizontalSemBotoes: Story = {
  name: "Horizontal — Sem botões (controle externo)",
  render: () => (
    <CBMultiView
      variant="stepper"
      orientation="horizontal"
      steps={checkoutSteps}
      showButtonNext={false}
      showButtonPrev={false}
    />
  ),
};
