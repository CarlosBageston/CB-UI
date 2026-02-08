import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBCard } from "..";
declare const meta: Meta<typeof CBCard>;
export default meta;
type Story = StoryObj<typeof CBCard>;
export declare const Default: Story;
export declare const CollapsibleCard: Story;
export declare const RealisticCard: Story;
export declare const CardWithActions: Story;
