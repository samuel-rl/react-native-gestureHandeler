<h1 align="center">Animated View 👋</h1>

<p align="center">
  <a aria-label="made with expo" href="https://github.com/expo" target="_blank">
    <img src="https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20">
  </a>
  <a href="https://github.com/samuel3105" aria-label="Follow Samuel3105 on Github" target="_blank">
    <img alt="Github: samuel3105" src="https://img.shields.io/github/followers/samuel3105.svg?label=Follow&style=for-the-badge&logo=github&logoColor=FFFFFF&labelColor=24292e&logoWidth=20&color=lightgray" target="_blank" />
  </a>
</p>

## Demo

<p align="center">

![demo](https://github.com/samuel3105/react-native-gestureHandeler/blob/master/assets/example.gif?raw=true)

</p>

## Download

```sh
# If you don't have installed expo:
npm install -g expo-cli

# Clone the project :
git clone https://github.com/samuel3105/react-native-gestureHandeler.git
cd ./react-native-gestureHandeler

#install packages and start
npm install
npm start
```


## Example

```tsx
import React from 'react';
import { Gesture } from './src/index';

export default function App() {
	return <Gesture width={100} borderRadius={5}></Gesture>;
}
```

## Docs

```ts
/**
 * The tint color of the view itself.
 *
 * @default green
 */
color?: string;

/**
 * Height of the view.
 *
 * @default 100
 */
height?: number;

/**
 * Width of the view.
 *
 * @default 100
 */
width?: number;

/**
 * borderRadius of the view.
 *
 * @default 50
 */
borderRadius?: number;

/**
 * X offset of the view.
 *
 * @default 0
 */
offsetX?: number;

/**
 * Y offset of the view.
 *
 * @default 0
 */
offsetY?: number;
```
