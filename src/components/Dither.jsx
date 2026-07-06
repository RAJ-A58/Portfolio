/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react';
import './Dither.css';

const vertexShaderSource = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision highp float;
varying vec2 vUv;

uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;
uniform float colorNum;
uniform float pixelSize;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = waveFrequency;
  for (int i = 0; i < 4; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= waveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p + fbm(p2)); 
}

float getBayer(int x, int y) {
  if (y == 0) {
    if (x == 0) return 0.0/64.0; if (x == 1) return 48.0/64.0; if (x == 2) return 12.0/64.0; if (x == 3) return 60.0/64.0;
    if (x == 4) return 3.0/64.0; if (x == 5) return 51.0/64.0; if (x == 6) return 15.0/64.0; if (x == 7) return 63.0/64.0;
  } else if (y == 1) {
    if (x == 0) return 32.0/64.0; if (x == 1) return 16.0/64.0; if (x == 2) return 44.0/64.0; if (x == 3) return 28.0/64.0;
    if (x == 4) return 35.0/64.0; if (x == 5) return 19.0/64.0; if (x == 6) return 47.0/64.0; if (x == 7) return 31.0/64.0;
  } else if (y == 2) {
    if (x == 0) return 8.0/64.0; if (x == 1) return 56.0/64.0; if (x == 2) return 4.0/64.0; if (x == 3) return 52.0/64.0;
    if (x == 4) return 11.0/64.0; if (x == 5) return 59.0/64.0; if (x == 6) return 7.0/64.0; if (x == 7) return 55.0/64.0;
  } else if (y == 3) {
    if (x == 0) return 40.0/64.0; if (x == 1) return 24.0/64.0; if (x == 2) return 36.0/64.0; if (x == 3) return 20.0/64.0;
    if (x == 4) return 43.0/64.0; if (x == 5) return 27.0/64.0; if (x == 6) return 39.0/64.0; if (x == 7) return 23.0/64.0;
  } else if (y == 4) {
    if (x == 0) return 2.0/64.0; if (x == 1) return 50.0/64.0; if (x == 2) return 14.0/64.0; if (x == 3) return 62.0/64.0;
    if (x == 4) return 1.0/64.0; if (x == 5) return 49.0/64.0; if (x == 6) return 13.0/64.0; if (x == 7) return 61.0/64.0;
  } else if (y == 5) {
    if (x == 0) return 34.0/64.0; if (x == 1) return 18.0/64.0; if (x == 2) return 46.0/64.0; if (x == 3) return 30.0/64.0;
    if (x == 4) return 33.0/64.0; if (x == 5) return 17.0/64.0; if (x == 6) return 45.0/64.0; if (x == 7) return 29.0/64.0;
  } else if (y == 6) {
    if (x == 0) return 10.0/64.0; if (x == 1) return 58.0/64.0; if (x == 2) return 6.0/64.0; if (x == 3) return 54.0/64.0;
    if (x == 4) return 9.0/64.0; if (x == 5) return 57.0/64.0; if (x == 6) return 5.0/64.0; if (x == 7) return 53.0/64.0;
  } else if (y == 7) {
    if (x == 0) return 42.0/64.0; if (x == 1) return 26.0/64.0; if (x == 2) return 38.0/64.0; if (x == 3) return 22.0/64.0;
    if (x == 4) return 41.0/64.0; if (x == 5) return 25.0/64.0; if (x == 6) return 37.0/64.0; if (x == 7) return 21.0/64.0;
  }
  return 0.0;
}

vec3 applyDither(vec2 coord, vec3 color) {
  vec2 scaledCoord = floor(coord / pixelSize);
  int x = int(mod(scaledCoord.x, 8.0));
  int y = int(mod(scaledCoord.y, 8.0));
  float threshold = getBayer(x, y) - 0.25;
  float stepVal = 1.0 / (colorNum - 1.0);
  color += threshold * stepVal;
  float bias = 0.15;
  color = clamp(color - bias, 0.0, 1.0);
  return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
}

void main() {
  vec2 pixelCoord = gl_FragCoord.xy;
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;
  
  float f = pattern(uv);
  if (enableMouseInteraction == 1) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / resolution.y;
    float dist = length(uv - mouseNDC);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
    f -= 0.6 * effect;
  }
  
  // High contrast wave mix between deep obsidian (#070709) and vibrant waveColor
  vec3 baseBg = vec3(0.04, 0.05, 0.08);
  vec3 col = mix(baseBg, waveColor, clamp(f * 1.6, 0.0, 1.0));
  
  // Apply Bayer 8x8 Dithering
  col = applyDither(pixelCoord, col);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Dither({
  waveSpeed = 0.05,
  waveFrequency = 3.0,
  waveAmplitude = 0.35,
  waveColor = [0.55, 0.65, 0.85],
  colorNum = 4.0,
  pixelSize = 3.0,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.4
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'resolution');
    const uTime = gl.getUniformLocation(program, 'time');
    const uWaveSpeed = gl.getUniformLocation(program, 'waveSpeed');
    const uWaveFrequency = gl.getUniformLocation(program, 'waveFrequency');
    const uWaveAmplitude = gl.getUniformLocation(program, 'waveAmplitude');
    const uWaveColor = gl.getUniformLocation(program, 'waveColor');
    const uMousePos = gl.getUniformLocation(program, 'mousePos');
    const uEnableMouse = gl.getUniformLocation(program, 'enableMouseInteraction');
    const uMouseRadius = gl.getUniformLocation(program, 'mouseRadius');
    const uColorNum = gl.getUniformLocation(program, 'colorNum');
    const uPixelSize = gl.getUniformLocation(program, 'pixelSize');

    let animationFrameId;
    let startTime = Date.now();

    const resize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      if (!enableMouseInteraction || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouseRef.current = {
        x: (e.clientX - rect.left) * dpr,
        y: (e.clientY - rect.top) * dpr
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      resize();
      const elapsed = disableAnimation ? 0 : (Date.now() - startTime) * 0.001;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform1f(uWaveSpeed, waveSpeed);
      gl.uniform1f(uWaveFrequency, waveFrequency);
      gl.uniform1f(uWaveAmplitude, waveAmplitude);
      gl.uniform3f(uWaveColor, waveColor[0], waveColor[1], waveColor[2]);
      gl.uniform2f(uMousePos, mouseRef.current.x, mouseRef.current.y);
      gl.uniform1i(uEnableMouse, enableMouseInteraction ? 1 : 0);
      gl.uniform1f(uMouseRadius, mouseRadius);
      gl.uniform1f(uColorNum, colorNum);
      gl.uniform1f(uPixelSize, pixelSize);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [waveSpeed, waveFrequency, waveAmplitude, waveColor, colorNum, pixelSize, disableAnimation, enableMouseInteraction, mouseRadius]);

  return (
    <div className="dither-container">
      <canvas ref={canvasRef} className="dither-canvas" />
    </div>
  );
}
