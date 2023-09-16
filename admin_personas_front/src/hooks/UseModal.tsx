import { useState, useEffect } from "react";
import { Alert, DeletePerson, SearchAdvanced } from "../pages";

export const useModal = () => {

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    const [ isEditingAdminPersonas, setIsEditingAdminPersonas ] = useState<boolean>(false);
    const [ contentModal, setContentModal ] = useState<JSX.Element>(<></>);

    const [ personaSelected, setPersonaSelected ] = useState<Object>({});

    useEffect( () => {
        if( !isModalOpen ) {
            setContentModal(<></>);
        }
    }, [isModalOpen] );

    const openCloseModal = () => {
        setIsModalOpen( !isModalOpen );
    };

    const closeEditingAdminPersona = () => {
        setIsEditingAdminPersonas( false );
    };

    const editingAdminPersonas = () => {
        setIsModalOpen( false );
        setIsEditingAdminPersonas( true );
    };

    const advancedSearch = ( e: any ) => {
        e.preventDefault();
        if(isEditingAdminPersonas) setIsEditingAdminPersonas( prev => !prev );
        setContentModal( <SearchAdvanced /> ); // Aqui va el componente
        openCloseModal();
    }

    const showAlertInfo = () => {
        setContentModal( <Alert /> ); // Aqui va el componente
        // openCloseModal();
    }

    const showAlertSuccess = () => {
        setContentModal( <Alert urlImage="/img/icons/check.svg" /> ); // Aqui va el componente
        openCloseModal();
    }

    const showAlertError = () => {
        setContentModal( <Alert urlImage="/img/icons/error.png" /> ); // Aqui va el componente
        openCloseModal();
    }

    const deletePersonSelected = (data: any) => {
        setContentModal( <DeletePerson urlImage="/img/icons/error.png" person={data} /> ); // Aqui va el componente
    }

    return {
        
        // Functions
        openCloseModal,
        advancedSearch,
        editingAdminPersonas,
        showAlertInfo,
        showAlertSuccess,
        showAlertError,
        setPersonaSelected,
        closeEditingAdminPersona,
        deletePersonSelected,


        // Variables
        isModalOpen,
        contentModal,
        isEditingAdminPersonas,
        personaSelected

    }

}