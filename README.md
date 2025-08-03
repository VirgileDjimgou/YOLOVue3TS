# 🚀 YOLOv8 Vue.js Detection App

Modern real-time object detection application built with **Vue 3**, **TypeScript**, **TensorFlow.js** and **WebGL acceleration**.

![Vue 3](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-4.1-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- 🖼️ **Image detection** - Drag and drop your images
- 🎥 **Video detection** - Support all video formats
- 📷 **Real-time webcam** - Instant detection via camera
- 🎯 **80 object classes** - Complete COCO dataset
- 🚀 **Optimized performance** - WebGL backend
- 📱 **Responsive interface** - Modern and adaptive design
- 🔒 **Type Safety** - Complete TypeScript
- 🎨 **Clean UI** - Modern design with CSS3 animations

## 🛠️ Technologies

### Frontend

- **Vue 3** - Composition API
- **TypeScript** - Static typing
- **Vite** - Ultra-fast build tool
- **Normalize.css** - CSS normalization

### Machine Learning

- **BootstrapVueNext** - UI Components
- **Bootstrap 5** - CSS Framework
- **Font Awesome** - Vector icons
- **CSS3** - Animations and effects

### State and Services

- **Pinia** - Modern state management
- **Axios** - HTTP client
- **Services Pattern** - Modular architecture

### Machine Learning

- **TensorFlow.js** - ML runtime (v4.1)
- **WebGL Backend** - GPU acceleration
- **YOLOv8** - Object detection model

## 🚀 Installation and Setup

### Prerequisites

- **Node.js** 20+
- **npm** or **yarn**
- Modern browser with WebGL support

### Installation

1. **Clone the project**

   ```bash
   git clone <your-repo>
   cd YOLOVue3TS
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add YOLOv8 model**

   Download a pre-converted model or convert your own:

   ```python
   # Conversion from Python
   from ultralytics import YOLO
   model = YOLO("yolov8n.pt")
   model.export(format="tfjs")
   ```

   Then place the model files in `public/model/` directory

4. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the application**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── ButtonHandler.vue
│   ├── HelloWorld.vue
│   └── Loader.vue
├── style/              # Stylesheets
│   ├── App.css
│   ├── index.css
│   └── loader.css
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── detect.ts
│   ├── labels.json
│   ├── renderBox.ts
│   └── webcam.ts
├── assets/             # Static assets
│   └── vue.svg
├── App.vue             # Main component
├── main.ts             # Application entry point
├── style.css           # Global styles
└── vite-env.d.ts       # Vite type definitions

public/
├── model/              # TensorFlow.js model files
│   ├── group1-shard1of4.bin
│   ├── group1-shard2of4.bin
│   ├── group1-shard3of4.bin
│   ├── group1-shard4of4.bin
│   ├── metadata.yaml
│   └── model.json
├── favicon.ico
└── vite.svg
```

## 🎯 Architecture

### Core Components

- **App.vue** - Main application component
- **ButtonHandler.vue** - UI controls and interactions
- **Loader.vue** - Loading states and animations
- **HelloWorld.vue** - Welcome component

### Utility Modules

- **detect.ts** - YOLO detection logic
- **renderBox.ts** - Bounding box rendering
- **webcam.ts** - Camera stream management
- **labels.json** - COCO dataset class labels

### TypeScript Types

Complete type safety with interfaces for:

- Detection results and bounding boxes
- Model configurations and parameters
- Media elements and canvas operations

## 🔧 Configuration

### Available Models

- **yolov8n** - Nano (~6MB) - Fastest
- **yolov8s** - Small (~22MB)
- **yolov8m** - Medium (~52MB)
- **yolov8l** - Large (~87MB)
- **yolov8x** - Extra Large (~136MB)

### Detection Parameters

```typescript
// Configuration can be adjusted in utils/detect.ts
const DETECTION_CONFIG = {
  CONFIDENCE_THRESHOLD: 0.25,
  IOU_THRESHOLD: 0.45,
  MAX_DETECTIONS: 300,
};
```

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
vue-tsc -b
```

## 🌐 Supported Browsers

- ✅ **Chrome 80+**
- ✅ **Firefox 78+**
- ✅ **Safari 14+**
- ✅ **Edge 80+**

## 🚨 Troubleshooting

### Model Won't Load

- Verify model files are in `public/model/` directory
- Check browser console for CORS errors
- Ensure all model files (model.json and .bin files) are present
- Verify model.json structure is correct

### Webcam Not Working

- Grant camera permissions in browser
- Use HTTPS in production (required for camera access)
- Check that no other application is using the camera
- Verify browser supports WebRTC

### Slow Performance

- Enable hardware acceleration in browser settings
- Close unnecessary browser tabs
- Use a smaller model (yolov8n for fastest performance)
- Ensure WebGL is enabled and supported

### TypeScript Errors

- Run `vue-tsc -b` to check for type errors
- Verify all dependencies are properly installed
- Check that TypeScript configuration is correct

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [Ultralytics](https://github.com/ultralytics/ultralytics) for YOLOv8
- [TensorFlow.js](https://www.tensorflow.org/js) for ML runtime
- [Vue.js](https://vuejs.org) for the reactive framework
- [Vite](https://vitejs.dev) for the build tool
