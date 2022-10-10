/// <reference types="astro/client" />

type AstroMetaEnv = import('astro/import-meta').ImportMetaEnv;

interface ImportMetaEnv {
  readonly STORYBLOK_ENV: string;
  readonly STORYBLOK_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv & AstroMetaEnv;
}
