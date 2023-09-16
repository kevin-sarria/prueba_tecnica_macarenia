import { useContext } from 'react';
import { AdminPeopleContext } from "../context";
import { CallApi } from '../helpers';

interface Props {
  urlImage: string;
  person: {
    id: string;
    document_number: string;
    first_name: string;
    last_name: string;
  };
}

export const DeletePerson = ({ urlImage, person }: Props) => {

  const context = useContext(AdminPeopleContext);
  const openCloseModal = context?.openCloseModal;
  const { id, document_number, first_name, last_name } = person;

  const confirmDelete = async() => {
    const formData = new FormData();
    formData.append('id', id);

    await CallApi.post('/eliminar-persona', formData);

    if( openCloseModal ) openCloseModal();

  }

  return (
    <div className="alert">
      <div className="alert__container">
        <img src={urlImage} alt="Icono alerta" />

        <p>Estas seguro de que deseas eliminar a "{first_name} {last_name}" con numero de documento "{document_number}"</p>

        <div className="alert--options">
          
            <button
              onClick={openCloseModal}
              className="alert--options__eliminar"
            >
              <span>X</span>
              <p>Cancelar</p>
            </button>

            <button
              className="alert--options__guardar"
              onClick={confirmDelete}
            >
              <img src="/img/icons/save.svg" alt="Icono Guardar" />
              <p>Aceptar</p>
            </button>
          
        </div>
      </div>
    </div>
  );
};
