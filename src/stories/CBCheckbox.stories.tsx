import { useState } from "react";
import CBCheckbox from "../components/CBCheckbox/CBCheckbox";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CBCheckbox> = {
  title: "Components/CBCheckbox",
  component: CBCheckbox,

  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "danger", "warning"],
    },

    labelPlacement: {
      control: "radio",
      options: ["start", "end"],
    },

    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CBCheckbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <CBCheckbox
        label="Aceito os termos"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return (
      <CBCheckbox
        label="Usuário ativo"
        checked={checked}
        onChange={setChecked}
        color="success"
      />
    );
  },
};

export const LabelStart: Story = {
  render: () => {
    const [value, setValue] = useState(false);

    return (
      <CBCheckbox
        label="Label antes"
        checked={value}
        onChange={setValue}
        labelPlacement="start"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Desabilitado",
    checked: true,
    disabled: true,
  },
};

export const Colors: Story = {
  render: () => {
    const [value, setValue] = useState(true);

    return (
      <div className="flex flex-col gap-4">
        <CBCheckbox
          label="Primary"
          checked={value}
          onChange={setValue}
          color="primary"
        />

        <CBCheckbox
          label="Success"
          checked={value}
          onChange={setValue}
          color="success"
        />

        <CBCheckbox
          label="Danger"
          checked={value}
          onChange={setValue}
          color="danger"
        />
      </div>
    );
  },
};
