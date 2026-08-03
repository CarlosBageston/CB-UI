import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import CBRadioGroup from "../components/CBRadio/CBRadioGroup";

const meta: Meta<typeof CBRadioGroup> = {
  title: "Components/CBRadio",
  component: CBRadioGroup,

  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
    },

    labelPlacement: {
      control: "radio",
      options: ["start", "end"],
    },

    color: {
      control: "select",
      options: ["primary", "secondary", "success", "danger", "warning"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CBRadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("PF");

    return (
      <CBRadioGroup
        value={value}
        options={[
          {
            label: "Pessoa Física",
            value: "PF",
          },
          {
            label: "Pessoa Jurídica",
            value: "PJ",
          },
        ]}
        onChange={setValue}
      />
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState("pix");

    return (
      <CBRadioGroup
        value={value}
        onChange={setValue}
        direction="row"
        options={[
          {
            label: "Pix",
            value: "pix",
          },
          {
            label: "Cartão",
            value: "card",
          },
          {
            label: "Dinheiro",
            value: "cash",
          },
        ]}
      />
    );
  },
};

export const LabelStart: Story = {
  render: () => {
    const [value, setValue] = useState("small");

    return (
      <CBRadioGroup
        value={value}
        onChange={setValue}
        labelPlacement="start"
        direction="row"
        options={[
          {
            label: "Pequeno",
            value: "small",
          },
          {
            label: "Médio",
            value: "medium",
          },
          {
            label: "Grande",
            value: "large",
          },
        ]}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("active");

    return (
      <CBRadioGroup
        value={value}
        onChange={setValue}
        options={[
          {
            label: "Disponível",
            value: "active",
          },
          {
            label: "Bloqueado",
            value: "blocked",
            disabled: true,
          },
        ]}
      />
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [value, setValue] = useState("success");

    return (
      <div className="flex flex-col gap-5">
        <CBRadioGroup
          value={value}
          onChange={setValue}
          color="primary"
          options={[
            {
              label: "Primary",
              value: "primary",
            },
          ]}
        />

        <CBRadioGroup
          value={value}
          onChange={setValue}
          color="success"
          options={[
            {
              label: "Success",
              value: "success",
            },
          ]}
        />

        <CBRadioGroup
          value={value}
          onChange={setValue}
          color="danger"
          options={[
            {
              label: "Danger",
              value: "danger",
            },
          ]}
        />
      </div>
    );
  },
};
