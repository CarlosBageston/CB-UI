import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBButton, CBTooltip } from "../components";


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
        </div>
    ),
};
