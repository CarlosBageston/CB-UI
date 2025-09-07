import type { Meta, StoryObj } from '@storybook/react-vite';
import CBAutocomplete, { type CBAutocompleteProps } from '../components/CBAutoComplete';
interface OptionType {
    id: number;
    name: string;
}
declare const meta: Meta<typeof CBAutocomplete>;
export default meta;
type Story = StoryObj<CBAutocompleteProps<OptionType>>;
export declare const SelectVariant: Story;
export declare const SearchVariant: Story;
export declare const WithDifferentWidths: Story;
export declare const Loading: Story;
