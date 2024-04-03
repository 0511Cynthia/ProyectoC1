import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"
import Task from '../../Img/Add-Next-Task.png'
import '../sign-in/sign-in.css'

export default function signIn(){
    return (
        <main className='main'>
          <div className='containerLogo'>
            <Image src={Task} className="add-task"/>
          </div>
 
          <form className='form'>
          <h1>Registarse</h1>
            <div className='containarInput'>
              <label className='containarInput'>Usuario:</label>
              <input className='input' type="text" />
            </div>
            <div className='containarInput'>
              <label >Correo Electrónico:</label>
              <input className='input' type="text" />
            </div>
            <div className='containarInput'>
              <label>Contraseña:</label>
              <input className='input' type="password" />
            </div>
            <div className='containarInput'>
              <label>Confirmar contraseña:</label>
              <input className='input' type="password" />
            </div>
              <button className='button' type="submit">Registrarse</button>
              <button className='lastButton'>Volver</button>
          </form>
        </main>
      );
}