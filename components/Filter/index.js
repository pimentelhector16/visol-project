export default function index(props) {
  return (
    <>
      <div className="filter">
        <div className="cart_title">Opciones De Filtrado</div>
        <div className="cart_body">
          <div className="item filter-result">{props.count} Productos</div>
          <div className="item filter-sort">
            Ordenar{" "}
            <select value={props.sort} onChange={props.sortProducts}>
              <option value="">Seleccione</option>
              <option value="lowest">Menor Precio</option>
              <option value="highest">Mayor Precio</option>
              <option value="marca">Marca</option>
              <option value="categoria">Categoria</option>
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
        </div>
      </div>

      <style jsx>{`
        .filter {
          padding: 0.5em;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .cart_title {
          background: #0d3362;
          color: white;
          padding: 1em;
          height: 49px;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .cart_body {
          padding: 0.4em;
          text-align: left;
        }
        .item {
          padding: 1em;
        }
      `}</style>
    </>
  );
}
