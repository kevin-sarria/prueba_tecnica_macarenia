import { useState } from "react";
import { SearchAdvanced } from "../pages";

export const useModal = () => {

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    const [ contentModal, setContentModal ] = useState(<></>);

    const openCloseModal = () => {
        setIsModalOpen( !isModalOpen );
        if( !setIsModalOpen ) {
            setContentModal(<></>);
        }
    };

    const advancedSearch = ( e: any ) => {
        // console.log(contentModal);
        e.preventDefault();
        setContentModal( <SearchAdvanced /> ); // Aqui va el componente
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