// Global type declarations for better TypeScript support

// Ensure Vue components are properly typed
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Loader: typeof import('../components/Loader.vue')['default']
    ButtonHandler: typeof import('../components/ButtonHandler.vue')['default']
    HelloWorld: typeof import('../components/HelloWorld.vue')['default']
  }
}

// CSS modules support
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

// Image imports
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// Enhanced TensorFlow.js types
declare module '@tensorflow/tfjs' {
  interface GraphModel {
    inputShape?: number[];
  }
}

export { };

