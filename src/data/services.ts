/**
 * Serviços exibidos no site.
 *
 * IMPORTANTE: por enquanto há apenas categorias genéricas confirmadas.
 * Não adicione serviços específicos, prazos, garantias ou preços sem
 * confirmação da loja.
 *
 * Para criar a página individual de um serviço (/servicos/<slug>/):
 * preencha `page` com conteúdo real. Sem `page`, nenhuma página é gerada
 * e o card leva direto ao WhatsApp.
 */

export type ServiceIcon = 'phone' | 'wrench' | 'scan';

export interface ServicePage {
  /** <title> da página (sem o sufixo da marca) */
  title: string;
  /** Meta description individual */
  description: string;
  /** Título visível (H1) */
  heading: string;
  /** Parágrafos de conteúdo real sobre o serviço */
  body: string[];
}

export interface Service {
  slug: string;
  title: string;
  /** Uma frase curta e factual */
  summary: string;
  icon: ServiceIcon;
  /** Mensagem própria do WhatsApp para este serviço */
  whatsappMessage: string;
  /** Preencha quando houver conteúdo real para uma página própria */
  page?: ServicePage;
}

export const services: Service[] = [
  {
    slug: 'assistencia-tecnica-de-celulares',
    title: 'Assistência técnica de celulares',
    summary: 'Atendimento para o seu celular na loja da Vila Barcelona.',
    icon: 'phone',
    whatsappMessage:
      'Olá! Encontrei a Império Eletrônicos pelo site e gostaria de falar sobre assistência técnica para o meu celular.',
  },
  {
    slug: 'conserto-e-manutencao',
    title: 'Conserto e manutenção',
    summary: 'Conte o que aconteceu com o aparelho e combine o atendimento.',
    icon: 'wrench',
    whatsappMessage:
      'Olá! Encontrei a Império Eletrônicos pelo site e gostaria de falar sobre conserto e manutenção do meu celular.',
  },
  {
    slug: 'diagnostico-de-aparelhos',
    title: 'Diagnóstico de aparelhos',
    summary: 'Não sabe o que o aparelho tem? Comece pelo diagnóstico.',
    icon: 'scan',
    whatsappMessage:
      'Olá! Encontrei a Império Eletrônicos pelo site e gostaria de um diagnóstico do meu aparelho.',
  },
];

export const servicesWithPage = services.filter(
  (s): s is Service & { page: ServicePage } => Boolean(s.page),
);
