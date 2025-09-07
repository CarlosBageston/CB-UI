import type { Meta, StoryObj } from '@storybook/react-vite';
import CBSelect, { type CBSelectProps } from '../components/CBSelect';
interface OptionType {
    id: number;
    name: string;
}
declare const meta: Meta<typeof CBSelect>;
export default meta;
type Story = StoryObj<CBSelectProps<OptionType>>;
export declare const Default: Story;
export declare const ErrorState: Story;
export declare const Disabled: Story;
export declare const Loading: Story;
export declare const WithDifferentWidths: Story;
