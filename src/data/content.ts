/**
 * Conteúdo de texto da home que não é dado cadastral.
 * Frases curtas. Não escrever promessas não confirmadas
 * (garantia, prazo, diagnóstico gratuito, anos de experiência etc.).
 */
import type { FaqItem } from './services';

/* Como funciona ----------------------------------------------------- */
export const steps = [
  { title: 'Fale com a gente', text: 'Pelo WhatsApp ou pelo orçamento rápido.' },
  { title: 'Conte o problema', text: 'Marca, modelo e o que aconteceu.' },
  { title: 'Receba o orçamento', text: 'Direto no seu WhatsApp.' },
  { title: 'Leve o aparelho até a loja', text: 'Vila Barcelona, Sorocaba.' },
];

/* Avaliações -------------------------------------------------------- */
export interface Review {
  /** Nome como aparece no Google */
  author: string;
  /** Texto real copiado do Google */
  text: string;
  /** 1 a 5 */
  rating: number;
  /** Ex.: "há 2 meses" */
  date?: string;
}

/** Até 3 avaliações REAIS copiadas do Perfil da Empresa no Google. */
export const reviews: Review[] = [];

/* Sobre --------------------------------------------------------------- */
export const about = {
  title: 'Império Eletrônicos Sorocaba',
  lines: ['Loja física na Vila Barcelona.', 'Assistência técnica e eletrônicos em Sorocaba.'],
};

/* FAQ da home --------------------------------------------------------- */
export const homeFaqs: FaqItem[] = [
  {
    q: 'Como peço um orçamento?',
    a: 'Chame no WhatsApp ou use o orçamento rápido do site com a marca, o modelo e o defeito.',
  },
  {
    q: 'Quais marcas vocês atendem?',
    a: 'iPhone, Samsung, Motorola, Xiaomi e outras marcas.',
  },
  {
    q: 'Quanto tempo leva o conserto?',
    a: 'Depende do aparelho e do defeito. O prazo é informado junto com o orçamento.',
  },
  {
    q: 'Preciso levar o aparelho até a loja?',
    a: 'Para o reparo, sim. O orçamento pode ser pedido antes, pelo WhatsApp.',
  },
  {
    q: 'Vou perder meus dados?',
    a: 'Depende do reparo. Por segurança, mantenha um backup atualizado antes de levar o aparelho.',
  },
];
