/**
 * Conteúdo que depende de material real da loja.
 *
 * Tudo aqui começa vazio ou com fatos verificáveis. Os componentes se
 * adaptam sozinhos: seção sem conteúdo exibe uma versão mínima e discreta.
 * Não invente depoimentos, números, garantias, prazos ou produtos.
 */
import type { ImageMetadata } from 'astro';
import { business } from './business';

/* ------------------------------------------------------------------ */
/* Diferenciais (seção de confiança)                                   */
/* ------------------------------------------------------------------ */

export interface Differential {
  title: string;
  text: string;
}

/**
 * Até 3 diferenciais. Hoje estão aqui apenas fatos já confirmados.
 * Substitua pelos diferenciais reais quando a loja definir
 * (ex.: garantia, prazo, laboratório — somente se forem verdade).
 */
export const differentials: Differential[] = [
  {
    title: 'Loja física',
    text: `${business.address.street}, ${business.address.complement}, ${business.address.neighborhood}.`,
  },
  {
    title: `${business.reviews.rating.toFixed(1).replace('.', ',')} no Google`,
    text: `Nota média em ${business.reviews.count} avaliações de clientes.`,
  },
  {
    title: 'Direto pelo WhatsApp',
    text: `Fale com a loja pelo ${business.phone.display}.`,
  },
];

/* ------------------------------------------------------------------ */
/* Trabalhos realizados / antes e depois                               */
/* ------------------------------------------------------------------ */

export interface WorkItem {
  /** Foto do aparelho antes do serviço (src/assets/images/trabalhos/) */
  before: ImageMetadata;
  /** Foto depois do serviço */
  after: ImageMetadata;
  /** Tipo de serviço realizado */
  service: string;
  /** Modelo do aparelho, ex.: "Galaxy A54" */
  device: string;
  /** Descrição curta e real */
  description?: string;
}

/**
 * Exemplo de como adicionar (depois de colocar as fotos na pasta):
 *
 * import antes1 from '../assets/images/trabalhos/aparelho-1-antes.jpg';
 * import depois1 from '../assets/images/trabalhos/aparelho-1-depois.jpg';
 * export const works: WorkItem[] = [
 *   { before: antes1, after: depois1, service: '...', device: '...', description: '...' },
 * ];
 */
export const works: WorkItem[] = [];

/* ------------------------------------------------------------------ */
/* Acessórios / loja                                                   */
/* ------------------------------------------------------------------ */

export interface ProductCategory {
  title: string;
  text?: string;
  image?: ImageMetadata;
}

/**
 * Categorias de produtos realmente vendidos na loja
 * (ex.: películas, capas, carregadores). Vazio até a confirmação.
 */
export const productCategories: ProductCategory[] = [];

/* ------------------------------------------------------------------ */
/* Avaliações                                                          */
/* ------------------------------------------------------------------ */

export interface Review {
  /** Nome como aparece no Google */
  author: string;
  /** Texto real copiado do Google */
  text: string;
  /** 1 a 5 */
  rating: number;
  /** Ex.: "há 2 meses" ou "março de 2026" */
  date?: string;
}

/** Até 3 avaliações reais, copiadas do Perfil da Empresa no Google. */
export const reviews: Review[] = [];

/* ------------------------------------------------------------------ */
/* Sobre                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  /**
   * Parágrafos com a história real da empresa. Vazio = a seção mostra
   * apenas os fatos objetivos (nome, endereço, horário).
   */
  story: [] as string[],
  /** Foto da equipe ou da loja (src/assets/images/loja/) */
  photo: undefined as ImageMetadata | undefined,
  photoAlt: 'Equipe e loja da Império Eletrônicos na Vila Barcelona, Sorocaba',
};
