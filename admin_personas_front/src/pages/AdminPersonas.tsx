export const AdminPersonas = () => {
  return (
    <section className="main--content">

        <h1>Administrador de Personas</h1>

        <h2 className="sub-title">Informacion</h2>

        <form className="formulario--principal">

            <div className="field">
                <label htmlFor="type_document">Tipo de documento *</label>
                <input type="text" name="type_document" id="type_document" required />
            </div>

            <div className="field">
                <label htmlFor="number_document">Numero del documento *</label>
                <input type="number" name="number_document" id="number_document" required />
            </div>

            <div className="field--found">
                <button type="submit">
                    <span>Buscar</span>
                    <img src="/img/icons/search.svg" alt="Imagen Lupa" />
                </button>
            </div>

            <div className="field--found-advanced">
                <button>
                    <span>Busqueda Avanzada</span>
                    <img src="/img/icons/search.svg" alt="Imagen Lupa" />
                </button>
            </div>

        </form>
    </section>
  )
}
