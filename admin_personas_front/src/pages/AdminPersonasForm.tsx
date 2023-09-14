import { OpcionesAdminPersonasForm } from "./components";

interface Props {
  functionsPersonas: {
    showAlertInfo: (() => void) | undefined;
    showAlertSuccess: (() => void) | undefined;
    showAlertError: (() => void) | undefined;
    openCloseModal: (() => void) | undefined;
  }
}

export const AdminPersonasForm = ({ functionsPersonas }: Props) => {
  return (
    <div className="adminPersonasForm">
      <h2 className="sub-title">Informacion</h2>

      <form className="formulario--edit-personas">

        <div className="field">
          <label htmlFor="first_name">Primer Nombre: *</label>
          <input type="text" name="first_name" id="first_name" required />
        </div>

        <div className="field">
          <label htmlFor="middle_name">Segundo Nombre: *</label>
          <input type="text" name="middle_name" id="middle_name" required />
        </div>

        <div className="field">
          <label htmlFor="last_name">Primer Apellido: *</label>
          <input type="text" name="last_name" id="last_name" required />
        </div>

        <div className="field">
          <label htmlFor="second_surname">Segundo Apellido: *</label>
          <input type="text" name="second_surname" id="second_surname" required />
        </div>

        <div className="field">
          <label htmlFor="birthdate">Fecha de Nacimiento: *</label>
          <input type="date" name="birthdate" id="birthdate" required />
        </div>

        <div className="field">
          <label htmlFor="country_birth">Pais de Nacimiento: *</label>
          <input type="text" name="country_birth" id="country_birth" required />
        </div>

        <div className="field">
          <label htmlFor="gender">Genero: *</label>
          <input type="text" name="gender" id="gender" required />
        </div>

        <div className="field">
          <label htmlFor="civil_status">Estado Civil: *</label>
          <input type="text" name="civil_status" id="civil_status" required />
        </div>
        
      </form>

      <OpcionesAdminPersonasForm functionsPersonas={functionsPersonas} />

    </div>
  );
};
