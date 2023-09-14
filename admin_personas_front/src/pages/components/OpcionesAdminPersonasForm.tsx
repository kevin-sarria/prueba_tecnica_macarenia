
  
  export const OpcionesAdminPersonasForm = ({ functionsPersonas }: any) => {

    const { showAlertInfo, showAlertSuccess, showAlertError } = functionsPersonas;

    return (
      <div className="opcionesAdminPersonasForm">
        <div className="opcionesAdminPersonasForm__container">

          <button onClick={showAlertInfo} className="opcionesAdminPersonasForm--limpiar">
              <p>Limpiar</p>
              <img src="/img/icons/limpiar.svg" alt="Icono Limpiar" />
          </button>
          
          <button onClick={showAlertError} className="opcionesAdminPersonasForm--eliminar">
              <p>Cancelar</p>
              <span>X</span>
          </button>

          <button onClick={showAlertSuccess} className="opcionesAdminPersonasForm--guardar">
              <p>Guardar</p>
              <img src="/img/icons/save.svg" alt="Icono Guardar" />
          </button>
        </div>
      </div>
    );
  };
  