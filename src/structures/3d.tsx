import React from 'react'
import * as THREE from 'three'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import title from 'url:../assets/result.png'
import * as shaders from './shaders'

let renderer, cssrenderer, labelRenderer, scene, camera, start

let plane, planemat, titlemat
let titleGroup, vidGroup

let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let invisPlane
let scroll = 0
let starting_content_x = -2700
let wratio


let vertexShader = `
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

varying vec2 vUv;
varying float noise;
uniform float time;

float turbulence( vec3 p ) {

  float w = 100.0;
  float t = -.5;

  for (float f = 1.0 ; f <= 10.0 ; f++ ){
    float power = pow( 2.0, f );
    t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
  }

  return t;

}

void main() {

  vUv = uv * 0.5;

  // add time to the noise parameters so it's animated
  noise = pnoise(vec3(vUv, 1.0), vec3(10.0)) * 20.0;//10.0 *  -.10 * turbulence( .5 * normal + time );
  float b = 5.0 * pnoise( 0.05 * position + vec3( 2.0 * time ), vec3( 100.0 ) );
  float displacement = - noise + b;

  vec3 newPosition = position + normal * displacement * 2.3;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

}
`

let fragmentShader = `
varying vec2 vUv;
varying float noise;

void main() {

  // colour is RGBA: u, v, 0, 1
  vec4 color = mix(vec4(pow(noise, 1.2) / 2. * vUv, 0.7, 1), vec4(0.93, 0.95, 0.9, 1.0), 0.6);
  gl_FragColor = color;

}
`

