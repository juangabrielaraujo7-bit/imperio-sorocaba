/**
 * Mídia da hero.
 *
 * Sem mídia, a hero usa a composição gráfica (mostrador + aparelho).
 * Para usar um vídeo ou foto real da loja/bancada:
 *
 * 1. Foto: coloque em src/assets/images/hero/ e importe aqui:
 *      import loja from '../assets/images/hero/bancada.jpg';
 *      export const heroMedia: HeroMedia = { type: 'image', image: loja, alt: '...' };
 *
 * 2. Vídeo: coloque o .mp4/.webm em public/videos/ (arquivos de vídeo
 *    são servidos sem processamento) e um pôster em src/assets/images/hero/:
 *      export const heroMedia: HeroMedia = {
 *        type: 'video', src: '/videos/bancada.mp4', poster: posterImg, alt: '...'
 *      };
 */
import type { ImageMetadata } from 'astro';

export type HeroMedia =
  | { type: 'image'; image: ImageMetadata; alt: string }
  | { type: 'video'; src: string; poster: ImageMetadata; alt: string };

export const heroMedia: HeroMedia | null = null;
