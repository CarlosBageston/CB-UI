import { IonIcon } from "@ionic/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { add } from "ionicons/icons";

import CBButton, { type CBButtonProps } from "../components/CBButton";

const meta: Meta<typeof CBButton> = {
  title: "Components/CBButton",
  component: CBButton,
  parameters: {
    controls: {
      sort: "requiredFirst",
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },

    variant: {
      control: "select",
      options: ["solid", "outline", "clear"],
    },

    rounded: {
      control: "boolean",
    },

    fullWidth: {
      control: "boolean",
    },

    loading: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    gradient: {
      control: "text",
    },

    loadingText: {
      control: "text",
    },

    color: {
      control: "text",
    },

    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<CBButtonProps>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "outline",
    size: "medium",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    color: "--summary-yellow-bg",
    size: "medium",
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded Button",
    rounded: true,
    size: "medium",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Button with Icon",
    iconStart: <IonIcon icon={add} />,
    size: "medium",
  },
};

export const CustomColors: Story = {
  args: {
    children: "Custom Colors Button",
    size: "medium",

    backgroundColor: "#f43f5e",
    textColor: "#000000",
    borderColor: "#968686",
    hoverColor: "#cfc9cc",
    activeColor: "#130c0f",
  },
};

export const IconAndClick: Story = {
  args: {
    children: "Next",

    iconEnd: <IonIcon icon={add} />,

    backgroundColor: "#3b82f6",
    textColor: "#ffffff",
    borderColor: "#1d4ed8",
    hoverColor: "#2563eb",
    activeColor: "#1e40af",

    onClick: () => alert("Botão clicado!"),
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",

    loading: true,
    loadingText: "Carregando...",

    size: "medium",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",

    fullWidth: true,
    size: "medium",
    routerLink: "/register",
  },
};

export const Gradient: Story = {
  args: {
    children: "Gradient Button",

    gradient: "linear-gradient(90deg, #ff7e5f, #feb47b)",

    rounded: true,
    size: "medium",
  },
};
