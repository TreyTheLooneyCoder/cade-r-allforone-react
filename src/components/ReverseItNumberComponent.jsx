import { useEffect, useState } from "react";
import { getReverseNum } from "../services/services";
import { useNavigate } from "react-router-dom";

const ReverseItNumberComponent = () => {
  const navigator = useNavigate();
  const [reverseNumInput, setReverseNumInput] = useState('');

  const fetchReverseNum = async () => {
    setReverseNumInput(await getReverseNum(reverseNumInput));
  }

  useEffect(() => {
    if(reverseNumInput == ''){
      console.log('"reverseNumInput" is empty.');
    }else{
      fetchReverseNum();
    }
  }, [reverseNumInput])

  return (
    <div className="bg-[url(/src/assets/backgrounds/siddhesh-mangela-xXh8AgA2Bfo-unsplash.jpg)] h-[100vh] bg-cover">
      <h1 className="text-3xl font-light text-white pt-[3rem] ml-[33rem]">{reverseNumInput ? reverseNumInput : "Give me a number, I'll reverse it."}</h1>
      <input id="reverseNumInput" type="number" onChange={(event) => setReverseNumInput(event.target.value)} placeholder="number..." className="rounded-md w-[20rem] mt-[8rem] ml-[39rem]" />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[22rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default ReverseItNumberComponent