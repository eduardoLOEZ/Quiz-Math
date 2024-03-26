import React from 'react'
import Questions from './Questions'


export default function Quiz() {

    return (
        <div className='container'>
        <h1 className='title text-light'>Matematicas Quiz</h1>

        {/* display questions */}
        <Questions></Questions>

        <div className='grid'>
            <button className='btn prev'>Prev</button> 
            <button className='btn next' >Next</button>
        </div>
    </div>
      )
}


