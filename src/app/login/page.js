import '../login/login.css'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"
import Task from '../../Img/Add-Next-Task.png'

export default function Login(){
    return (
        <main className='main'>
          <div className='containerLogo'>
            <Image src={Task} className="add-task"/>
          </div>
 
          <form className='form'>
          <span>Iniciar Sesión</span>
            <div className='containarInput'>
              <label className='containarInput'>Correo Electrónico:</label>
              <input type="text" />
            </div>
            <div className='containarInput'>
              <label>Contraseña:</label>
              <input type="password" />
            </div>
              <button className='button' type="submit">Iniciar Sesión</button>
              <button className='lastButton'>Registrate</button>
          </form>
        </main>
      );
}