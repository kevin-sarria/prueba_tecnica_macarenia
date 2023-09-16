import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { CallApi } from '../../helpers';

interface Props {
  propsTable: {
    toggleModal?: (() => void) | undefined;
    editPersonas: (() => void) | undefined;
    setPersona: Dispatch<SetStateAction<Object>> | undefined;
    deletePersona: Dispatch<SetStateAction<Object>> | undefined;
  }
}

interface State {
  type_document: string;
  document_number: string;
  blankCell?: string;
  first_name: string;
  last_name: string;
}

export const Table = ({ propsTable }: Props) => {

  const [ dataTable, setDataTable ] = useState<Array<State>>([]);

  const { editPersonas, deletePersona, setPersona } = propsTable;

  const data = async(): Promise<void> => {
    try {
     setDataTable(await CallApi.get('/listar-personas'));
    } catch(error) {
      console.error(error);
    }
  }

  useEffect( () => {
    data();
  }, [] );

  const editPersonaToggleForm = (data: Object) => {
    if( editPersonas ) editPersonas();
    if( setPersona ) return setPersona(data);
  }

  const deletePersonaToggleForm = (data: Object) => {
    if( deletePersona ) deletePersona(data);
    if( setPersona ) return setPersona(data);
  }

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
              <td>{obj?.document_number}</td>
              <td>{obj?.blankCell}</td>
              <td>{obj?.first_name}</td>
              <td>{obj?.last_name}</td>
              <td>
                <div className="table--options">
                  <button onClick={() => editPersonaToggleForm(obj)}>
                    <img src="/img/icons/pencil.png" alt="Icono Editar" />
                  </button>
                  <button onClick={() => deletePersonaToggleForm(obj)}>
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
