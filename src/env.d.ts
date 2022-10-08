/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly STORYBLOK_ENV: string;
  readonly STORYBLOK_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
