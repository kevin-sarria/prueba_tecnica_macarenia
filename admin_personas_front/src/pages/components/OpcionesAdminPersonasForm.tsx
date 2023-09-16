
  
  export const OpcionesAdminPersonasForm = ({ functionsPersonas, resetForm }: any) => {

    const { showAlertInfo, showAlertSuccess, closeEditingAdminPersona } = functionsPersonas;

    const saveEditPerson = () => {
      showAlertSuccess();
      setTimeout( () => {
        closeEditingAdminPersona();
      }, 300 );
    }

    const resetEditPersonForm = () => {
      showAlertInfo();
      resetForm();
    }

    return (
      <div className="opcionesAdminPersonasForm">
        <div className="opcionesAdminPersonasForm__container">

          <button type="button" onClick={resetEditPersonForm} className="opcionesAdminPersonasForm--limpiar">
              <p>Limpiar</p>
              <img src="/img/icons/limpiar.svg" alt="Icono Limpiar" />
          </button>
          
          <button type="button" onClick={closeEditingAdminPersona} className="opcionesAdminPersonasForm--eliminar">
              <p>Cancelar</p>
              <span>X</span>
          </button>

          <button type="submit" onClick={saveEditPerson} className="opcionesAdminPersonasForm--guardar">
              <p>Guardar</p>
              <img src="/img/icons/save.svg" alt="Icono Guardar" />
          </button>
        </div>
      </div>
    );
  };
  