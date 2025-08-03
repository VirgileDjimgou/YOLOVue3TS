<template>
  <div class="app">
    <Loader v-if="loading">Loading model... {{ progress }}%</Loader>
    <div class="content">
      <video 
        ref="video" 
        class="overlay" 
        autoplay 
        muted 
        playsinline 
        @play="onVideoPlay" 
      />
      <canvas ref="canvas" class="overlay" />
      <img 
        ref="image" 
        class="overlay" 
        @load="onImageLoad" 
        alt="Detection target"
      />
    </div>
    <ButtonHandler 
      :imageRef="imageElement" 
      :cameraRef="videoElement" 
      :onImageLoad="onImageLoad" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { detectVideo, detect } from './utils/detect';
import Loader from './components/Loader.vue';
import ButtonHandler from './components/ButtonHandler.vue';

const video = ref<HTMLVideoElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const image = ref<HTMLImageElement | null>(null);

const loading = ref<boolean>(true);
const progress = ref<number>(0);

let model: tf.GraphModel & { inputShape: number[] };
let inputShape: number[];

// Computed refs for non-null assertion
const videoElement = computed(() => video.value as HTMLVideoElement);
const imageElement = computed(() => image.value as HTMLImageElement);

async function loadModel(): Promise<void> {
  const handler = tf.io.browserHTTPRequest('/model/model.json', {
    onProgress: (f: number) => { 
      progress.value = Math.round(f * 100); 
    }
  });
  const net = await tf.loadGraphModel(handler);
  model = net as tf.GraphModel & { inputShape: number[] };
  inputShape = net.inputs[0].shape as number[];
  // Add inputShape as property for compatibility
  model.inputShape = inputShape;
  loading.value = false;
}

async function onVideoPlay(): Promise<void> {
  if (canvas.value && video.value) {
    canvas.value.width = video.value.videoWidth;
    canvas.value.height = video.value.videoHeight;
    detectVideo(video.value, model, canvas.value);
  }
}

// Function to detect objects on an image
async function onImageLoad(): Promise<void> {
  if (canvas.value && image.value) {
    canvas.value.width = image.value.width;
    canvas.value.height = image.value.height;
    detect(image.value, model, canvas.value);
  }
}

onMounted(async () => {
  await loadModel();
});
</script>

<style src="./style/App.css"></style>
