import { useEffect, useState } from "react";
import { getQuestions } from "../services/services";
import { useNavigate } from "react-router-dom";

const AskingQuestionsComponent = () => {
  const navigator = useNavigate();
  const [userName, setUserName] = useState('');
  const [userTime, setUserTime] = useState('');
  const [output, setOutput] = useState('');

  const fetchQuestions = async () => {
    setOutput(await getQuestions(userName, userTime));
  }

  useEffect(() => {
    if(userName == '' || userTime == ''){

    }else{
      fetchQuestions();
    }

  }, [userName, userTime])
  
  return (
    <div className='bg-[url(/src/assets/backgrounds/evan-dennis-i--IN3cvEjg-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light text-white pt-[1.5rem] ml-[15.5rem]" >{userName && userTime ? output : "What's your name and when did you wake up?"}</h1>
      <input type="text" onChange={(event) => setUserName(event.target.value)} placeholder="name..." className="rounded-md w-[20rem] xl:mt-[8rem] xl:ml-[20rem]" />
      <br />
      <input type="text" onChange={(event) => setUserTime(event.target.value)} placeholder="time..." className="rounded-md w-[20rem] xl:mt-[1rem] xl:ml-[20rem]" />
      <br />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] xl:mt-[16rem] xl:ml-[75rem] md:mt-[3rem] md:ml-[35rem]">Back to Menu</button>
    </div>
  )
}

export default AskingQuestionsComponent