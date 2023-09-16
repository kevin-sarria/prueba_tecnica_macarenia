import { createContext, Dispatch, SetStateAction } from "react";
import { useModal } from "../hooks";

interface Modal {
    openCloseModal: () => void;
    advancedSearch: ( e: any ) => void;
    editingAdminPersonas: () => void;
    setPersonaSelected: Dispatch<SetStateAction<Object>>;
    showAlertInfo: () => void;
    showAlertSuccess: () => void;
    showAlertError: () => void;
    closeEditingAdminPersona: () => void;
    deletePersonSelected: () => void;
    isModalOpen: boolean;
    isEditingAdminPersonas: boolean;
    contentModal: JSX.Element | null;
    personaSelected: Object;
}

interface Props {
    children: React.ReactNode;
}

export const ModalProvider = ({children}: Props): JSX.Element => {

    const modal = useModal();

    return (
        <AdminPeopleContext.Provider value={modal}>
            {children}
        </AdminPeopleContext.Provider>
    )

}

export const AdminPeopleContext = createContext<Modal | undefined>(undefined);