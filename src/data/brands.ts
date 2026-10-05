/**
 * Marcas atendidas. Cada marca gera a página /<slug>
 * (src/pages/[slug].astro). "Outras marcas" leva ao WhatsApp.
 */
import type { FaqItem } from './services';

export type BrandArt = 'iphone' | 'samsung' | 'motorola' | 'xiaomi' | 'devices';

export interface Brand {
  key: string;
  slug: string;
  name: string;
  /** Nome usado nas frases ("seu iPhone", "seu Samsung") */
  device: string;
  art: BrandArt;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Uma frase. */
  intro: string;
  whatsappMessage: string;
  /** Chaves dos serviços mais procurados para esta marca */
  repairs: string[];
  faqs: FaqItem[];
}

/** Opções de "O que aconteceu com seu aparelho?" */
export const problemOptions = [
  'Tela quebrada',
  'Bateria fraca',
  'Não carrega',
  'Traseira quebrada',
  'Não liga',
  'Outro problema',
];

/** Opções de "Qual a marca do seu aparelho?" */
export const brandOptions = ['iPhone', 'Samsung', 'Motorola', 'Xiaomi', 'Outra marca'];

const allRepairs = ['troca-de-tela', 'troca-de-bateria', 'conector-de-carga', 'tampa-traseira', 'reparo-em-placa', 'outros-defeitos'];

const commonFaqs = (device: string): FaqItem[] => [
  {
    q: `Quanto custa o conserto do ${device}?`,
    a: 'Depende do modelo e do defeito. Mande o modelo e o problema pelo WhatsApp para receber o orçamento.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'O prazo depende do modelo e da peça. Ele é informado junto com o orçamento.',
  },
  {
    q: 'Onde levo o aparelho?',
    a: 'Na loja física da Vila Barcelona, em Sorocaba. Se preferir, chame no WhatsApp antes para combinar.',
  },
];

export const brands: Brand[] = [
  {
    key: 'iphone',
    slug: 'assistencia-tecnica-iphone-sorocaba',
    name: 'iPhone',
    device: 'iPhone',
    art: 'iphone',
    metaTitle: 'Assistência Técnica de iPhone em Sorocaba | Império Eletrônicos',
    metaDescription:
      'Assistência técnica de iPhone em Sorocaba: troca de tela, bateria, conector, tampa traseira e reparo em placa. Loja na Vila Barcelona. Orçamento pelo WhatsApp.',
    h1: 'Assistência técnica de iPhone em Sorocaba',
    intro: 'Tela, bateria, conector, traseira e placa. Conte o que aconteceu e receba seu orçamento.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu iPhone.',
    repairs: allRepairs,
    faqs: commonFaqs('iPhone'),
  },
  {
    key: 'samsung',
    slug: 'assistencia-tecnica-samsung-sorocaba',
    name: 'Samsung',
    device: 'Samsung',
    art: 'samsung',
    metaTitle: 'Assistência Técnica Samsung em Sorocaba | Império Eletrônicos',
    metaDescription:
      'Assistência técnica Samsung em Sorocaba: troca de tela, bateria, conector, tampa traseira e reparo em placa. Loja na Vila Barcelona. Orçamento pelo WhatsApp.',
    h1: 'Assistência técnica Samsung em Sorocaba',
    intro: 'Linha Galaxy: tela, bateria, conector, traseira e placa. Conte o que aconteceu e receba seu orçamento.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Samsung.',
    repairs: allRepairs,
    faqs: commonFaqs('Samsung'),
  },
  {
    key: 'motorola',
    slug: 'assistencia-tecnica-motorola-sorocaba',
    name: 'Motorola',
    device: 'Motorola',
    art: 'motorola',
    metaTitle: 'Assistência Técnica Motorola em Sorocaba | Império Eletrônicos',
    metaDescription:
      'Assistência técnica Motorola em Sorocaba: troca de tela, bateria, conector, tampa traseira e reparo em placa. Loja na Vila Barcelona. Orçamento pelo WhatsApp.',
    h1: 'Assistência técnica Motorola em Sorocaba',
    intro: 'Moto G, Moto E, Edge e outras linhas. Conte o que aconteceu e receba seu orçamento.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Motorola.',
    repairs: allRepairs,
    faqs: commonFaqs('Motorola'),
  },
  {
    key: 'xiaomi',
    slug: 'assistencia-tecnica-xiaomi-sorocaba',
    name: 'Xiaomi',
    device: 'Xiaomi',
    art: 'xiaomi',
    metaTitle: 'Assistência Técnica Xiaomi em Sorocaba | Império Eletrônicos',
    metaDescription:
      'Assistência técnica Xiaomi, Redmi e POCO em Sorocaba: troca de tela, bateria, conector, tampa traseira e reparo em placa. Orçamento pelo WhatsApp.',
    h1: 'Assistência técnica Xiaomi em Sorocaba',
    intro: 'Xiaomi, Redmi e POCO. Conte o que aconteceu e receba seu orçamento.',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para meu Xiaomi.',
    repairs: allRepairs,
    faqs: commonFaqs('Xiaomi'),
  },
];

export const otherBrand = {
  name: 'Outras marcas',
  art: 'devices' as BrandArt,
  whatsappMessage: 'Olá! Meu aparelho é de outra marca. Gostaria de um orçamento.',
};
