import '/index.css'
import React, { useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import THREED from '/structures/3d'

const wecIcon = require('url:./assets/wecIcon.svg')

let card_style = {backgroundColor: "#ffeecc", opacity: 0.8}
let highlight = {color: "#1a53ff"}


function App() {
    return (
        <div id="main" className="bg-gray-500">
            <div className="w-full left-0 h-screen fixed z-10">
                <THREED />
            </div>
            <div className="w-screen font-ibmmono bg-gray-500">
                <div className="flex flex-col p-12 z-20 absolute" style={{
                    marginLeft: `43vw`,
                    width: `50vw`
                }}>
                    <div className='w-full m-12 p-12 shadow-2xl rounded' style={card_style}>
                        <div className="text-6xl p-4">
                            Tom Wall
                        </div>
                        <div className="text-base p-4">
                        I'm an interactive-<span style={highlight}>graphics </span>
                         and <span style={highlight}> backend</span> engineer. I specialize in 
                        <span style={highlight}> real-time</span> applications running in a
                        multitude of different
                        environments that influence the
                        user's behavior through a
                        meaningful experience. I'm
                        looking to leverage my skills in
                        an environment where I can not
                        only broaden the scope of what
                        is possible for an immersive
                        experience, but also contribute
                        to the aesthetic choices of the
                        applications themselves.
                        </div>
                        <a style={highlight} className="text-xs pt-8 pl-4" href="https://twitter.com/llawmot" target="_blank">
                            Twitter
                        </a>
                        <a style={highlight} className="text-xs pt-8 pl-4" href="https://linkedin.com/in/llawmot" target="_blank">
                            LinkedIn
                        </a>
                    </div>
                    <div className='w-full m-12 p-12 shadow-2xl rounded' style={card_style} id="ibm">
                        <div className="text-4xl p-4 flex">
                            <img src={wecIcon} />
                            <div className="p-4">IBM Immersive Environments</div>
                        </div>
                        <div className="text-2xl p-4">
                            Lead Software Engineer
                        </div>
                        <div className="text-lg p-4">
                            I currently lead a engineering team that develops 3D applications in pixel-rich,
                            immersive spaces across North America and Europe.
                        </div>
                        <div className="text-lg p-4">
                            The work couples <span style={highlight}> multi-modal</span> forms of interactions (voice, spatial,
                            body) with a distributed graphics platform in order to achieve a
                            1:1 <span style={highlight}>digital and physical</span> environment.
                        </div>
                        <div className="text-lg p-4">
                            We built a framework from scratch that <span style={highlight}>frame-syncs</span> across multiple machines, 
                            and subscribes / publishes to exotic I/O.
                        </div>
                        <div className="text-lg p-4">
                            Form factors include a 3-machine, <span style={highlight}>7200x2700</span> wall, a <span style={highlight}>5-machine-360-degree</span> room, and web.
                        </div>
                    </div>
                    <div className='w-full m-12 p-12 shadow-2xl rounded' style={card_style} id="ytoi">
                        <a className="text-4xl p-4 underline" href="https://ytoi.io" target="_blank">
                            ytoi.io
                        </a>
                        <div className="text-2xl p-4">
                            Graphics Engineer / Director
                        </div>
                        <div className="text-lg p-4">
                            Contract work for real-time, 3D, interactive experiences.
                        </div>
                        <div className="text-lg p-4">
                            We have supported <span style={highlight}> art</span> shows, <span style={highlight}> music</span> performances, and event spaces.
                        </div>
                    </div>
                    <div className='w-full m-12 p-12 shadow-2xl rounded' style={card_style} id="astrum">
                        <div className="text-4xl p-4">
                            Astrum (in development)
                        </div>
                        <div className="text-lg p-4">
                            Shared world that depends on resource <span style={highlight}>scarcity</span>.
                        </div>
                        <div className="text-lg p-4">
                            Everything from land ownership to usable game assets are unique. Buying, selling, and trading
                            are all featured in the economy. Players can interact in real-time in-game or through a web experience.
                        </div>
                        <div className="text-lg p-4">
                            Built in <span style={highlight}>UE4</span> with supporting infrastructure in <span style={highlight}>Elixir</span>.
                        </div>
                    </div>
                    <div className='w-full m-12 p-12 shadow-2xl rounded' style={card_style}>
                        <div className="text-4xl p-4">
                            Millennial Media (Formerly Jumptap)
                        </div>
                        <div className="text-lg p-4">
                            Business Development Engineer 
                        </div>
                        <div className="text-lg p-4">
                            Provided analytical insight and monitoring in multiple areas of
                            growth, including a <span style={highlight}> real-time bidding</span> platform and third-party
                            data targeting 
                        </div>
                        <div className="text-lg p-4">
                            Algorithmic supply optimization
                        </div>
                        <div className="text-lg p-4">
                            Jumptap was <span style={highlight}> acquired</span> by Millennial Media in 2013.
                        </div>
                    </div>
                    <div className='w-full m-12 p-12 shadow-2xl rounded' style={card_style}>
                        <div className="text-4xl p-4">
                            Skills
                        </div>
                        <div className="text-med pl-4 pt-4">
                            C++ - OpenGL - WebGL - GLSL
                        </div>
                        <div className="text-med pl-4">
                             openFrameworks - three.js - Unreal Engine 4
                        </div>
                        <div className="text-med pl-4">
                            React - Node.js - Typescript
                        </div>
                        <div className="text-med pl-4">
                            Elixir - Python
                        </div>
                        <div className="text-4xl p-4">
                            Education
                        </div>
                        <div className="text-med pl-4 pt-4">
                            New York University
                        </div>
                        <div className="text-med pl-4">
                            BA in Mathematics, Computer Science
                        </div>
                        <div className="text-med pl-4">
                            2015
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'))