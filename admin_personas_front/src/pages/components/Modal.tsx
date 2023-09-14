import { useContext } from "react";
import { AdminPeopleContext } from "../../context";

export const Modal = () => {

    const modal = useContext(AdminPeopleContext);
    const isModalOpen = modal?.isModalOpen;
    const contentModal = modal?.contentModal;

    return (
      <>
      {isModalOpen && 
        <div className="overlay">
            {contentModal}
        </div>}
      </>)
  };