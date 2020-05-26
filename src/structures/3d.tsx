import React from 'react'
import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'

let renderer, labelRenderer, scene, camera

let plane

export default function THREED(props) {
    React.useEffect(() => {
        renderer = new THREE.WebGLRenderer({alpha: false})
        labelRenderer = new CSS2DRenderer()
        let width = window.innerWidth
        let height = window.innerHeight
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        camera.position.z = 5
        const root = document.getElementById('3d-root')

        root.appendChild(renderer.domElement)
        renderer.setClearColor('black', 0)

        var geometry = new THREE.PlaneGeometry( 5, 20, 32 );
        let material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        plane = new THREE.Mesh( geometry, material );
        scene.add( plane );

        animate()
    }, [])

    let animate = () => {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }

    return <div id="3d-root" className="m-5"/>
}