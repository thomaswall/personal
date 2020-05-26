import '/index.css'
import React, { useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import THREED from '/structures/3d'


function App() {
    return (
        <div id="main" className="w-screen h-screen">
            <THREED />
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'))