let titlevshader = `
float rand(float n){return fract(sin(n) * 43758.5453123);}

float noise(float p){
	float fl = floor(p);
    float fc = fract(p);
	return mix(rand(fl), rand(fl + 1.0), fc);
}
	
uniform float scale;
uniform float size;
uniform float time;
attribute float coord;
uniform vec2 mouse;

varying vec2 vUv;

void main() {

    vUv = uv;
    gl_PointSize = size;
    float ncoord = coord;
    vec2 diff = (mouse - vec2(0, 30)) * noise(time) * 0.5 * sin(noise(rand(coord))/ 5.0);
    vec3 new_pos = vec3(position.xy + diff, position.z);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( new_pos, 1.0 );

}
`

export { titlevshader }