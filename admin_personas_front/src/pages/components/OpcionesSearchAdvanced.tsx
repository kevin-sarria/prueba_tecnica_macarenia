interface Props {
  toggleModal: (() => void) | undefined;
  showAlert: ( () => void ) | undefined;
}

export const OpcionesSearchAdvanced = ({ toggleModal, showAlert }: Props) => {
  return (
    <div className="opcionesSearchAdvanced">
      <div className="opcionesSearchAdvanced__container">
        <button
          className="opcionesSearchAdvanced--limpiar"
          onClick={showAlert}
        >
            <p>Limpiar</p>
            <img src="/img/icons/limpiar.svg" alt="Icono Limpiar" />
        </button>
        <button
          className="opcionesSearchAdvanced--eliminar"
          onClick={toggleModal}
        >
            <p>Cancelar</p>
            <span>X</span>
        </button>
      </div>
    </div>
  );
};
