import { dataTable } from ".";

interface Props {
  toggleModal: (() => void) | undefined;
}

export const Table = ({ toggleModal }: Props) => {
  return (
    <div className="table--section">
      <table className="table">
        <thead className="table__thead">
          <tr>
            <th>Tipo de documento</th>
            <th>Numero documento</th>
            <th className="opacity-0">Celda en blanco</th>
            <th>Primer nombre</th>
            <th>Primer apellido</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody className="table__tbody">
          {dataTable.map((obj, index) => (
            <tr key={index}>
              <td>{obj?.type_document}</td>
              <td>{obj?.number_document}</td>
              <td>{obj?.blankCell}</td>
              <td>{obj?.first_name}</td>
              <td>{obj?.first_lastname}</td>
              <td>
                <div className="table--options">
                  <button onClick={toggleModal}>
                    <img src="/img/icons/pencil.png" alt="Icono Editar" />
                  </button>
                  <button>
                    <img src="/img/icons/trash.png" alt="Icono Eliminar" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
