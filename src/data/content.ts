/**
 * Conteúdo de texto da home que não é dado cadastral.
 * Frases curtas. Não escrever promessas não confirmadas
 * (garantia, prazo, diagnóstico gratuito, anos de experiência etc.).
 */
import type { FaqItem } from './services';

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
export const reviews: Review[] = [
  {
    author: 'Katiane Hoffmann',
    rating: 5,
    date: '5 anos atrás',
    text: 'Super recomendo a loja, o atendimento é nota 1000, super atenciosos! Além da variações de produtos que são de ótimas qualidades! Sempre que preciso de alguma coisa, sei que posso contar com eles.',
  },
  {
    author: 'Mundo Da Moda',
    rating: 5,
    date: 'um ano atrás',
    text: 'Otimo atendimento, super recomendo!!! Assitencia maravilhosa....',
  },
  {
    author: 'Caroline Fidencio',
    rating: 5,
    date: '4 anos atrás',
    text: 'Excelente, assistência técnica e acessórios!',
  },
];

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
