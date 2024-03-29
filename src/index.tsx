import "./index.css";
import React, { useEffect } from "react";
import * as ReactDOM from "react-dom";
import THREED from "./structures/3d";

const wecIcon = require("url:./assets/wecIcon.svg");

let card_style = { backgroundColor: "#ffeecc", opacity: 0.8 };
let highlight = { color: "#1a53ff" };

function App() {
  return (
    <div id="main" className="bg-gray-500">
      <div className="w-full left-0 h-screen fixed z-10">
        <THREED />
      </div>
      <div className="w-screen font-ibmmono bg-gray-500 flex justify-center">
        <div
          className="flex flex-col p-12 z-20 absolute"
          style={{
            width: `90vw`,
          }}
        >
          <div
            className="w-full mt-12 p-12 shadow-2xl rounded"
            style={card_style}
          >
            <div className="text-6xl p-4">Tom Wall</div>
            <div className="text-base p-4">
              I'm a <span style={highlight}>full-stack </span>engineer. I specialize in
              <span style={highlight}> real-time</span> applications running in
              different environments that influence the user's
              behavior through a meaningful experience. I'm looking to leverage
              my skills in an space where I can not only broaden the scope
              of what is possible for a responsive experience, but also
              contribute to the aesthetic choices of the applications
              themselves. Message me at thomas j wall 1 at gmail.
            </div>
            <a
              style={highlight}
              className="text-xs pt-8 pl-4"
              href="https://www.hicetnunc.xyz/tz/tz1UvMm3KGc68UqD1eZjbjq8Aphvudckuvha"
              target="_blank"
            >
              hicetnunc
            </a>
            <a
              style={highlight}
              className="text-xs pt-8 pl-4"
              href="https://opensea.io/assets/astrum-relics"
              target="_blank"
            >
              opensea
            </a>
            <a
              style={highlight}
              className="text-xs pt-8 pl-4"
              href="https://github.com/thomaswall"
              target="_blank"
            >
              github
            </a>
            <a
              style={highlight}
              className="text-xs pt-8 pl-4"
              href="https://twitter.com/llawmot"
              target="_blank"
            >
              twitter
            </a>
            <a
              style={highlight}
              className="text-xs pt-8 pl-4"
              href="https://linkedin.com/in/llawmot"
              target="_blank"
            >
              linkedin
            </a>
          </div>
          <div
            className="w-full mt-12 p-12 shadow-2xl rounded"
            style={card_style}
            id="ibm"
          >
            <a
              className="text-4xl p-4 underline"
              href="https://goodvisit.com"
              target="_blank"
            >
              Goodvisit
            </a>
            <div className="text-2xl p-4">Founder and CTO</div>
            <div className="text-lg p-4">
              I am currently the primary architect and contributor for the implementation of a real-time eligibility and patient fee estimation service for healthcare providers. 
            </div>
            <div className="text-lg p-4">
            Highlighted work: A fully serverless architecture that relies mostly on client-facing json:api schemas, aws lambda, sqs, postgres, and dynamodb. provider-focused frontend (react/chakra-ui) facilitates advanced client workflows for monitoring and making changes to existing patient profiles and negotiated payer rates.
            </div>
            <div className="text-lg p-4">
              Goodvisit process 2M+ patient estimates per year.
            </div>
          </div>
          <div
            className="w-full mt-12 p-12 shadow-2xl rounded"
            style={card_style}
            id="ibm"
          >
            <a
              className="text-4xl p-4 underline"
              href="https://hivemapper.com"
              target="_blank"
            >
              Hivemapper
            </a>
            <div className="text-2xl p-4">3D Specialist</div>
            <div className="text-lg p-4">
              I was the primary architect of all ongoing web features for all
              user-facing 3D map development.
            </div>
            <div className="text-lg p-4">
              My main objectives were to modernize the state machine and
              rendering pipelines of the application given a fixed number of
              camera/user inputs.
            </div>
            <div className="text-lg p-4">
              Highlighted work: level-of-detail optimizations, decals, managing
              multiple render-targets, and various visual enhancements/views of
              the meshes themselves.
            </div>
          </div>
          <div
            className="w-full mt-12 p-12 shadow-2xl rounded"
            style={card_style}
            id="ibm"
          >
            <div className="text-4xl p-4 flex items-center">
              <img src={wecIcon} className="w-12 h-12" />
              <div className="p-4">IBM Immersive Environments</div>
            </div>
            <div className="text-2xl p-4">Lead Software Engineer</div>
            <div className="text-lg p-4">
              I led a engineering team that develops 3D applications in
              pixel-rich, immersive spaces across North America and Europe.
            </div>
            <div className="text-lg p-4">
              The work couples <span style={highlight}> multi-modal</span> forms
              of interactions (voice, spatial, body) with a distributed graphics
              platform in order to achieve a 1:1{" "}
              <span style={highlight}>digital and physical</span> environment.
            </div>
            <div className="text-lg p-4">
              We built a framework from scratch that{" "}
              <span style={highlight}>frame-syncs</span> across multiple
              machines, and subscribes / publishes to exotic I/O. We support
              applications written in UE4, openFrameworks,{" "}
              <a
                className="underline"
                href="https://www.oblong.com/g-speak"
                target="_blank"
              >
                gspeak
              </a>
              , and pure OpenGL.
            </div>
            <div className="text-lg p-4">
              Form factors include a 3-machine,{" "}
              <span style={highlight}>7200x2700</span> wall, a{" "}
              <span style={highlight}>5-machine-360-degree</span> room, and web.
            </div>
          </div>
          <div
            className="w-full mt-12 p-12 shadow-2xl rounded"
            style={card_style}
            id="ytoi"
          >
            <a
              className="text-4xl p-4 underline"
              href="https://ytoi.io"
              target="_blank"
            >
              ytoi.io
            </a>
            <div className="text-2xl p-4">Graphics Engineer / Director</div>
            <div className="text-lg p-4">
              Contract work for real-time, 3D, interactive experiences.
            </div>
            <div className="text-lg p-4">
              We have supported <span style={highlight}> art</span> shows,{" "}
              <span style={highlight}> music</span> performances, and event
              spaces.
            </div>
          </div>
          <div
            className="w-full mt-12 p-12 shadow-2xl rounded"
            style={card_style}
            id="astrum"
          >
            <div className="text-4xl p-4">Astrum (in development)</div>
            <div className="text-lg p-4">
              Shared world that depends on resource{" "}
              <span style={highlight}>scarcity</span>.
            </div>
            <div className="text-lg p-4">
              Everything from land ownership to usable game assets are unique.
              Buying, selling, and trading are all featured in the economy.
              Players can interact in real-time in-game or through a web
              experience.
            </div>
            <div className="text-lg p-4">
              Built in <span style={highlight}>UE4</span> with supporting
              infrastructure in <span style={highlight}>Elixir</span>.
            </div>
          </div>
          <div
            className="w-full mt-12 p-12 shadow-2xl rounded"
            style={card_style}
          >
            <div className="text-4xl p-4">
              Millennial Media (Formerly Jumptap)
            </div>
            <div className="text-lg p-4">Business Development Engineer</div>
            <div className="text-lg p-4">
              Provided analytical insight and monitoring in multiple areas of
              growth, including a{" "}
              <span style={highlight}> real-time bidding</span> platform and
              third-party data targeting
            </div>
            <div className="text-lg p-4">Algorithmic supply optimization</div>
            <div className="text-lg p-4">
              Jumptap was <span style={highlight}> acquired</span> by Millennial
              Media in 2013.
            </div>
          </div>
          <div
            className="w-full mt-12 p-12 shadow-2xl rounded"
            style={card_style}
          >
            <div className="text-4xl p-4">Skills</div>
            <div className="text-med pl-4 pt-4">
              C++ - OpenGL - WebGL - GLSL
            </div>
            <div className="text-med pl-4">
              openFrameworks - three.js - Unreal Engine 4
            </div>
            <div className="text-med pl-4">React - Node.js - Typescript</div>
            <div className="text-med pl-4">Elixir - Python</div>
            <div className="text-4xl p-4">Education</div>
            <div className="text-med pl-4 pt-4">New York University</div>
            <div className="text-med pl-4">
              BA in Mathematics, Computer Science
            </div>
            <div className="text-med pl-4">2015</div>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
