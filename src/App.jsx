import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'



function App() {
  const navigator = useNavigate();

  return (
    <div className='bg-[url(/src/assets/backgrounds/keith-misner-h0Vxgz5tyXA-unsplash.jpg)] h-[100vh] bg-cover'>
      <div className="grid grid-cols-3 grid-rows-4 pt-[8rem] mx-[5rem] gap-x-4 gap-y-7">
        <button onClick={() => navigator('/say-hello')} className="bg-gray-400 rounded-md col-start-1 row-start-1 h-[4rem]">Say Hello</button>
        <button onClick={() => navigator('/add-2-numbers')} className="bg-gray-400 rounded-md col-start-2 row-start-1 h-[4rem]">Adding Numbers</button>
        <button onClick={() => navigator('/asking-questions')} className="bg-gray-400 rounded-md col-start-3 row-start-1 h-[4rem]">Asking Questions</button>
        <button onClick={() => navigator('/greater-or-lesser')} className="bg-gray-400 rounded-md col-start-1 row-start-2 h-[4rem]">Greater Or Lesser</button>
        <button onClick={() => navigator('/mad-lib')} className="bg-gray-400 rounded-md col-start-2 row-start-2 h-[4rem]">Mad Lib</button>
        <button onClick={() => navigator('/odd-or-even')} className="bg-gray-400 rounded-md col-start-3 row-start-2 h-[4rem]">Odd or Even</button>
        <button onClick={() => navigator('/reverse-it-numbers')} className="bg-gray-400 rounded-md col-start-1 row-start-3 h-[4rem]">Reverse It (Numbers)</button>
        <button onClick={() => navigator('/reverse-it')} className="bg-gray-400 rounded-md col-start-1 row-start-4 h-[4rem]">Reverse It</button>
        <button onClick={() => navigator('/guess-it-choice')} className="bg-gray-400 rounded-md col-start-2 row-start-3 h-[4rem]">Guess It</button>
        <button onClick={() => navigator('/magic-8-ball')} className="bg-gray-400 rounded-md col-start-3 row-start-3 h-[4rem]">Magic 8 Ball</button>
        <button onClick={() => navigator('/resturant-picker')} className="bg-gray-400 rounded-md col-start-2 row-start-4 h-[4rem]">Resturant Picker</button>
      </div>
    </div>
  )
}

export default App
