import { useNavigate } from "react-router-dom";


const GuessItChoiceComponent = () => {
  const navigator = useNavigate();

  return (
    <div className='bg-[url(/src/assets/backgrounds/carl-raw-m3hn2Kn5Bns-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light text-white pt-[3rem] ml-[43rem]" >Pick your poison.</h1>
      <button onClick={() => navigator('/guess-it-easy')} className="rounded-md bg-gray-400 w-[12.5rem] h-[2.25rem] mt-[15rem] ml-[20rem]">Easy</button>
      <button onClick={() => navigator('/guess-it-medium')} className="rounded-md bg-gray-400 w-[12.5rem] h-[2.25rem] mt-[15rem] ml-[10rem]">Medium</button>
      <button onClick={() => navigator('/guess-it-hard')} className="rounded-md bg-gray-400 w-[12.5rem] h-[2.25rem] mt-[15rem] ml-[10rem]">Hard</button>
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[15rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default GuessItChoiceComponent