function Card(props) {
    return <> 
 <div className = "card">
    <img src={props.imagen} alt={props.imagenDes} />
    <div className="card-content">
      <h2>
        {props.titulo}
      </h2>
      <p>
       {props.descripcion}
      </p>
      <a href="#" className="button">
        Find out more  
        <span className="material-symbols-outlined">
          {props.autor}
        </span>
      </a>
    </div>
  </div>
    </>
     
    ;
}
export default Card