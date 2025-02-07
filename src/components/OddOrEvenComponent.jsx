import { useEffect, useState } from "react";
import { getOddEven } from "../services/services";
import { useNavigate } from "react-router-dom";

const OddOrEvenComponent = () => {
  const navigator = useNavigate();
  const [num, setNum] = useState('');

  const fetchOddEven = async () => {
    setNum(await getOddEven(num));
  }

  useEffect(() => {
    if(num == ''){

    }else{
      fetchOddEven();
    }
  }, [num])

  return (
    <div className='bg-[url(/src/assets/backgrounds/cdd20-klidkegqfoo-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light pt-[3rem] ml-[35rem]" >{num ? num : "Lets see what type of number you got."}</h1>
      <input id="oddEvenInput" type="number" onChange={(event) => setNum(event.target.value)} placeholder="number..." className="rounded-md w-[20rem] mt-[8rem] ml-[39rem]" />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[22rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default OddOrEvenComponent