/**
 * Fonte única dos dados da empresa.
 *
 * Telefone, endereço, horários, links e avaliações vivem SOMENTE aqui.
 * Componentes, SEO, JSON-LD e sitemap leem deste arquivo.
 * Se algo mudar, altere apenas este arquivo.
 */

export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface DayHours {
  key: DayKey;
  /** Nome exibido no site */
  label: string;
  /** Nome schema.org (inglês) usado no JSON-LD */
  schemaDay: string;
  /** null = fechado. Formato 24h "HH:MM". */
  opens: string | null;
  closes: string | null;
}

export const business = {
  name: 'Império Eletrônicos Sorocaba',
  shortName: 'Império Eletrônicos',

  /**
   * URL pública do site. Ainda não há domínio definido:
   * troque aqui quando o domínio for registrado (afeta canonical, sitemap,
   * Open Graph, robots.txt e JSON-LD).
   */
  siteUrl: 'https://www.imperioeletronicossorocaba.com.br',

  phone: {
    display: '(15) 99615-5767',
    /** E.164 sem o "+" */
    e164: '5515996155767',
  },

  whatsapp: {
    number: '5515996155767',
    messages: {
      home: 'Olá! Encontrei a Império Eletrônicos pelo site e gostaria de falar sobre uma assistência para meu celular.',
      location: 'Olá! Vi o endereço da Império Eletrônicos no site e gostaria de tirar uma dúvida antes de ir até a loja.',
      store: 'Olá! Vi no site que a Império Eletrônicos também tem acessórios. Gostaria de saber o que está disponível.',
      reviews: 'Olá! Vi as avaliações da Império Eletrônicos e gostaria de falar sobre uma assistência para meu celular.',
    },
  },

  address: {
    street: 'R. Nicarágua, 156',
    complement: 'Box 5',
    neighborhood: 'Vila Barcelona',
    city: 'Sorocaba',
    state: 'SP',
    zip: '18025-730',
    country: 'BR',
  },

  geo: {
    latitude: -23.5185916,
    longitude: -47.4391035,
  },

  instagram: {
    handle: '@imperioeletronicossorocaba',
    url: 'https://www.instagram.com/imperioeletronicossorocaba',
  },

  /** Fuso usado para calcular "Aberto agora / Fechado". */
  timezone: 'America/Sao_Paulo',

  hours: [
    { key: 'mon', label: 'Segunda-feira', schemaDay: 'Monday', opens: '10:00', closes: '19:00' },
    { key: 'tue', label: 'Terça-feira', schemaDay: 'Tuesday', opens: '10:00', closes: '19:00' },
    { key: 'wed', label: 'Quarta-feira', schemaDay: 'Wednesday', opens: '10:00', closes: '19:00' },
    { key: 'thu', label: 'Quinta-feira', schemaDay: 'Thursday', opens: '10:00', closes: '19:00' },
    { key: 'fri', label: 'Sexta-feira', schemaDay: 'Friday', opens: '10:00', closes: '19:00' },
    { key: 'sat', label: 'Sábado', schemaDay: 'Saturday', opens: null, closes: null },
    { key: 'sun', label: 'Domingo', schemaDay: 'Sunday', opens: null, closes: null },
  ] as readonly DayHours[],

  /** Resumo dos horários em texto corrido (mantenha coerente com `hours`). */
  hoursSummary: [
    { days: 'Segunda a sexta', time: '10h às 19h' },
    { days: 'Sábado e domingo', time: 'Fechado' },
  ],

  maps: {
    /** Link do Perfil da Empresa no Google (abre o perfil com avaliações). */
    profileUrl: 'https://maps.app.goo.gl/mywmYnCeW4EC3Jdp7',
    /** Rota até a loja no Google Maps. */
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Imp%C3%A9rio+Eletr%C3%B4nicos+Sorocaba%2C+R.+Nicar%C3%A1gua%2C+156+-+Vila+Barcelona%2C+Sorocaba+-+SP%2C+18025-730',
    /** Mapa incorporado (iframe). */
    embedUrl:
      'https://maps.google.com/maps?q=-23.5185916,-47.4391035&z=17&hl=pt-BR&output=embed',
  },

  reviews: {
    /** Nota real do Google. Atualize junto com o número de avaliações. */
    rating: 5.0,
    count: 21,
    /**
     * Link "Ver avaliações no Google". Hoje aponta para o perfil no Maps.
     * Quando tiver o link direto da aba de avaliações, troque aqui.
     */
    url: 'https://maps.app.goo.gl/mywmYnCeW4EC3Jdp7',
  },
} as const;

export type Business = typeof business;
