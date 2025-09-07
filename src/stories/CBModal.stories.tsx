import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CBButton, CBInput, CBModal, CBSelector, CBTextArea } from "..";

const meta: Meta<typeof CBModal> = {
    title: "Components/CBModal",
    component: CBModal,
};
export default meta;

type Story = StoryObj<typeof CBModal>;

export const UserEditModal: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        const [name, setName] = useState("Carlos Bageston");
        const [bio, setBio] = useState("Desenvolvedor fullstack apaixonado por React e Ionic.");
        const [isAdmin, setIsAdmin] = useState(false);

        const handleSave = () => {
            alert(`Nome: ${name}\nBio: ${bio}\nAdministrador: ${isAdmin}`);
            setOpen(false);
        };

        return (
            <div className="p-6">
                <CBButton label="Editar Usuário" onClick={() => setOpen(true)} />

                <CBModal
                    isOpen={open}
                    onDismiss={() => setOpen(false)}
                    title="Editar Usuário"
                    subtitle="Atualize as informações do perfil"
                    footer={
                        <div className="flex justify-end gap-2">
                            <CBButton label="Cancelar" color="danger" onClick={() => setOpen(false)} />
                            <CBButton label="Salvar" onClick={handleSave} />
                        </div>
                    }
                >
                    <div className="flex flex-col gap-4">
                        <div className="!mt-2">
                            <CBInput
                                label="Nome"
                                onChangeValue={setName}
                                value={name}
                            />
                        </div>

                        <CBTextArea
                            label="Bio"
                            value={bio}
                            onChangeValue={setBio}
                            placeholder="Escreva uma breve descrição"
                            rows={4}
                        />

                        <CBSelector
                            type="checkbox"
                            label="Administrador"
                            checked={isAdmin}
                            onChange={setIsAdmin}
                        />
                    </div>
                </CBModal>
            </div>
        );
    },
};
