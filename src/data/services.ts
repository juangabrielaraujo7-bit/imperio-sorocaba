/**
 * Serviços da Império Eletrônicos.
 *
 * Cada serviço com `page` gera a página /<slug> automaticamente
 * (src/pages/[slug].astro). "Outros defeitos" não tem página: o card
 * leva direto ao WhatsApp.
 *
 * REGRA: não escrever promessas não confirmadas pela loja
 * (garantia, prazo, "mesmo dia", diagnóstico gratuito, peças premium).
 */

export type ServiceArt = 'screen' | 'battery' | 'charging' | 'backcover' | 'board' | 'other';

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServicePage {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Uma frase. */
  intro: string;
  signsLabel: string;
  signs: string[];
  faqs: FaqItem[];
}

export interface CardImage {
  /** Recorte com fundo transparente (public/media/cards/) */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Service {
  /** Chave interna (mídia, links) */
  key: string;
  /** URL da página: /<slug> */
  slug: string;
  title: string;
  /** Frase muito curta para o card */
  short: string;
  art: ServiceArt;
  /** Foto do card. Sem foto, usa a ilustração . */
  image?: CardImage;
  whatsappMessage: string;
  page?: ServicePage;
}

const budgetFaq = (what: string): FaqItem => ({
  q: `Quanto custa ${what}?`,
  a: 'O valor depende da marca, do modelo e do tipo de dano. Mande essas informações pelo WhatsApp para receber o orçamento.',
});

const timeFaq: FaqItem = {
  q: 'Quanto tempo leva?',
  a: 'O prazo depende do modelo e da peça. Ele é informado junto com o orçamento.',
};

const brandsFaq: FaqItem = {
  q: 'Quais marcas vocês atendem?',
  a: 'iPhone, Samsung, Motorola, Xiaomi e outras marcas. Na dúvida sobre o seu modelo, chame no WhatsApp.',
};

export const services: Service[] = [
  {
    key: 'troca-de-tela',
    slug: 'troca-de-tela-sorocaba',
    title: 'Troca de tela',
    short: 'Vidro trincado, manchas ou toque sem resposta.',
    art: 'screen',
    image: { src: '/media/cards/servicos/troca-de-tela.webp', alt: 'Celular com a tela trincada', width: 442, height: 560 },
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de tela.',
    page: {
      metaTitle: 'Troca de Tela de Celular em Sorocaba | Império Eletrônicos',
      metaDescription:
        'Troca de tela de celular em Sorocaba: vidro trincado, manchas, listras ou toque sem resposta. Loja física na Vila Barcelona. Orçamento pelo WhatsApp.',
      h1: 'Troca de tela de celular em Sorocaba',
      intro: 'Tela trincada, com manchas, listras ou sem toque? Fale com a Império Eletrônicos e solicite seu orçamento.',
      signsLabel: 'Sinais de que a tela precisa de troca',
      signs: ['Vidro trincado', 'Tela apagada', 'Manchas na imagem', 'Toque sem resposta', 'Linhas na imagem'],
      faqs: [
        budgetFaq('a troca de tela'),
        timeFaq,
        {
          q: 'Vou perder meus dados?',
          a: 'A troca de tela normalmente não mexe na memória do aparelho. Mesmo assim, mantenha um backup atualizado.',
        },
        brandsFaq,
      ],
    },
  },
  {
    key: 'troca-de-bateria',
    slug: 'troca-de-bateria-sorocaba',
    title: 'Troca de bateria',
    short: 'Bateria que dura pouco, desliga sozinha ou estufou.',
    art: 'battery',
    image: { src: '/media/cards/servicos/troca-de-bateria.webp', alt: 'Bateria sendo trocada em um celular aberto', width: 560, height: 361 },
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de bateria.',
    page: {
      metaTitle: 'Troca de Bateria de Celular em Sorocaba | Império Eletrônicos',
      metaDescription:
        'Troca de bateria de celular em Sorocaba: bateria viciada, que desliga sozinha ou estufada. Loja física na Vila Barcelona. Orçamento pelo WhatsApp.',
      h1: 'Troca de bateria de celular em Sorocaba',
      intro: 'Celular descarregando rápido ou desligando com carga? Fale com a Império Eletrônicos e solicite seu orçamento.',
      signsLabel: 'Sinais de que a bateria precisa de troca',
      signs: ['Dura bem menos que antes', 'Desliga com carga sobrando', 'Esquenta ao carregar', 'Traseira ou tela estufada'],
      faqs: [
        budgetFaq('a troca de bateria'),
        timeFaq,
        {
          q: 'Bateria estufada é perigosa?',
          a: 'Ela pode pressionar a tela e outras peças. Se notar o aparelho estufando, evite carregar e traga para avaliação.',
        },
        brandsFaq,
      ],
    },
  },
  {
    key: 'conector-de-carga',
    slug: 'conector-de-carga-sorocaba',
    title: 'Conector de carga',
    short: 'Não carrega ou só carrega com o cabo torto.',
    art: 'charging',
    image: { src: '/media/cards/servicos/conector-de-carga.webp', alt: 'Cabo de carga sendo conectado ao celular', width: 392, height: 560 },
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para o conector de carga.',
    page: {
      metaTitle: 'Conector de Carga de Celular em Sorocaba | Império Eletrônicos',
      metaDescription:
        'Celular não carrega ou o cabo fica solto? Troca de conector de carga em Sorocaba, na Vila Barcelona. Orçamento pelo WhatsApp.',
      h1: 'Conector de carga de celular em Sorocaba',
      intro: 'Celular que não carrega ou só carrega mexendo no cabo? Fale com a Império Eletrônicos e solicite seu orçamento.',
      signsLabel: 'Sinais de problema no conector',
      signs: ['Só carrega mexendo no cabo', 'Não reconhece o carregador', 'Carrega muito devagar', 'Entrada suja ou danificada'],
      faqs: [
        budgetFaq('a troca do conector'),
        timeFaq,
        {
          q: 'E se o problema não for o conector?',
          a: 'Outras peças também podem impedir a carga. Conte pelo WhatsApp o que acontece e traga o aparelho para avaliação.',
        },
        brandsFaq,
      ],
    },
  },
  {
    key: 'tampa-traseira',
    slug: 'troca-de-tampa-traseira-sorocaba',
    title: 'Tampa traseira',
    short: 'Traseira trincada, quebrada ou solta.',
    art: 'backcover',
    image: { src: '/media/cards/servicos/troca-de-tampa-traseira.webp', alt: 'Celular com a tampa traseira trincada ao lado de outro com a tampa nova', width: 331, height: 371 },
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para troca de tampa traseira.',
    page: {
      metaTitle: 'Troca de Tampa Traseira de Celular em Sorocaba | Império Eletrônicos',
      metaDescription:
        'Tampa traseira trincada, quebrada ou solta? Troca de tampa traseira de celular em Sorocaba, na Vila Barcelona. Orçamento pelo WhatsApp.',
      h1: 'Troca de tampa traseira em Sorocaba',
      intro: 'Caiu e trincou a parte de trás do celular? Fale com a Império Eletrônicos e solicite seu orçamento.',
      signsLabel: 'Sinais de que a tampa precisa de troca',
      signs: ['Vidro traseiro trincado', 'Tampa solta na lateral', 'Arranhão ou corte profundo', 'Lente da câmera quebrada'],
      faqs: [
        budgetFaq('a troca da tampa traseira'),
        timeFaq,
        {
          q: 'Preciso trocar se o celular ainda funciona?',
          a: 'Não é obrigatório, mas a traseira trincada deixa o aparelho mais exposto a poeira e umidade.',
        },
        brandsFaq,
      ],
    },
  },
  {
    key: 'reparo-em-placa',
    slug: 'reparo-em-placa-sorocaba',
    title: 'Reparo em placa',
    short: 'Não liga, reinicia sozinho ou molhou.',
    art: 'board',
    image: { src: '/media/cards/servicos/reparo-em-placa.webp', alt: 'Celular aberto mostrando a placa e os componentes internos', width: 444, height: 560 },
    whatsappMessage: 'Olá! Vim pelo site e gostaria de um orçamento para reparo em placa.',
    page: {
      metaTitle: 'Reparo em Placa de Celular em Sorocaba | Império Eletrônicos',
      metaDescription:
        'Celular que não liga, reinicia sozinho ou molhou? Reparo em placa em Sorocaba, na Vila Barcelona. Fale com a Império Eletrônicos pelo WhatsApp.',
      h1: 'Reparo em placa de celular em Sorocaba',
      intro: 'Aparelho que não liga, reinicia ou molhou? Fale com a Império Eletrônicos e solicite uma avaliação.',
      signsLabel: 'Sinais de defeito na placa',
      signs: ['Não liga nem carregando', 'Reinicia sozinho', 'Esquenta sem uso', 'Caiu ou teve contato com água'],
      faqs: [
        budgetFaq('o reparo em placa'),
        {
          q: 'Todo defeito em placa tem conserto?',
          a: 'Depende do dano. O aparelho precisa ser avaliado para saber se há reparo.',
        },
        {
          q: 'Celular que molhou tem conserto?',
          a: 'Depende do caso. Desligue o aparelho, não tente carregar e traga para avaliação o quanto antes.',
        },
        brandsFaq,
      ],
    },
  },
  {
    key: 'outros-defeitos',
    slug: 'outros-defeitos',
    title: 'Outros defeitos',
    short: 'Alto-falante, microfone, botões e outros.',
    art: 'other',
    image: { src: '/media/cards/servicos/outros-defeitos.webp', alt: 'Celulares abertos com ferramentas de reparo', width: 551, height: 453 },
    whatsappMessage: 'Olá! Vim pelo site e meu aparelho tem outro defeito. Gostaria de um orçamento.',
  },
];

export const servicesWithPage = services.filter(
  (s): s is Service & { page: ServicePage } => Boolean(s.page),
);

export const getService = (key: string) => services.find((s) => s.key === key);
