import { useState } from "react";

export const useModal = () => {

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    const [contentModal, setContentModal] = useState<JSX.Element>(<></>);

    const openCloseModal = () => {
        setIsModalOpen( !isModalOpen );
        if( !isModalOpen ) {
            setContentModal(<></>);
        }
    };

    const advancedSearch = () => {
        setContentModal( <></> ); // Aqui va el componente
        openCloseModal();
    }

    return {
        
        // Functions
        openCloseModal,
        advancedSearch,


        // Variables
        isModalOpen,
        contentModal,

    }

}