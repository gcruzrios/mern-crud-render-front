import React from "react";

function DetalleUsuario({ usuario }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <ul className="list-group">
            <li className="list-group-item">{usuario.idusuario}</li>
            <li className="list-group-item">{usuario.nombre}</li>
            <li className="list-group-item">{usuario.email}</li>
            <li className="list-group-item">{usuario.telefono}</li>
          </ul>
          <button className="btn btn-success">Editar</button>
          <button className="btn btn-danger">Borrar</button>
          <hr className="mt-4"></hr>
          
        </div>
      </div>
    </div>
  );
}

export default DetalleUsuario;
