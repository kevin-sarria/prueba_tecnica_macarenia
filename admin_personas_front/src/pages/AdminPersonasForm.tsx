import { CallApi } from "../helpers";
import { OpcionesAdminPersonasForm } from "./components";
import { useFormik } from "formik";

interface Props {
  functionsPersonas: {
    showAlertInfo: (() => void) | undefined;
    showAlertSuccess: (() => void) | undefined;
    showAlertError: (() => void) | undefined;
    openCloseModal: (() => void) | undefined;
  };
  personaSelected: Object | undefined;
}

export const AdminPersonasForm = ({ functionsPersonas, personaSelected }: Props) => {

  const { values, handleChange, handleSubmit, handleReset }: any = useFormik({
    initialValues: {
      ...personaSelected
    },
    onSubmit: async() => {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      await CallApi.post('/editar-persona', formData);
      
    }
  });

  return (
    <div className="adminPersonasForm">
      <h2 className="sub-title">Informacion</h2>

      <form className="formulario--edit-personas" onSubmit={handleSubmit}>

        <div className="field">
          <label htmlFor="first_name">Primer Nombre: *</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={values?.first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="middle_name">Segundo Nombre: *</label>
          <input
            type="text"
            name="middle_name"
            id="middle_name"
            value={values?.middle_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="last_name">Primer Apellido: *</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={values?.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="second_surname">Segundo Apellido: *</label>
          <input
            type="text"
            name="second_surname"
            id="second_surname"
            value={values?.second_surname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="birthdate">Fecha de Nacimiento: *</label>
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            value={values?.birthdate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="country_birth">Pais de Nacimiento: *</label>
          <input
            type="text"
            name="country_birth"
            id="country_birth"
            value={values?.country_birth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="gender">Genero: *</label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={values?.gender}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="civil_status">Estado Civil: *</label>
          <input
            type="text"
            name="civil_status"
            id="civil_status"
            value={values?.civil_status}
            onChange={handleChange}
            required
          />
        </div>

        <OpcionesAdminPersonasForm functionsPersonas={functionsPersonas} resetForm={handleReset} />

      </form>

    </div>
  );
};
