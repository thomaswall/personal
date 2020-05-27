import '/index.css'
import React, { useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import THREED from '/structures/3d'

import wecIcon from 'url:./assets/wecIcon.svg'


function App() {
    return (
        <div id="main" className="bg-gray-500">
            <div className="w-full left-0 h-screen fixed z-10">
                <THREED />
            </div>
            <div className="w-screen bg-blue font-ibmmono bg-gray-500" style={{height: "700%"}}>
                <div className="flex flex-col p-12 z-20 absolute" style={{
                    marginLeft: `43vw`,
                    width: `50vw`
                }}>
                    <div className='bg-white w-full m-12 p-12 shadow-2xl rounded'>
                        <div className="text-6xl p-4">
                            Tom Wall
                        </div>
                        <div className="text-base p-4">
                        I'm an interactive-graphics
                        engineer. I specialize in realtime applications running in a
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
                        <a className="text-xs pt-8 pl-4" href="https://twitter.com/llawmot" target="_blank">
                            Twitter
                        </a>
                        <a className="text-xs pt-8 pl-4" href="https://linkedin.com/in/llawmot" target="_blank">
                            LinkedIn
                        </a>
                    </div>
                    <div className='bg-white w-full m-12 p-12 shadow-2xl rounded'>
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
                            The work couples multimodal forms of interactions (voice, spatial,
                            body) with a distributed graphics platform in order to achieve a
                            1:1 digital and physical environment.
                        </div>
                        <div className="text-lg p-4">
                            We built a framework from scratch that syncs frames across multiple machines, 
                            and subscribes / publishes to exotic I/O.
                        </div>
                    </div>
                    <div className='bg-white w-full m-12 p-12 shadow-2xl rounded'>
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
                            We have supported art shows, music performances, and event spaces.
                        </div>
                    </div>
                    <div className='bg-white w-full m-12 p-12 shadow-2xl rounded'>
                        <div className="text-4xl p-4">
                            Astrum (in development)
                        </div>
                        <div className="text-lg p-4">
                            Shared world that depends on resource scarcity.
                        </div>
                        <div className="text-lg p-4">
                            Everything from land ownership to usable game assets are unique. Buying, selling, and trading
                            are all featured in the economy. Players can interact in real-time in-game or through a web experience.
                        </div>
                        <div className="text-lg p-4">
                            Built in UE4 with supporting infrastructure in Elixir.
                        </div>
                    </div>
                    <div className='bg-white w-full m-12 p-12 shadow-2xl rounded'>
                        <div className="text-4xl p-4">
                            Millennial Media (Formerly Jumptap)
                        </div>
                        <div className="text-lg p-4">
                            Business Development Engineer 
                        </div>
                        <div className="text-lg p-4">
                            Provided analytical insight and monitoring in multiple areas of
                            growth, including a real-time bidding platform and third-party
                            data targeting 
                        </div>
                        <div className="text-lg p-4">
                            Algorithmic supply optimization
                        </div>
                        <div className="text-lg p-4">
                            Jumptap was acquired by Millennial Media in 2013.
                        </div>
                    </div>
                    <div className='bg-white w-full m-12 p-12 shadow-2xl rounded'>
                        <div className="text-4xl p-4">
                            Skills
                        </div>
                        <div className="text-med pl-4 pt-4">
                            C++ - OpenGL - WebGL
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