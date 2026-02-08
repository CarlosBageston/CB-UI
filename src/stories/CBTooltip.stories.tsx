import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBButton, CBTooltip } from "..";


const meta: Meta<typeof CBTooltip> = {
    title: "Feedback/CBTooltip",
    component: CBTooltip,
};
export default meta;

type Story = StoryObj<typeof CBTooltip>;

export const Default: Story = {
    render: () => (
        <div className="flex ">
            <CBTooltip content="Tooltip superior" placement="top">
                <CBButton className="!mr-2" label="Hover Top" />
            </CBTooltip>

            <CBTooltip content="Tooltip inferior" placement="bottom" color="success">
                <CBButton className="!mr-2" label="Hover Bottom" />
            </CBTooltip>

            <CBTooltip content="Tooltip esquerda" placement="left" color="warning">
                <CBButton className="!mr-2" label="Hover Left" />
            </CBTooltip>

            <CBTooltip content="Tooltip direita" placement="right" color="danger">
                <CBButton className="!mr-2" label="Hover Right" />
            </CBTooltip>
            <CBTooltip content="Tooltip neutro" placement="right" color="neutral">
                <CBButton label="Hover neutro" />
            </CBTooltip>
            <CBTooltip content="Tooltip neutro" stopPropagation trigger="click">
                <CBButton label="Hover neutro" />
            </CBTooltip>
            <CBTooltip
                content={
                    <div className="space-y-1 text-sm text-gray-800 dark:text-gray-300">
                        <p>Este é um tooltip maior, com múltiplas linhas para testar largura.</p>
                        <p>Você pode controlar a largura via tooltipStyle.</p>
                    </div>
                }
                placement="bottom"
                color="neutral"
                trigger="click"
                stopPropagation
                tooltipStyle={{ width: 200, marginLeft: -100, padding: "1rem", backgroundColor: "#f3f4f6" }}
            >
                <CBButton label="Tooltip Custom" />
            </CBTooltip>
        </div>
    ),
};
