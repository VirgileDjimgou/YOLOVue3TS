/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// TensorFlow.js module declarations
declare module '@tensorflow/tfjs' {
  export * from '@tensorflow/tfjs-backend-webgl'
    export * from '@tensorflow/tfjs-core'
}

declare module '@tensorflow/tfjs-backend-webgl' {
  export function setWebGLContext(gl: WebGLRenderingContext): void;
}

// JSON module declaration
declare module '*.json' {
  const value: any;
  export default value;
}
