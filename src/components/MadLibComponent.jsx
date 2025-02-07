import { useEffect, useState } from "react";
import { getMadLib } from "../services/services";
import { useNavigate } from "react-router-dom";

const MadLibComponent = () => {
  const navigator = useNavigate();
  const [adjective1, setAdjective1] = useState('');
  const [noun1, setNoun1] = useState('');
  const [verb1, setVerb1] = useState('');
  const [place, setPlace] = useState('');
  const [adjective2, setAdjective2] = useState('');
  const [animal, setAnimal] = useState('');
  const [verb2, setVerb2] = useState('');
  const [noun2, setNoun2] = useState('');
  const [emotion, setEmotion] = useState('');
  const [verb3, setVerb3] = useState('');
  const [output, setOutput] = useState('');

  const fetchMadLib = async () => {
    setOutput(await getMadLib(adjective1, noun1, verb1, place, adjective2, animal, verb2, noun2, emotion, verb3));
  }

  useEffect(() => {
    if(adjective1 == '' || noun1 == '' || verb1 == '' || place == '' || adjective2 == '' || animal == '' || verb2 == '' || noun2 == '' || emotion == '' || verb3 == ''){

    }else{
      fetchMadLib();
    }

  }, [adjective1, noun1, verb1, place, adjective2, animal, verb2, noun2, emotion, verb3])

// {userName && userTime ? output : ""}
  return (
    <div className='bg-[url(/src/assets/backgrounds/carl-raw-m3hn2Kn5Bns-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light text-white pt-[1.5rem] ml-[7rem]" >{adjective1 && noun1 && verb1 && place && adjective2 && animal && verb2 && noun2 && emotion && verb3 ? output : "Give me the inputs, lets make a wacky story."}</h1>
      <input type="text" onChange={(event) => setAdjective1(event.target.value)} placeholder="adjective1..." className="rounded-md w-[15rem] mt-[8rem] ml-[7rem]" />
      <input type="text" onChange={(event) => setNoun1(event.target.value)} placeholder="noun1..." className="rounded-md w-[15rem] mt-[0rem] ml-[1rem]" />
      <input type="text" onChange={(event) => setVerb1(event.target.value)} placeholder="verb1..." className="rounded-md w-[15rem] mt-[0rem] ml-[1rem]" />
      <input type="text" onChange={(event) => setPlace(event.target.value)} placeholder="place..." className="rounded-md w-[15rem] mt-[0rem] ml-[1rem]" />
      <input type="text" onChange={(event) => setAdjective2(event.target.value)} placeholder="adjective2..." className="rounded-md w-[15rem] mt-[0rem] ml-[1rem]" />
      <br />
      <input type="text" onChange={(event) => setAnimal(event.target.value)} placeholder="animal..." className="rounded-md w-[15rem] mt-[4rem] ml-[7rem]" />
      <input type="text" onChange={(event) => setVerb2(event.target.value)} placeholder="verb2..." className="rounded-md w-[15rem] mt-[0rem] ml-[1rem]" />
      <input type="text" onChange={(event) => setNoun2(event.target.value)} placeholder="noun2..." className="rounded-md w-[15rem] mt-[0rem] ml-[1rem]" />
      <input type="text" onChange={(event) => setEmotion(event.target.value)} placeholder="emotion..." className="rounded-md w-[15rem] mt-[0rem] ml-[1rem]" />
      <input type="text" onChange={(event) => setVerb3(event.target.value)} placeholder="verb3..." className="rounded-md w-[15rem] mt-[0rem] ml-[1rem]" />

      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[15rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default MadLibComponent