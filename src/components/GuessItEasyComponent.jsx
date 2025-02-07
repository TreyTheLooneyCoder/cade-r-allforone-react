import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getEasyGuess } from "../services/services";

const GuessItEasyComponent = () => {
  const navigator = useNavigate();
  const [easyGuess, setEasyGuess] = useState('');

  const fetchEasyGuess = async () => {
    setEasyGuess(await getEasyGuess(easyGuess));
  }

  useEffect(() => {
    if(easyGuess == ''){
      console.log('Add something.');
    }else{
      fetchEasyGuess();
    }
  }, [easyGuess])

  return (
    <div className='bg-[url(/src/assets/backgrounds/carl-raw-m3hn2Kn5Bns-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light text-white pt-[3rem] ml-[35rem]" >{easyGuess ? easyGuess : "Geuss a number 1-10."}</h1>
      <input id="easyGuess" type="text" onChange={(event) => setEasyGuess(event.target.value)} placeholder="name..." className="rounded-md w-[20rem] mt-[8rem] ml-[35rem]" />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[15rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default GuessItEasyComponent