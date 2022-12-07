const fragmentShader = /* glsl */ `
uniform float uTime;
uniform float uIntensity;
uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * uIntensity;
  // vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
  vec2 noisyVUv = vUv + vDisplacement * uIntensity;
  vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 1.0, abs(noisyVUv.y - 0.5)));
  
  gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
