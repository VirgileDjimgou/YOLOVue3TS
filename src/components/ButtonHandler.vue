<template>
  <div class="btn-row">
    <input 
      type="file" 
      accept="image/*" 
      ref="fileInput" 
      style="display:none" 
      @change="onImageChange" 
    />
    <button @click="openImage">Load Image</button>
    <button @click="toggleCamera">
      {{ streaming === 'camera' ? 'Close' : 'Open' }} Webcam
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Webcam } from '../utils/webcam';
import type { StreamingState } from '../types';

interface Props {
  imageRef: HTMLImageElement;
  cameraRef: HTMLVideoElement;
  videoRef?: HTMLVideoElement;
  onImageLoad: () => void;
}

const props = defineProps<Props>();

const streaming = ref<StreamingState>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const webcam = new Webcam();

function openImage(): void {
  fileInput.value?.click();
}

function onImageChange(e: Event): void {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  
  const url = URL.createObjectURL(file);
  props.imageRef.src = url;
  
  // Show image and hide video
  props.imageRef.style.display = 'block';
  props.cameraRef.style.display = 'none';
  
  streaming.value = 'image';
  
  // Trigger detection once image is loaded
  props.imageRef.onload = () => {
    if (props.onImageLoad) {
      props.onImageLoad();
    }
  };
}

function toggleCamera(): void {
  if (streaming.value === 'camera') {
    webcam.close(props.cameraRef);
    
    // Hide video
    props.cameraRef.style.display = 'none';
    
    streaming.value = null;
  } else {
    webcam.open(props.cameraRef);
    
    // Show video and hide image
    props.cameraRef.style.display = 'block';
    props.imageRef.style.display = 'none';
    
    streaming.value = 'camera';
  }
}
</script>

<style scoped>
.btn-row {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style>
