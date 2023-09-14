import { useContext } from 'react';
import { AdminPeopleContext } from "../../context";

interface Props {
  urlImage?: string;
}

export const Alert = ({ urlImage = "/img/icons/info.png" }: Props) => {

  const context = useContext(AdminPeopleContext)
  const openCloseModal = context?.openCloseModal;

  return (
    <div className="alert">
      <div className="alert__container">
        <img src={urlImage} alt="Icono alerta" />

        <div className="alert--options">
          
            <button
              onClick={openCloseModal}
              className="alert--options__eliminar"
            >
              <span>X</span>
              <p>Cancelar</p>
            </button>

            <button className="alert--options__guardar">
              <img src="/img/icons/save.svg" alt="Icono Guardar" />
              <p>Guardar</p>
            </button>
          
        </div>
      </div>
    </div>
  );
};
