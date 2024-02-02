import React, { useEffect, useState } from "react";
import DetalleUsuario from "./DetalleUsuario";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function ListaUsuarios() {
  const [datausuarios, setDatausuarios] = useState([]);


  useEffect(() => {
    axios
      .get("api/usuario/obtenerusuarios")
      .then((res) => {
        console.log(res);
        setDatausuarios(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  

function eliminarusuario(idusuario){

  console.log(idusuario);

  axios.delete(`/api/usuario/borrarusuario/${idusuario}`)
  .then(res=>{
     //alert(res.data)
   

     Swal.fire('Felicidades', 'El usuario se eliminó con éxito')
     setTimeout(()=>{
      window.location.href='/'
  },1500)
  })
  .then(err => {console.log(err)})
 }

  //Mapear en objeto usuario
  const ListadeUsuarios = datausuarios.map((usuario) => {
    return (
      <div>
        <DetalleUsuario usuario={usuario} />
      </div>
    );
  });
  return (
    <div className="container">
      <h1>Lista Usuarios</h1>
      {/* <ListadeUsuarios /> */}

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datausuarios.map((usuario) => (
            <tr key={usuario.idusuario}>
              <th scope="row">{usuario.idusuario}</th>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefono}</td>
              <td>
                <Link
                  to={`/editarusuario/${usuario.idusuario}`}
                  className="btn btn-success"
                >
                  Editar
                </Link>
                {" "}
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarusuario(usuario.idusuario)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaUsuarios;
