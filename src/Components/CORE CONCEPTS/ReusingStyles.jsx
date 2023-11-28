import React from "react";

export const ReusingStyles =()=>{

    const navBar = [['Home','/dashboard'],['Team','/team'],['Projects','/projects'],['Reports','/reports']]


    return(
        <div className="flex gap-4 flex-col items-center">
            <h1 className="text-[2rem] font-bold underline">REUSING STYLES</h1>
            <h1 className="text-xl font-bold underline">USING MULTI-CURSOR EDITING</h1>
            <nav class="flex justify-center space-x-4">
            <a href="/dashboard" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
            <a href="/team"      class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
            <a href="/projects"  class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
            <a href="/reports"   class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
            </nav>
            <p>To select multiple lines of similar codes,you should use <span className="font-bold">Alt + Click</span></p>
            <p>To select multiple line of similiar codes on a particular column, you should use <span className="font-bold">ctrl + alt + upArrow or DownArrow</span></p>

            <h1 className="text-xl font-bold underline">AVOIDING REPEATED CODES BY USING LOOP eg. mapping</h1>
            <nav className="flex justify-center space-x-4"> 
                {navBar.map(([title,link])=>
                    <a className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" href={link}>{title}</a>)}
            </nav>
        </div>
    )
}