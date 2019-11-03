# Adaptive Scale
This small library can scale any size according to other size with multiple scale policies.

### Currently Supported Scale Policies
If policy is not specified then no scale is applied.

- **ExactFit** - Fill the container size. Aspect ratio not preserved. No Borders. Can't Crop.
- **NoBorder** - Fill the container size. Aspect ratio preserved. No Borders. Can Crop.
- **FullHeight** - Fill the container height. Aspect ratio preserved. Vertical Borders. Can Crop.
- **FullWidth** - Fill the container width. Aspect ratio preserved. Horizontal Borders. Can Crop.
- **ShowAll** - Fill the container width or height. Aspect ratio preserved. Vertical or Horizontal Borders. Can't Crop.

## Install

#### NPM:
```Bash
npm i adaptive-scale
```

#### CDN:
Browser version. 

Available as a global variable AS. 

Example: AS.POLICY, AS.Size, AS.getScaledRect

```HTML
<script src="https://cdn.jsdelivr.net/npm/adaptive-scale@1.0.0/_bundles/adaptive-scale.js"></script>
```

## Usage

```javascript
// TypeScript
// import {POLICY, Size, getScaledRect} from 'adaptive-scale';

// CommonJS
// import {POLICY, Size, getScaledRect} from 'adaptive-scale/lib';

// ES6
import {POLICY, Size, getScaledRect} from 'adaptive-scale/lib-esm';

let image = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
};

// original size
let originalWidth = image.width;
let originalHeight = image.height;

// scale options
let options = {
    // window, canvas or any other thing
    container: new Size(window.innerWidth, window.innerHeight),
    // some dependent size. image, figure etc.
    target: new Size(originalWidth, originalHeight),
    // policy is optional. default is null
    policy: POLICY.ShowAll, // null | ExactFit | NoBorder | FullHeight | FullWidth | ShowAll
};

// calculate new rectangle
let rect = getScaledRect(options);

// apply calculated rectangle
image.x = rect.x;
image.y = rect.y;
image.width = rect.width;
image.height = rect.height;
```

### Demo
For demo look at the examples directory.

or

[JSFiddle](https://jsfiddle.net/76fzpjmx/)

### !HAPPY SCALING!