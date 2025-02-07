import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGreaterLesser } from "../services/services";

const GreaterOrLesserComponent = () => {
  const navigator = useNavigate();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [output, setOutput] = useState('');

  const fetchGreaterLesser = async () => {
    setOutput(await getGreaterLesser(num1, num2));
  }

  useEffect(() => {
      if(num1 == '' || num2 == ''){
        console.log('Numbers are empty.');
      }else{
        fetchGreaterLesser();
      }
  
    }, [num1, num2])
  

  return (
    <div className='bg-[url(/src/assets/backgrounds/saad-ahmad-BQLw0OrA6F4-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light text-white pt-[1.5rem] ml-[15.5rem]">{num1 && num2 ? output : "Lets do some comparison, give me two numbers."}</h1>
      <input type="text" onChange={(event) => setNum1(event.target.value)} placeholder="number1..." className="rounded-md w-[20rem] mt-[8rem] ml-[20rem]" />
      <br />
      <input type="text" onChange={(event) => setNum2(event.target.value)} placeholder="number2..." className="rounded-md w-[20rem] mt-[1rem] ml-[20rem]" />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[16rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default GreaterOrLesserComponent