import { useContext } from 'react';
import { AdminPeopleContext } from "../context";

import { OpcionesSearchAdvanced, Paginador, SearchBar, Table } from ".";

export const SearchAdvanced = () => {

  const context = useContext(AdminPeopleContext);
  const openCloseModal = context?.openCloseModal;
  const editingAdminPersonas = context?.editingAdminPersonas;
  const setPersonaSelected = context?.setPersonaSelected;
  const deletePersonaSelected = context?.deletePersonSelected;
  const showAlertInfo = context?.showAlertInfo;

  const propsTable = {
    toggleModal: openCloseModal,
    editPersonas: editingAdminPersonas,
    setPersona: setPersonaSelected,
    deletePersona: deletePersonaSelected
  }

  return (
    <div className="modalSection">
      <h2 className="sub-title">Busqueda Avanzada</h2>
      <div className="modalSection__container">
        <SearchBar />
        <Table propsTable={propsTable} />
        <Paginador />
        <OpcionesSearchAdvanced toggleModal={openCloseModal} showAlert={showAlertInfo} />
      </div>
    </div>
  );
};
