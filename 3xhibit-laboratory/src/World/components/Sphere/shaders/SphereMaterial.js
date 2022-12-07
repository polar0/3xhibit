import { vertexShader, fragmentShader } from './index';
import * as THREE from 'three';

class SphereMaterial extends THREE.ShaderMaterial {
  constructor(uniforms) {
    super({
      vertexShader,
      fragmentShader,
      uniforms,
    });
  }
}

export default SphereMaterial;
