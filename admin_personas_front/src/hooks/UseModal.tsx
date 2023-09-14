import { useState } from "react";
import { Alert, SearchAdvanced } from "../pages";

export const useModal = () => {

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    const [ isEditingAdminPersonas, setIsEditingAdminPersonas ] = useState<boolean>(false);
    const [ contentModal, setContentModal ] = useState(<></>);

    const openCloseModal = () => {
        setIsModalOpen( !isModalOpen );
        if( !setIsModalOpen ) {
            setContentModal(<></>);
        }
    };

    const editingAdminPersonas = () => {
        setIsModalOpen( prev => !prev );
        setIsEditingAdminPersonas( prev => !prev );
    };

    const advancedSearch = ( e: any ) => {
        e.preventDefault();
        if(isEditingAdminPersonas) setIsEditingAdminPersonas( prev => !prev );
        setContentModal( <SearchAdvanced /> ); // Aqui va el componente
        openCloseModal();
    }

    const showAlertInfo = () => {
        setContentModal( <Alert /> ); // Aqui va el componente
        openCloseModal();
    }

    const showAlertSuccess = () => {
        setContentModal( <Alert urlImage="/img/icons/check.svg" /> ); // Aqui va el componente
        openCloseModal();
    }

    const showAlertError = () => {
        setContentModal( <Alert urlImage="/img/icons/error.png" /> ); // Aqui va el componente
        openCloseModal();
    }

    return {
        
        // Functions
        openCloseModal,
        advancedSearch,
        editingAdminPersonas,
        showAlertInfo,
        showAlertSuccess,
        showAlertError,


        // Variables
        isModalOpen,
        contentModal,
        isEditingAdminPersonas

    }

}