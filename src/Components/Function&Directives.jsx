import React from "react";


export const FunctionsAndDirectives =()=>{
    return(
        <div className="flex gap-4 flex-col items-center">
            <h1 >FUNCTIONS AND DIRECTIVES</h1>
            <p>The base styles are used as a general style of all the elements</p>
            <p>It will have equal effect in this paragraph too and all other paragraphs</p>
            <p className="paragraph">This applies a custom component styles to a particular component just like external css</p>        
            <p className="no-filter filter">@layer utility with no-filter</p>
        </div>
    )
}