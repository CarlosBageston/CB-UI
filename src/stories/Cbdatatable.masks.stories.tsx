import type { Meta, StoryObj } from "@storybook/react-vite";
import { CBDataTable, type CBTableColumn } from "../datatable";

/**
 * Registro "cru", como normalmente vem do backend: sem formatação nenhuma.
 * A ideia dessa story é provar que a tabela formata só na exibição,
 * sem alterar o dado original (raw).
 */
interface MaskedRecord {
  id: number;
  cpf: string; // só dígitos
  cnpj: string; // só dígitos
  cep: string; // só dígitos
  phone: string; // só dígitos
  salaryNumber: number; // number puro, ex: 1234.5
  salaryString: string; // vem como string do backend, ex: "1234.5"
  salaryInteger: number; // sem casas decimais, ex: 5000
  noValue: string; // vazio, pra testar o fallback "-"
}

const mockMaskedData: MaskedRecord[] = [
  {
    id: 1,
    cpf: "12345678901",
    cnpj: "12345678000199",
    cep: "84000000",
    phone: "41999998888",
    salaryNumber: 1234.56,
    salaryString: "1234.5", // caso que quebrava antes do fix (1 casa decimal)
    salaryInteger: 5000, // caso que quebrava antes do fix (sem decimal)
    noValue: "",
  },
  {
    id: 2,
    cpf: "98765432100",
    cnpj: "98765432000188",
    cep: "01310100",
    phone: "11988887777",
    salaryNumber: 0.5,
    salaryString: "10", // era pra virar R$ 10,00, e não R$ 0,10
    salaryInteger: 999999,
    noValue: "",
  },
  {
    id: 3,
    cpf: "11122233344",
    cnpj: "11222333000144",
    cep: "80010000",
    phone: "41912345678",
    salaryNumber: 100,
    salaryString: "100.00",
    salaryInteger: 0,
    noValue: "",
  },
];

const maskedColumns: CBTableColumn<MaskedRecord>[] = [
  { field: "cpf", headerName: "CPF", mask: "cpf", col: 2 },
  { field: "cnpj", headerName: "CNPJ", mask: "cnpj", col: 2 },
  { field: "cep", headerName: "CEP", mask: "cep", col: 2 },
  { field: "phone", headerName: "Telefone", mask: "tel", col: 2 },
  {
    field: "salaryNumber",
    headerName: "Salário (number)",
    mask: "currency",
    col: 2,
  },
  {
    field: "salaryString",
    headerName: "Salário (string, 1 casa)",
    mask: "currency",
    col: 2,
  },
  {
    field: "salaryInteger",
    headerName: "Salário (inteiro)",
    mask: "currency",
    col: 2,
  },
  {
    field: "noValue",
    headerName: "Vazio (fallback)",
    mask: "cpf",
    col: 2,
  },
  {
    // Máscara custom: só pra provar que CBInputMaskFn também funciona na tabela
    field: "phone",
    headerName: "Telefone (custom mask)",
    col: 2,
    mask: (value: string) => {
      const digits = value.replace(/\D/g, "");
      return { formatted: `+55 ${digits}`, raw: digits };
    },
  },
];

const meta: Meta<typeof CBDataTable<MaskedRecord>> = {
  title: "Form/CBDataTable/Masks",
  component: CBDataTable<MaskedRecord>,
};

export default meta;
type Story = StoryObj<typeof CBDataTable<MaskedRecord>>;

// Desktop: confirma que valueFormatter aplica a máscara na célula do AG Grid
export const MasksDesktop: Story = {
  render: () => {
    return (
      <div className="w-full">
        <CBDataTable<MaskedRecord>
          getRowId={(item) => item.id.toString()}
          modeTable="desktop"
          columns={maskedColumns}
          data={mockMaskedData}
          pageSize={5}
          emptyMessage="Nenhum registro encontrado"
        />
      </div>
    );
  },
};

// Mobile: confirma que getDisplayValue aplica a máscara no título e nos
// campos expandidos do card
export const MasksMobile: Story = {
  render: () => (
    <div className="max-w-100">
      <CBDataTable<MaskedRecord>
        getRowId={(item) => item.id.toString()}
        modeTable="mobile"
        columns={maskedColumns}
        data={mockMaskedData}
        pageSize={5}
        emptyMessage="Nenhum registro encontrado"
      />
    </div>
  ),
};

// Coluna cujo campo tem valor vazio: precisa cair no fallback "-" e NÃO
// quebrar tentando aplicar a máscara em cima de string vazia
export const MasksWithEmptyValue: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="w-full">
        <CBDataTable<MaskedRecord>
          getRowId={(item) => item.id.toString()}
          modeTable="desktop"
          columns={[{ field: "noValue", headerName: "CPF vazio", mask: "cpf" }]}
          data={mockMaskedData}
          pageSize={5}
        />
      </div>
      <div className="max-w-100">
        <CBDataTable<MaskedRecord>
          getRowId={(item) => item.id.toString()}
          modeTable="mobile"
          columns={[{ field: "noValue", headerName: "CPF vazio", mask: "cpf" }]}
          data={mockMaskedData}
          pageSize={5}
        />
      </div>
    </div>
  ),
};
