export interface User {
    id: number;
    name: string;
    role: string;
    age: number;
    email: string;
    phone: string;
    object?: {
        cidade: string;
    };
}
export declare const mockData: User[];
