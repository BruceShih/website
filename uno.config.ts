// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives
} from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        code: {
          color: '#8b5cf6'
        },
        'code::before, code::after': {
          content: 'unset'
        },
      }
    }),
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
  ],
  transformers: [
    transformerDirectives()
  ]
})
