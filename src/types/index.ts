import * as tf from '@tensorflow/tfjs';

export interface YOLOModel extends tf.GraphModel {
  inputShape: number[];
}

export interface DetectionBox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface Detection {
  box: DetectionBox;
  score: number;
  class: number;
  label: string;
}

export interface PreprocessResult {
  input: tf.Tensor;
  xRatio: number;
  yRatio: number;
}

export type MediaSource = HTMLVideoElement | HTMLImageElement;

export interface WebcamConfig {
  audio: boolean;
  video: {
    facingMode: string;
  };
}

export interface ButtonHandlerProps {
  imageRef: HTMLImageElement;
  cameraRef: HTMLVideoElement;
  videoRef?: HTMLVideoElement;
  onImageLoad: () => void;
}

export type StreamingState = 'camera' | 'image' | null;

// Extend tf.GraphModel to include inputShape
declare module '@tensorflow/tfjs' {
  interface GraphModel {
    inputShape?: number[];
  }
}
