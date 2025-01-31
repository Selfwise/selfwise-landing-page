![ ](./public/MidiMama.png)

# selfwise-landing-page

myComponent is a web (Vue 3) component.

## Installation

You can integrate myComponent into your project in several ways:

### NPM Package (Recommended)

```bash
npm install https://github.com/Selfwise/selfwise-landing-page.git
```

Uninstall (or to update to a newer version)

```bash
npm uninstall myComponent
npm cache clean --force
npm install https://github.com/Selfwise/selfwise-landing-page.git
```

### Manual Download

You can also download the component directly from the GitHub repository and include it in your project.

## Usage

myComponent supports multiple integration patterns to fit different development needs:

### Modern Vue Application (Composition API)

```javascript
// In your Vue component
import { myComponent } from "myComponent";
import "myComponent/dist/style.css";

export default {
  components: {
    myComponent,
  },
};
```

### Vue Single File Component

```vue
<template>
  <myComponent />
</template>

<script setup>
import { myComponent } from "myComponent";
import "myComponent/dist/style.css";
</script>
```

### Direct Browser Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="dist/myComponent.umd.js"></script>
    <link rel="stylesheet" href="dist/style.css" />
  </head>
  <body>
    <div id="app">
      <show-midi></show-midi>
    </div>

    <script>
      const { createApp } = Vue;
      const app = createApp({});
      app.component("myComponent", myComponent);
      app.mount("#app");
    </script>
  </body>
</html>
```

## Development

If you'd like to contribute or customize it for your needs, here's how to set up the development environment:

```bash
# Clone the repository
git clone https://github.com/Selfwise/myComponent.git
cd myComponent

# Install dependencies
npm install

# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a Pull Request
