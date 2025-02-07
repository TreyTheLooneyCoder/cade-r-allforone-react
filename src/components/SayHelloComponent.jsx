import { useState, useEffect } from "react";
import { getHello } from "../services/services";
import { useNavigate } from "react-router-dom";

const SayHelloComponent = () => {
    const navigator = useNavigate();
    const [userName, setUserName] = useState('');

    const fetchHello = async () => {
      setUserName(await getHello(userName));
    }

    useEffect(() => {
      if(userName == ''){
        console.log('"userName" is empty.');
      }else{
        fetchHello();
      }
    }, [userName])

    return (
        <div className='bg-[url(/src/assets/backgrounds/bruno-mira-ucvkbYo7VAw-unsplash.jpg)] h-[100vh] bg-cover'>
          <h1 className="text-3xl font-light text-white pt-[3rem] ml-[35rem]" >{userName ? userName : "Hello, what's your name?"}</h1>
          <input id="nameInput" type="text" onChange={(event) => setUserName(event.target.value)} placeholder="name..." className="rounded-md w-[20rem] mt-[8rem] ml-[35rem]" />
          <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[22rem] ml-[75rem]">Back to Menu</button>
        </div>
    )
}

export default SayHelloComponent