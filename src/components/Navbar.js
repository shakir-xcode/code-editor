import React, { useState } from 'react'
import editorLogo from "../assets/editorLogo.png"


function Navbar({ saveLocally, resetState }) {

    const [toastVisible, setToastVisible] = useState(false);

    const handleToast = () => {
        console.log('clicked..')
        setToastVisible(true)
        setTimeout(setToastVisible, 1000, false);
    }

    return (
        <div className='h-[48px] flex justify-between items-center  bg-gray-500 px-3 py-2'>
            <div className='flex gap-2 items-center'>
                <img className='w-8 h-8' src={editorLogo} alt='logo' />
                <h1 className='text-xl sm:text-2xl md:text-3xl [font-family:roboto]  text-white'>Code Editor</h1>
            </div>

            <div className='flex gap-1 flex-wrap'>
                <button title='Reset All' onClick={() => resetState()}
                    className='bg-blue-400 w-16 h-8 rounded-lg text-white hover:bg-blue-600'>Reset
                </button>
                <button title='save' onClick={() => { saveLocally(); handleToast(); }}
                    className='bg-blue-400 w-16 h-8 rounded-lg text-white hover:bg-blue-600'>Save
                </button>
            </div>

            <div
                className={` absolute px-3 py-1 bg-slate-400 md:bg-slate-800 font-semibold right-2 top-12 z-50
                md:right-2 md:top-[3.1em] text-white rounded  ${toastVisible ? 'block' : 'hidden'}`}>
                saved &#x2713; </div>
        </div>
    )
}

export default Navbar
