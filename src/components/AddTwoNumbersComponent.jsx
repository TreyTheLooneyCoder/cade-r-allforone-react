import { useEffect, useState } from "react";
import { getNumbers } from "../services/services";
import { useNavigate } from "react-router-dom";

const AddTwoNumbersComponent = () => {
  const navigator = useNavigate();
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [output, setOutput] = useState('');

  const fetchNumbers = async () => {
    setOutput(await getNumbers(number1, number2));
  }

  useEffect(() => {
      if(number1 == '' || number2 == ''){
        console.log('Numbers are empty.');
      }else{
        fetchNumbers();
      }
  
    }, [number1, number2])

  return (
    <div className='bg-[url(/src/assets/backgrounds/annie-spratt-r_m-JKJVto0-unsplash.jpg)] lg:h-[100vh] lg:w-[220.9vh] md:h-[107vh] md:w-[80vh] max-sm:h-[100vh] max-sm:w-[46.5vh] bg-cover'>
      <h1 className="lg:text-3xl md:text-5xl max-sm:text-4xl font-light text-white pt-[1.5rem] lg:ml-[15.5rem] md:ml-[5rem] max-sm:ml-[5rem]" >{number1 && number2 ? output : "Lets do some math, give me two numbers."}</h1>
      <input id="num1Input" type="text" onChange={(event) => setNumber1(event.target.value)} placeholder="number1..." className="rounded-md lg:w-[20rem] lg:mt-[8rem] lg:ml-[20rem] md:ml-[5rem] md:mt-[40rem] md:w-[40rem] max-sm:ml-[5rem] max-sm:mt-[40rem] max-sm:w-[20rem]" />
      <br />
      <input id="num2Input" type="text" onChange={(event) => setNumber2(event.target.value)} placeholder="number2..." className="rounded-md lg:w-[20rem] mt-[1rem] lg:ml-[20rem] md:ml-[5rem] md:w-[40rem] max-sm:ml-[5rem] max-sm:mt-[1rem] max-sm:w-[20rem]" />
      <br />
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] lg:mt-[16rem] lg:ml-[75rem] md:mt-[3rem] md:ml-[35rem] max-sm:mt-[3rem] max-sm:ml-[15rem]">Back to Menu</button>
    </div>
  )
}

export default AddTwoNumbersComponent