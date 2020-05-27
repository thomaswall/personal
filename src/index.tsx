import '/index.css'
import React, { useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import THREED from '/structures/3d'


function App() {
    return (
        <div id="main" className="bg-black h-screen">
            <div className="w-screen">
                <div className="w-1/2 left-0 h-screen absolute">
                    <THREED />
                </div>
                <div className='bg-white text-black h-1/2 w-1/2' style={{
                    marginLeft: `${window.innerWidth * 3 / 5}px`,
                    width: "25%"}}>
                    HELLO
                </div>
            </div>
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'))