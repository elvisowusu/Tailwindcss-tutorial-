import { useState } from 'react'
import image from './assets/sign In.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './App.css'
import {HoverFocusAndOtherStates} from './Components/CORE CONCEPTS/HoverFocusandOtherStates'
import DarkMode from './Components/CORE CONCEPTS/DarkMode/DarkMode'
import DarkModeWithSwitcher from './Components/CORE CONCEPTS/DarkMode/DarkModeWithSwitcher'
import DarkModeWithSystemPreference from './Components/CORE CONCEPTS/DarkMode/DarkModeWithSystemPreference'
import DarkModeAllFeatures from './Components/CORE CONCEPTS/DarkMode/DarkModeAllFeatures'
import { ReusingStyles } from './Components/CORE CONCEPTS/ReusingStyles'
import { FunctionsAndDirectives } from './Components/CORE CONCEPTS/Function&Directives'
import { Configuration } from './Components/CUSTOMIZATION/Configuration'

function App() {

  return (
    <div className='mb-[5rem]'>
      <Configuration />
    </div>
  )
}

export default App
