import { useEffect, useState } from "react";
import { getEightBall } from "../services/services";
import { useNavigate } from "react-router-dom";

const MagicEightBallComponent = () => {
  const navigator = useNavigate();
  const [userQuestion, setUserQuestion] = useState('');

  const fetchEightBall = async () => {
    setUserQuestion(await getEightBall(userQuestion));
  }

  useEffect(() => {
    if(userQuestion == ''){
      console.log('"userQuestion" is empty.');
    }else{
      fetchEightBall();
    }
  }, [userQuestion])


  return (
    <div className='bg-[url(/src/assets/backgrounds/vd-photography-6EEBGlCVOnw-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light pt-[3rem] ml-[35rem]" >{userQuestion ? userQuestion : "Hello, state your question human."}</h1>
      <input id="userQuestion" type="text" onChange={(event) => setUserQuestion(event.target.value)} placeholder="question..." className="rounded-md w-[20rem] mt-[8rem] ml-[39rem]" />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[22rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default MagicEightBallComponent