export default function THREED(props) {

    let initTitle = (width, height) => {
        const texture = new THREE.TextureLoader().load(title)
        let pixels = 50;
        let ratio = 12
        let h = height / 100
        let w = h * ratio
        const geo = new THREE.PlaneBufferGeometry( w, h, ratio * pixels, pixels);
        let ids = new Float32Array(geo.attributes.position.count);
        for(let i = 0; i < ids.length; i++) {
          ids[i] = i
        }
        geo.setAttribute('coord', new THREE.BufferAttribute(ids, 1));

        titlemat = new THREE.ShaderMaterial({
            vertexColors: true,
            uniforms: {
              shape: {
                value: texture
              },
              size: {
                value: 0.5
              },
              scale: {
                value: window.innerHeight / 2
              },
              time: {
                value: 0
              },
              mouse: {
                value: new THREE.Vector2()
              }
            },
            vertexShader: shaders.titlevshader,
            fragmentShader: `
                uniform sampler2D shape;
                
                varying vec2 vUv;
                
                void main() {
                  vec2 uv = vUv;
                  vec4 v = texture2D(shape, uv);
                  gl_FragColor = v;
                }
            `,
            transparent: false
          });
        let points = new THREE.Points(geo, titlemat)
        titleGroup = new THREE.Group()
        titleGroup.add(points)
        scene.add(points)
        points.position.set(0, 100, - width / 7)

        let geometry = new THREE.PlaneGeometry( 100, 100, 4 );
        let material = new THREE.MeshBasicMaterial( {
          opacity: 0.0,
          transparent: true} );
        invisPlane = new THREE.Mesh( geometry, material )
        invisPlane.position.set(0, 0, -width / 7)
        scene.add( invisPlane );
    }

    let addElement = () => {

      let div = document.createElement( 'div' );
      div.style.width = '1600px';
      div.style.height = '900px';
      div.style.backgroundColor = 'rgba(0, 0, 0, 0)';

      let iframe = document.createElement( 'iframe' );
      iframe.style.width = '1600px';
      iframe.style.height = '900px';
      iframe.style.border = '0px';
      iframe.src = "https://player.vimeo.com/video/267450954"
      div.appendChild( iframe );

      let object = new CSS3DObject( div );
      object.position.set( starting_content_x, 0, -1300)
      object.rotation.y = 0;
      object.orig_pos = object.position.clone()
      vidGroup.add( object );

    }

    let addytoiElement = () => {

      let div = document.createElement( 'div' );
      div.style.width = '1600px';
      div.style.height = '900px';
      div.style.backgroundColor = 'rgba(0, 0, 0, 0)';

      let iframe = document.createElement( 'iframe' );
      iframe.style.width = '1600px';
      iframe.style.height = '900px';
      iframe.style.border = '0px';
      iframe.src = "https://player.vimeo.com/video/212332623"
      div.appendChild( iframe );

      let object = new CSS3DObject( div );
      let diff = (document.getElementById("ibm").clientHeight
        + document.getElementById("ytoi").clientHeight) / document.body.scrollHeight
      object.position.set( starting_content_x - diff * 16000, 0, -1300)
      object.rotation.y = 0;
      object.orig_pos = object.position.clone()
      vidGroup.add( object );

    }

    let addAstrumElement = () => {

      let div = document.createElement( 'div' );
      div.style.width = '1600px';
      div.style.height = '900px';
      div.style.backgroundColor = 'rgba(0, 0, 0, 0)';

      let iframe = document.createElement( 'iframe' );
      iframe.style.width = '1600px';
      iframe.style.height = '900px';
      iframe.style.border = '0px';
      iframe.src = "https://www.youtube.com/embed/sWZituP3Wt8"
      div.appendChild( iframe );

      let object = new CSS3DObject( div );
      let diff = (document.getElementById("astrum").clientHeight 
        + document.getElementById("ibm").clientHeight
        + document.getElementById("ytoi").clientHeight) / document.body.scrollHeight
      object.position.set( starting_content_x - diff * 18000, 0, -1300)
      object.rotation.y = 0;
      object.orig_pos = object.position.clone()
      vidGroup.add( object );

    }

    React.useEffect(() => {
        renderer = new THREE.WebGLRenderer({alpha: false})
        renderer.domElement.style.position = "absolute"
        renderer.domElement.style.top = 0
        labelRenderer = new CSS2DRenderer()
        cssrenderer = new CSS3DRenderer()
        cssrenderer.domElement.style.zIndex = "1"
        cssrenderer.domElement.style.position = "absolute"
        cssrenderer.domElement.style.top = 0
        let width = document.getElementById('3d-root').clientWidth
        let height = document.getElementById('3d-root').clientHeight
        scene = new THREE.Scene()
        scene.background = new THREE.Color( 0xfff5e6 );
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        renderer.setSize( width, height)
        cssrenderer.setSize(width, height)
        camera.position.z = 1
        const root = document.getElementById('3d-root')

        root.appendChild(renderer.domElement)
        root.appendChild(cssrenderer.domElement)
        renderer.setClearColor(0xffffff, 0)

        let max_width = 400
        let geometry = new THREE.PlaneBufferGeometry( max_width, max_width, 50, 50)
        geometry.rotateX( - Math.PI / 2.8 );
        
        planemat = new THREE.ShaderMaterial( {
            uniforms: {
                time: { // float initialized to 0
                  type: "f",
                  value: 0.0
                }
              },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
          });
        plane = new THREE.Mesh( geometry, planemat );
        plane.position.set(0, -60, 10)
        scene.add( plane );

        //initTitle(width, height)

        start = Date.now()

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener('scroll', () => scroll = window.scrollY, false)

        vidGroup = new THREE.Group();
        scene.add(vidGroup)
        wratio = window.innerWidth / window.innerHeight
        addElement()
        addAstrumElement()
        addytoiElement()

        animate()
    }, [])

    let onDocumentMouseMove = ( event ) => {
      //let root3d = document.getElementById("3d-root")
      mouse.x = ( event.clientX / window.innerWidth );
      mouse.y = - ( event.clientY / window.innerHeight );
      raycaster.setFromCamera( mouse.clone(), camera );   
      
      // let objects = raycaster.intersectObject(invisPlane);
      // if(objects.length < 1)
      //   return
      
      // let pos = objects[0].point

      //titlemat.uniforms['mouse'].value = new THREE.Vector2(pos.x, pos.y)
  }

    let animate = () => {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
        cssrenderer.render(scene, camera)


        planemat.uniforms[ 'time' ].value = .00025 * ( Date.now() - start );
        //titlemat.uniforms[ 'time' ].value = .001 * ( Date.now() - start );
        let exag = 100
        let perc_scroll = scroll / document.body.scrollHeight
        for(let mesh of vidGroup.children) {
          mesh.lookAt(new THREE.Vector3((mouse.x - 0.5) * exag - 850, (mouse.y - 0.5) * exag + 100, 0.5))
          mesh.position.x = -200 * wratio + mesh.orig_pos.x + perc_scroll * 10000 * wratio
        }
          
    }

    return <div id="3d-root" className="w-full h-full"/>
}