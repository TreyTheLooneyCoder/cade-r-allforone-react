import { useEffect, useState } from "react";
import { getReverse } from "../services/services";
import { useNavigate } from "react-router-dom";

const ReverseItComponent = () => {
  const navigator = useNavigate();
  const [reverseInput, setReverseInput] = useState('');

  const fetchReverse = async () => {
    setReverseInput(await getReverse(reverseInput));
  }

  useEffect(() => {
    if(reverseInput == ''){
      console.log('"reverseInput" is empty.');
    }else{
      fetchReverse();
    }
  }, [reverseInput])

  return (
    <div className="bg-[url(/src/assets/backgrounds/siddhesh-mangela-xXh8AgA2Bfo-unsplash.jpg)] h-[100vh] bg-cover">
      <h1 className="text-3xl font-light text-white pt-[3rem] ml-[33rem]" >{reverseInput ? reverseInput : "Give me something random, I'll reverse it."}</h1>
      <input id="reverseInput" type="text" onChange={(event) => setReverseInput(event.target.value)} placeholder="something random..." className="rounded-md w-[20rem] mt-[8rem] ml-[39rem]" />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[22rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default ReverseItComponent