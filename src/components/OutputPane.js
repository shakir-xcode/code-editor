import React from 'react'

function OutputPane({ html, css, js }) {
    const template = `<html>
    <body>${html || ""}</body>
    <style>${css || ""}</style>
    <script>${js || ""}</script>
</html>`

    return (
        <div className='w-full  output-pane-height grow'>
            {/* bg-[#2a373f] */}
            <iframe className=' w-full h-full'
                title='Output'
                sandbox='allow-scripts'
                srcDoc={template}
            />
        </div>
    )
}

export default OutputPane