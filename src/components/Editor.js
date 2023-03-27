import React from 'react'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import "./genStyle.css"
import "codemirror/theme/material.css"
import "codemirror/lib/codemirror.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"


function Editor(
    { editorName, lang, value, changeHandler,
        editorState, icon, mobileView, handleExpand }) {

    const jsFullOpen = {                //js full open
        height: '86%',
    }

    const openFull = {
        height: '92vh',
    }

    const halfOpen = {
        // height: '30%'          //js half open
        height: '30vh',
    }

    const closeFull = {
        height: '4vh',
    }

    const mobileEditorStyle = {
        height: "50vh",
    }

    let editorStyle = closeFull;


    if (mobileView) editorStyle = mobileEditorStyle
    else {

        if (editorState[0]) editorStyle = closeFull;
        if (editorState[1]) editorStyle = halfOpen;
        if (editorState[2]) editorStyle = openFull;

        if (editorName === 'JS') {
            if (editorState[2]) editorStyle = jsFullOpen;
        }

    }


    const handleChanages = (editor, data, value) => {
        changeHandler(value);
    }


    return (

        <div
            style={editorStyle}
            className={`  overflow-hidden transition-all duration-300`}>

            <div title='click to expand' onClick={() => handleExpand(editorName)}
                className='flex items-center gap-1 px-2 bg-slate-600 '>
                <img className='w-4 h-4 inline -mt-1' src={icon} alt='icon' />
                <h1
                    className=' text-slate-300 '>
                    {editorName}</h1>
            </div>

            <ControlledEditor
                className=' h-full scrollbar-hide'
                value={value}
                options={
                    {
                        lineWrapping: true,
                        mode: lang,
                        lint: true,
                        theme: 'material',
                        lineNumbers: true,
                        scrollbarStyle: null,
                    }
                }
                onBeforeChange={handleChanages}
            />
        </div>
    )
}

export default Editor