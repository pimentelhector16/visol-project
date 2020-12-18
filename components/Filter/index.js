export default function index(props) {
  return (
    <>
      <div className="sm:grid sm:grid-cols-3 items-start mb-5 p-3 ">
        <div className="p-1">{props.count} Productos Listados </div>
        <div className="p-1">
          <select
            value={props.sort}
            onChange={props.sortProducts}
            className="border rounded-md px-4 py-2"
          >
            <option value="">Filtrar</option>
            <option value="lowest">Menor Precio</option>
            <option value="highest">Mayor Precio</option>
          </select>
        </div>
        <div className="p-1">
          <select
            value={props.filter}
            onChange={props.filterProducts}
            className="border rounded-md px-4 py-2"
          >
            <option value="">Ver Todos</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Purificadores">Purificadores de Agua</option>
          </select>
        </div>
      </div>
    </>
  );
}
