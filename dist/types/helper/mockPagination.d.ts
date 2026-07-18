import type { CBTableColumn } from "../datatable";
export interface MockUser {
    id: number;
    name: string;
    jobTitle: string;
    email: string;
}
export interface PaginationDto<T> {
    data: T[];
    totalElements: number;
    totalPages: number;
    page: number;
    size: number;
}
export declare const ALL_USERS: MockUser[];
export declare function fakeFetchUsers({ page, size, }: {
    page: number;
    size: number;
}): Promise<PaginationDto<MockUser>>;
export declare const userColumns: CBTableColumn<MockUser>[];
