import React,{useState,useEffect} from "react";


export default function DarkModeWithSystemPreference (){
    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
    }, [])

    return(
        <div className="flex items-center flex-col dark:bg-slate-500 h-[90vh]">
        <h1 className="mainHeading text-3xl text-center my-4 underline font-bold dark:text-slate-300">
          DARK MODE BY SYSTEM PREFERENCE
        </h1>
        <p className="w-[38rem] dark:text-slate-200 mt-4">
        This feature works when darkMode : 'class', is set in the tailwind.config.js and setting a className="dark" withing the body tag and using useEffect, useState and a function in the jsx to handle the switching between themes
        </p>
        <div class="mt-8 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">icons</svg>
            </span>
          </div>
          <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
</div>
    )
}