import React from 'react'
import save from "../assets/save.png"
import editorLogo from "../assets/editorLogo.png"


function Navbar({ saveLocally }) {

    return (
        <div className='h-[48px] flex justify-between items-center  bg-gray-500 px-3 py-2'>
            <div className='flex gap-2 items-center'>
                <img className='w-8 h-8' src={editorLogo} alt='logo' />
                <h1 className='text-xl sm:text-2xl md:text-3xl [font-family:roboto]  text-white'>Code Editor</h1>
            </div>

            <button title='save' onClick={() => saveLocally()}
                className='bg-blue-400 w-16 h-8 rounded-lg text-white hover:bg-blue-600'>Save
                {/* <img className='w-4 h-4 m-auto object-cover' src={save} alt='save' /> */}
            </button>

        </div>
    )
}

export default Navbar