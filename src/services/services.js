const getHello = async () => {
    let nameInput = document.getElementById('nameInput');
    
    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/SayHello/Greetings/${nameInput.value}`);
    const data = await response.text();
    
    return data;
}

const getNumbers = async (num1, num2) => {
    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/AddingTwoNumbers/Adding/${num1}/${num2}`);
    const data = await response.text();
    
    return data;
}

const getQuestions = async (nameInput, timeInput) => {

    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/AskingQuestions/Asking/${nameInput}/${timeInput}`);
    const data = await response.text();
    
    return data;
}

const getEasyGuess = async () => {
    let easyGuess = document.getElementById('easyGuess');

    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/GuessIt/GuessItEasy/${easyGuess.value}`);
    const data = await response.text();
    
    return data;
}

const getMedGuess = async () => {
    let medGuess = document.getElementById('medGuess');

    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/GuessIt/GuessItMed/${medGuess.value}`);
    const data = await response.text();
    
    return data;
}

const getHardGuess = async () => {
    let hardGuess = document.getElementById('hardGuess');

    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/GuessIt/GuessItHard/${hardGuess.value}`);
    const data = await response.text();
    
    return data;
}

const getMadLib = async (adjective1, noun1, verb1, place, adjective2, animal, verb2, noun2, emotion, verb3) => {
    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/MadLib/Story/${adjective1}/${noun1}/${verb1}/${place}/${adjective2}/${animal}/${verb2}/${noun2}/${emotion}/${verb3}`);
    const data = await response.text();
    
    return data;
}

const getEightBall = async () => {
    let userQuestion = document.getElementById('userQuestion');

    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/MagicEightBall/ShakeIt/${userQuestion.value}`);
    const data = await response.text();
    
    return data;
}

const getOddEven = async () => {
    let oddEvenInput = document.getElementById('oddEvenInput');

    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/OddOrEven/OddEven/${oddEvenInput.value}`);
    const data = await response.text();

    return data;
}

const getMexicanFood = async () => {
    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/ResturantPicker/Picker/Mexican`);
    const data = await response.text();

    return data;
}

const getChineseFood = async () => {
    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/ResturantPicker/Picker/Chinese`);
    const data = await response.text();

    return data;
}

const getItalianFood = async () => {
    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/ResturantPicker/Picker/Italian`);
    const data = await response.text();

    return data;
}

const getReverse = async () => {
    let reverseInput = document.getElementById('reverseInput');

    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/ReverseItLetters/Reversing/${reverseInput.value}`);
    const data = await response.text();

    return data;
}

const getReverseNum = async () => {
    let reverseNumInput = document.getElementById('reverseNumInput');

    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/ReverseItNumbers/Reversing/${reverseNumInput.value}`);
    const data = await response.text();

    return data;
}

const getGreaterLesser = async (num1, num2) => {
    const response = await fetch(`https://allforonebackend-b5acfeawgmajeaea.westus-01.azurewebsites.net/GreaterOrLesser/EqualTo/${num1}/${num2}`);
    const data = await response.text();

    return data;
}

export { getHello, getGreaterLesser, getNumbers, getQuestions, getEasyGuess, getMedGuess, getHardGuess, getMadLib, getEightBall, getOddEven, getMexicanFood, getChineseFood, getItalianFood, getReverse, getReverseNum }