export default function index(props) {
  return (
    <>
      <div className="item filter-result">
        {props.count} Productos Listados{" "}
      </div>
      <div className="item filter-sort">
        Ordenar{" "}
        <select value={props.sort} onChange={props.sortProducts}>
          <option value="">Seleccione</option>
          <option value="lowest">Menor Precio</option>
          <option value="highest">Mayor Precio</option>
        </select>
      </div>
      <div className="item filter-size">
        Filtrar{" "}
        <select value={props.size} onChange={props.filterProducts}>
          <option value="">Todos</option>
          <option value="onz">Onz</option>
          <option value="litro">Litro</option>
          <option value="galon">Galón</option>
        </select>
      </div>

      <style jsx>{`
        .item {
          padding: 0.5em;
        }
      `}</style>
    </>
  );
}
