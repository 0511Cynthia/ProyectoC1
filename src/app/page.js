import React from "react"
import Link from "next/link"
import Image from "next/image"
import Task from '../Img/Add-Next-Task.png'
import 'bootstrap/dist/css/bootstrap.css'
import '../app/inicio.css'

export default function Home() {
  return (
        <div className="container">
            <Image src={Task} className="add-task"/>
            <h1>TASKING</h1>
            <br/>
            <div className="btn-container">
              <Link href="/login"> 
                <p className="btn btn-link" id="btnEmpezar">Empezar</p>
              </Link>
            </div>
            
        </div>
  )
}
