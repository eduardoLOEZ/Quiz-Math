import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)

  return (
    <div className='container'>
        <h1 className='title text-light'>Matematicas Quiz App</h1>

        <ol>
        <li>Se te harán 10 preguntas una tras otra.</li>
        <li>Se otorgan 10 puntos por la respuesta correcta.</li>
        <li>Cada pregunta tiene tres opciones. Solo puedes elegir una opción.</li>
        <li>Puedes revisar y cambiar respuestas antes de que termine el quiz.</li>
        <li>El resultado se declarará al final del quiz.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='ID del alumno*' />
            form
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'}>Start Quiz</Link>
            quiz
        </div>

    </div>
  )
}