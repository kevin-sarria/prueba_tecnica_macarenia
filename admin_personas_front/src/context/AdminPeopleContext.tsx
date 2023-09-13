import { createContext } from "react";
import { useModal } from "../hooks";

interface Modal {
    openCloseModal: () => void;
    advancedSearch: () => void;
    isModalOpen: boolean;
    contentModal: JSX.Element
}

const modal: Modal = useModal();

export const AdminPeopleContext = createContext(modal);