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

// Gera 87 usuários fake, só pra simular um dataset "grande" no backend
export const ALL_USERS: MockUser[] = Array.from({ length: 87 }, (_, i) => ({
  id: i + 1,
  name: `Usuário ${i + 1}`,
  jobTitle: `Developer ${i + 1}`,
  email: `usuario${i + 1}@email.com`,
}));

// Simula uma chamada de API com delay, respeitando page/size,
// no mesmo formato do PaginationDto do backend real
export function fakeFetchUsers({
  page,
  size,
}: {
  page: number;
  size: number;
}): Promise<PaginationDto<MockUser>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = page * size;
      const end = start + size;
      const slice = ALL_USERS.slice(start, end);
      resolve({
        data: slice,
        totalElements: ALL_USERS.length,
        totalPages: Math.ceil(ALL_USERS.length / size),
        page,
        size,
      });
    }, 500); // delay pra você ver o "Carregando..." funcionando
  });
}

export const userColumns: CBTableColumn<MockUser>[] = [
  { field: "name", headerName: "Nome" },
  { field: "jobTitle", headerName: "Cargo", align: "center" },
  { field: "email", headerName: "Email", align: "center" },
];
