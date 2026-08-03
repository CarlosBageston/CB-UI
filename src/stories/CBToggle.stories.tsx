import { useState } from "react";
import CBToggle from "../components/CBToggle/CBToggle";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CBToggle> = {
  title: "Components/CBToggle",

  component: CBToggle,
};

export default meta;

type Story = StoryObj<typeof CBToggle>;

export const Default: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);

    return (
      <CBToggle
        label="Receber notificações"
        checked={enabled}
        onChange={setEnabled}
      />
    );
  },
};

export const Active: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(true);

    return (
      <CBToggle
        label="Sistema ativo"
        checked={enabled}
        onChange={setEnabled}
        color="success"
      />
    );
  },
};

export const LabelStart: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);

    return (
      <CBToggle
        label="Ativar sincronização"
        checked={enabled}
        onChange={setEnabled}
        labelPlacement="start"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Bloqueado",
    checked: true,
    disabled: true,
  },
};

export const Colors: Story = {
  render: () => {
    const [value, setValue] = useState(true);

    return (
      <div className="flex flex-col gap-5">
        <CBToggle
          label="Primary"
          checked={value}
          onChange={setValue}
          color="primary"
        />

        <CBToggle
          label="Success"
          checked={value}
          onChange={setValue}
          color="success"
        />

        <CBToggle
          label="Danger"
          checked={value}
          onChange={setValue}
          color="danger"
        />
      </div>
    );
  },
};
