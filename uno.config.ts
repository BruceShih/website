// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWebFonts,
  presetUno
} from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Poppins',
        mono: ['Space Mono', 'Space Mono:400,700']
      }
    }),
    presetDaisy({
      base: true,
      utils: true,
      themes: ['light', 'dark']
    })
  ]
})
