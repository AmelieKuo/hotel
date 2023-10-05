import { defineConfig, presetUno, presetAttributify } from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetAttributify()],
  theme: {
    breakpoints: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
});
