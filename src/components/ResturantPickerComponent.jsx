import { useState } from "react";
import { getMexicanFood, getChineseFood, getItalianFood } from "../services/services";
import { useNavigate } from "react-router-dom";

const ResturantPickerComponent = () => {
  const navigator = useNavigate();
  let [foodType, setFoodType] = useState('');

  const fetchMexicanFood = async () => {
    setFoodType(await getMexicanFood());
  }

  const fetchChineseFood = async () => {
    setFoodType(await getChineseFood());
  }

  const fetchItalianFood = async () => {
    setFoodType(await getItalianFood());
  }
  
  return (
    <div className='bg-[url(/src/assets/backgrounds/ava-tyler-fSTjfMQ44YU-unsplash.jpg)] h-[100vh] bg-cover'>
      <h1 className="text-3xl font-light text-white pt-[3rem] ml-[35rem]" >{foodType ? foodType : "You pick the type, I pick the place."}</h1>
      <button onClick={() => fetchMexicanFood()} className="rounded-md bg-gray-400 w-[12.5rem] h-[2.25rem] mt-[15rem] ml-[20rem]">Mexican</button>
      <button onClick={() => fetchChineseFood()} className="rounded-md bg-gray-400 w-[12.5rem] h-[2.25rem] mt-[15rem] ml-[10rem]">Chinese</button>
      <button onClick={() => fetchItalianFood()} className="rounded-md bg-gray-400 w-[12.5rem] h-[2.25rem] mt-[15rem] ml-[10rem]">Italian</button>
      <button onClick={() => navigator('/')} className="bg-gray-400 rounded-md h-[2.75rem] w-[10rem] mt-[15rem] ml-[75rem]">Back to Menu</button>
    </div>
  )
}

export default ResturantPickerComponent