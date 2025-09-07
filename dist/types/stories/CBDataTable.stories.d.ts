import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBDataTable } from "..";
interface User {
    id: number;
    name: string;
    role: string;
    age: number;
    email: string;
    phone: string;
}
declare const meta: Meta<typeof CBDataTable<User>>;
export default meta;
type Story = StoryObj<typeof CBDataTable<User>>;
export declare const WithFilter: Story;
export declare const WithData: Story;
export declare const Empty: Story;
