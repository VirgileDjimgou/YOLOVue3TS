// Utility exports for better module resolution
export { detect, detectVideo } from './detect';
export { default as labels } from './labels.json';
export { renderBoxes } from './renderBox';
export { Webcam } from './webcam';

// Re-export types
export type * from '../types';

