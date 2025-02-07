import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getMedGuess } from "../services/services";

const GuessItMediumComponent = () => {
  const navigator = useNavigate();
  const [medGuess, setMedGuess] = useState('');

  const fetchMedGuess = async () => {
    setMedGuess(await getMedGuess(medGuess));
  }
  
  useEffect(() => {
    if(medGuess == ''){
  
    }else{
      fetchMedGuess();
    }
  }, [medGuess])

  return (
    <div className='bg-[url(/src/assets/backgrounds/carl-raw-m3hn2Kn5Bns-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light text-white pt-[3rem] ml-[35rem]" >{medGuess ? medGuess : "Geuss a number 1-50."}</h1>
      <input id="medGuess" type="text" onChange={(event) => setMedGuess(event.target.value)} placeholder="name..." className="rounded-md w-[20rem] mt-[8rem] ml-[35rem]" />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[15rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default GuessItMediumComponent