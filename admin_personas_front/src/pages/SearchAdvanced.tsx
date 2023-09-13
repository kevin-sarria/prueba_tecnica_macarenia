import { useContext } from 'react';
import { AdminPeopleContext } from "../context";

import { OpcionesSearchAdvanced, Paginador, SearchBar, Table } from ".";

export const SearchAdvanced = () => {

  const modal = useContext(AdminPeopleContext);
  const openCloseModal = modal?.openCloseModal;

  return (
    <div className="modalSection">
      <h2 className="sub-title">Busqueda Avanzada</h2>
      <div className="modalSection__container">
        <SearchBar />
        <Table toggleModal={openCloseModal} />
        <Paginador />
        <OpcionesSearchAdvanced toggleModal={openCloseModal} />
      </div>
    </div>
  );
};
