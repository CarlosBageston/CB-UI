import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CBToast from "../components/CBToast";
import type { ToastPosition } from "../components/CBToast";
import CBButton from "../components/CBButton";

const meta: Meta<typeof CBToast> = {
  title: "Feedback/CBToast",
  component: CBToast,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof CBToast>;

export const Playground: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    const [pos, setPos] = useState<ToastPosition>("bottom-center");

    const triggerToast = (position: ToastPosition) => {
      setPos(position);
      setShow(false);
      // Small timeout to trigger enter animation again if already showing
      setTimeout(() => setShow(true), 50);
    };

    const positions: ToastPosition[] = [
      "top-left",
      "top-center",
      "top-right",
      "center",
      "bottom-left",
      "bottom-center",
      "bottom-right",
    ];

    return (
      <div className="flex flex-col w-full gap-4 items-center p-6 border border-gray-200 rounded-xl bg-gray-50/50">
        <span className="font-semibold text-lg text-gray-700">
          Testar Posicionamento do Toast
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {positions.map((p) => (
            <CBButton
              key={p}
              onClick={() => triggerToast(p)}
              className="px-3 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              {p}
            </CBButton>
          ))}
        </div>

        {show && (
          <CBToast
            message={`Toast posicionado em: ${pos}`}
            type="success"
            duration={3000}
            show={show}
            position={pos}
            onClose={() => setShow(false)}
          />
        )}
      </div>
    );
  },
};
