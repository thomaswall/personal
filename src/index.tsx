import '/index.css'
import React, { useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import THREED from '/structures/3d'


function App() {
    return (
        <div id="main" className="bg-black">
            <div className="w-1/2 left-0 h-screen fixed z-10">
                <THREED />
            </div>
            <div className="w-screen bg-black" style={{height: "350%"}}>
                <div className="flex flex-col p-12 z-20 absolute" style={{
                    marginLeft: `43vw`,
                    width: `50vw`
                }}>
                    <div className='bg-white w-full h-screen m-12'>
                        HELLO
                    </div>
                    <div className='bg-white w-full h-screen m-12'>
                        HELLO
                    </div>
                    <div className='bg-white w-full h-screen m-12'>
                        HELLO
                    </div>
                </div>
            </div>
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'))