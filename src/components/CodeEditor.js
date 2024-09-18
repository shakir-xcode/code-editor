import { React, useEffect, useState } from 'react'
import Editor from './Editor'
import Navbar from './Navbar'
import OutputPane from './OutputPane'
import htmlIcon from "../assets/htmlIcon.png";
import cssIcon from "../assets/cssIcon.png";
import javascriptIcon from "../assets/javascriptIcon.png";
import { htmlBoilerplate } from "../config.js";
import { cssBoilerPlate } from '../config.js';
import { jsBoilerplate } from '../config.js';


const AppKey = "codepen-clone"

function CodeEditor() {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    const [htmlEditorState, setHtmlEditorState] = useState([0, 1, 0])
    const [cssEditorState, setCssEditorState] = useState([0, 1, 0])
    const [jsEditorState, setJsEditorState] = useState([0, 1, 0])
    const [jsEditorFullyOpen, setJsEditorFullyOpen] = useState(false);

    const handleExpandY = (editorName) => {

        if (editorName === "HTML") {
            if (htmlEditorState[0]) {
                setHtmlEditorState([0, 1, 0])
                setCssEditorState([0, 1, 0])
                setJsEditorState([0, 1, 0])
            }
            if (htmlEditorState[1]) {
                setHtmlEditorState([0, 0, 1])
                setCssEditorState([1, 0, 0])
                setJsEditorState([1, 0, 0])
            }
        }

        if (editorName === "CSS") {
            if (cssEditorState[0]) {
                setHtmlEditorState([0, 1, 0])
                setCssEditorState([0, 1, 0])
                setJsEditorState([0, 1, 0])
            }
            if (cssEditorState[1]) {
                setHtmlEditorState([1, 0, 0])
                setCssEditorState([0, 0, 1])
                setJsEditorState([1, 0, 0])
            }
        }

        if (editorName === "JS") {
            if (jsEditorState[0]) {
                setHtmlEditorState([0, 1, 0])
                setCssEditorState([0, 1, 0])
                setJsEditorState([0, 1, 0])
            }
            if (jsEditorState[1]) {
                setHtmlEditorState([1, 0, 0])
                setCssEditorState([1, 0, 0])
                setJsEditorState([0, 0, 1])
            }
            if (jsEditorState[2]) {                  //if JS editor fully opened
                setJsEditorFullyOpen(() => true)
            }
        }
    }


    useEffect(() => {
        setHtml(localStorage.getItem(`${AppKey}html`) || htmlBoilerplate)
        setCss(localStorage.getItem(`${AppKey}css`) || cssBoilerPlate)
        setJs(localStorage.getItem(`${AppKey}js`) || jsBoilerplate)
    }, [])


    const saveToLocalStorage = () => {
        localStorage.setItem(`${AppKey}html`, html)
        localStorage.setItem(`${AppKey}css`, css)
        localStorage.setItem(`${AppKey}js`, js)
    }

    const resetState = () => {
        setHtml('');
        setCss('');
        setJs('');
    }

    const toggleMobileEditor = (editor) => {
        const editorPanel = document.querySelectorAll('.mobile-editor')
        const editorTitle = document.querySelectorAll('.editor-title')
        editorPanel.forEach(item => item.style.display = 'none')
        editorTitle.forEach(item => item.classList.remove('active-editor'))




        if (editor === 'HTML') {
            editorPanel[0].style.display = 'block'
            editorTitle[0].classList.add('active-editor')
        }
        else if (editor === 'CSS') {
            editorPanel[1].style.display = 'block'
            editorTitle[1].classList.add('active-editor')
        }
        else if (editor === 'JS') {
            editorPanel[2].style.display = 'block'
            editorTitle[2].classList.add('active-editor')
        }
    }


    return (
        <>
            <div className='flex flex-col md:flex-row h-screen '>    { /*1*/}
                <div className='  bg-[#263238] hidden md:block  w-[50vw] '>        { /*2*/}
                    <Editor editorName="HTML" lang="xml" value={html} changeHandler={setHtml} icon={htmlIcon}
                        editorState={htmlEditorState} jsFullOpenState={jsEditorFullyOpen} handleExpand={handleExpandY} />       { /*3*/}

                    <Editor editorName="CSS" lang="css" value={css} changeHandler={setCss} icon={cssIcon}
                        editorState={cssEditorState} jsFullOpenState={jsEditorFullyOpen} handleExpand={handleExpandY} />

                    <Editor editorName="JS" lang="javascript" value={js} changeHandler={setJs} icon={javascriptIcon}
                        editorState={jsEditorState} jsFullOpenState={jsEditorFullyOpen} handleExpand={handleExpandY} />
                </div>

                {/* Mobile Layout */}
                <div className="block md:hidden " >
                    <Navbar saveLocally={saveToLocalStorage} resetState={resetState} />
                </div>
                <div className=' relative bg-[#263238] block md:hidden '>        { /*2*/}

                    <div className=' absolute z-10 flex  px-2 bg-slate-700 text-slate-400 w-full'>
                        <p onClick={() => toggleMobileEditor('HTML')} className='editor-title active-editor cursor-pointer px-1 '>HTML</p>
                        <p onClick={() => toggleMobileEditor('CSS')} className='editor-title cursor-pointer border-r border-l px-1 '>CSS</p>
                        <p onClick={() => toggleMobileEditor('JS')} className='editor-title cursor-pointer px-1'>JS</p>

                    </div>
                    <div id='mobile-html-editor' className='mobile-editor block'>
                        <Editor editorName="HTML" lang="xml" value={html} changeHandler={setHtml} icon={htmlIcon}
                            editorState={htmlEditorState} jsFullOpenState={jsEditorFullyOpen} handleExpand={() => { }}
                            mobileView={true} />       { /*3*/}
                    </div>

                    <div id='mobile-css-editor' className='mobile-editor hidden '>
                        <Editor editorName="CSS" lang="css" value={css} changeHandler={setCss} icon={cssIcon}
                            editorState={cssEditorState} jsFullOpenState={jsEditorFullyOpen} handleExpand={handleExpandY}
                            mobileView={true} />
                    </div>
                    <div id='mobile-js-editor' className='mobile-editor hidden'>
                        <Editor editorName="JS" lang="javascript" value={js} changeHandler={setJs} icon={javascriptIcon}
                            editorState={jsEditorState} jsFullOpenState={jsEditorFullyOpen} handleExpand={handleExpandY}
                            mobileView={true} />
                    </div>
                </div>


                <div className='  md:w-[50vw] h-full '>
                    <div className="hidden md:block" >
                        <Navbar saveLocally={saveToLocalStorage} resetState={resetState} />
                    </div>
                    <OutputPane html={html} css={css} js={js} />
                </div>
            </div>
        </>

    )
}

export default CodeEditor
