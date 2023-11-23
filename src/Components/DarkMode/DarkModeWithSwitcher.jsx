import React from "react";


export default function DarkModeWithSwitcher (){
    return(
        <div className="flex items-center flex-col dark:bg-slate-500 h-[90vh]">
        <h1 className="mainHeading text-3xl text-center my-4 underline font-bold dark:text-slate-300">
          DARK MODE WHICH OCCURS WHEN A BUTTON IS CLICKED 
        </h1>

        <button className="shadow-lg bg-slate-100 dark:bg-slate-800 dark:text-white px-6 py-2 rounded-lg">SWICH MODE</button>

        <p className="w-[38rem] dark:text-slate-200 mt-4">
        This feature works when darkMode : 'class', is set in the tailwind.config.js and when it's manually toggled 
        from light and dark mode by setting class="dark" in the html tag
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