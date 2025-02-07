import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getHardGuess } from "../services/services";

const GuessItHardComponent = () => {
  const navigator = useNavigate();
  const [hardGuess, setHardGuess] = useState('');

  const fetchHardGuess = async () => {
    setHardGuess(await getHardGuess(hardGuess));
  }
  
  useEffect(() => {
    if(hardGuess == ''){
      console.log('Add something.');
    }else{
      fetchHardGuess();
    }
  }, [hardGuess])

  return (
    <div className='bg-[url(/src/assets/backgrounds/carl-raw-m3hn2Kn5Bns-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light text-white pt-[3rem] ml-[35rem]" >{hardGuess ? hardGuess : "Geuss a number 1-100."}</h1>
      <input id="hardGuess" type="text" onChange={(event) => setHardGuess(event.target.value)} placeholder="name..." className="rounded-md w-[20rem] mt-[8rem] ml-[35rem]" />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[15rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default GuessItHardComponent