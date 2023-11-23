import { useState } from 'react'
import image from './assets/sign In.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './App.css'
import {HoverFocusAndOtherStates} from './Components/HoverFocusandOtherStates'
import DarkMode from './Components/DarkMode/DarkMode'
import DarkModeWithSwitcher from './Components/DarkMode/DarkModeWithSwitcher'
import DarkModeWithSystemPreference from './Components/DarkMode/DarkModeWithSystemPreference'
import DarkModeAllFeatures from './Components/DarkMode/DarkModeAllFeatures'


function App() {

  return (
    <div className='mb-[5rem]'>
      <DarkModeAllFeatures/>
    </div>
  )
}

export default App
