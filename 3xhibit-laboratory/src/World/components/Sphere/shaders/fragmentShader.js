const fragmentShader = /* glsl */ `
varying vec3 vColor;

void main() {
  // vec3 color = vec3(0.34, 0.53, 0.96);
  vec3 color = vColor;
  gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
