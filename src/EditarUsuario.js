import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

function EditarUsuario() {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const params = useParams()

  const idusuario = params.id

  useEffect(() => {

 
    axios.get(`/api/usuario/obtenerusuario/${idusuario}`, {idusuario: params.idusuario}).then(res => {
        console.log(res.data[0]) 
        const datausuario = res.data[0]
        setNombre(datausuario.nombre)
        setEmail(datausuario.email)
        setTelefono(datausuario.telefono)    
    })
 }, [])

  function EditUsuario(){


    var usuarionuevo = {
       nombre: nombre,
       email: email,
       telefono: telefono,
     }
    console.log(usuarionuevo)

    axios.put(`/api/usuario/actualizarusuario/${idusuario}`,usuarionuevo)
    .then(res=>{
      
       Swal.fire('Felicidades', 'El usuario se actualizó con éxito')
       setTimeout(()=>{
        window.location.href='/'
    },1500)
       
    })
    .then(err => {console.log(err)})
   }

 
  return (
    <div className='container text-start'>
        <h1>Editar Usuario</h1>
        <h3>El ID del usuario es {params.id}</h3>

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
     
      <button type="button" onClick={EditUsuario} className="btn btn-primary">
        Editar Usuario
      </button>
      <button type="button" className="btn btn-secondary">
        Cancelar
      </button>

    </div>
  )
}

export default EditarUsuario