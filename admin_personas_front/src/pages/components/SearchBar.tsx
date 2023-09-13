export const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="searchBar__container">

        <label htmlFor="buscar"><img src="/img/icons/search.svg" alt="Icono Buscar" /></label>
        <input type="text" placeholder="Buscar" id="buscar" name="buscar" />

      </div>
    </div>
  )
}
