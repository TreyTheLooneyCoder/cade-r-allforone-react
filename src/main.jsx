import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SayHelloComponent from './components/SayHelloComponent.jsx'
import AddTwoNumbersComponent from './components/AddTwoNumbersComponent.jsx'
import AskingQuestionsComponent from './components/AskingQuestionsComponent.jsx'
import GreaterOrLesserComponent from './components/GreaterOrLesserComponent.jsx'
import MadLibComponent from './components/MadLibComponent.jsx'
import OddOrEvenComponent from './components/OddOrEvenComponent.jsx'
import ReverseItNumberComponent from './components/ReverseItNumberComponent.jsx'
import ReverseItComponent from './components/ReverseItComponent.jsx'
import GuessItChoiceComponent from './components/GuessItChoiceComponent.jsx'
import MagicEightBallComponent from './components/MagicEightBallComponent.jsx'
import ResturantPickerComponent from './components/ResturantPickerComponent.jsx'
import GuessItEasyComponent from "./components/GuessItEasyComponent.jsx";
import GuessItMediumComponent from "./components/GuessItMediumComponent.jsx";
import GuessItHardComponent from "./components/GuessItHardComponent.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/say-hello" element={<SayHelloComponent />} />
        <Route path="/add-2-numbers" element={<AddTwoNumbersComponent />} />
        <Route path="/asking-questions" element={<AskingQuestionsComponent />} />
        <Route path="/greater-or-lesser" element={<GreaterOrLesserComponent />} />
        <Route path="/mad-lib" element={< MadLibComponent/>} />
        <Route path="/odd-or-even" element={<OddOrEvenComponent />} />
        <Route path="/reverse-it-numbers" element={<ReverseItNumberComponent />} />
        <Route path="/reverse-it" element={<ReverseItComponent />} />
        <Route path="/guess-it-choice" element={<GuessItChoiceComponent />} />
        <Route path="/magic-8-ball" element={<MagicEightBallComponent />} />
        <Route path="/resturant-picker" element={<ResturantPickerComponent />} />
        <Route path="/guess-it-easy" element={<GuessItEasyComponent />} />
        <Route path="/guess-it-medium" element={<GuessItMediumComponent />} />
        <Route path="/guess-it-hard" element={<GuessItHardComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
