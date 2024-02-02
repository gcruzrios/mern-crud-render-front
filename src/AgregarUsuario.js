import React, { useState } from "react";

import uniqid from 'uniqid'
import axios from "axios";
import Swal from 'sweetalert2'

function AgregarUsuario() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    function AddUsuario(){
     var usuario = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        idusuario: uniqid()
     }
     console.log(usuario)

     axios.post('/api/usuario/agregarusuario',usuario)
     .then(res=>{
        //alert(res.data)
        Swal.fire('Felicidades', 'El usuario se creó con éxito')
        setTimeout(()=>{
          window.location.href='/'
      },1500)
        
     })
     .then(err => {console.log(err)})
    }

  return (
    <div className="container text-start ">
      <h1 className="mt-4">Agregar Usuario</h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Nombre de Usuario"
          value={nombre}
          onChange={(e)=> {setNombre(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e)=> {setEmail(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          className="form-control"
          id="telefono"
          placeholder="Telefono"
          value={telefono}
          onChange={(e)=> {setTelefono(e.target.value)}}
        />
      </div>
      {/* <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div> */}
      <button type="button" onClick={AddUsuario} className="btn btn-primary">
        Guardar Usuario
      </button>
      <button type="button" className="btn btn-secondary">
        Cancelar
      </button>
    </div>
  );
}

export default AgregarUsuario;
