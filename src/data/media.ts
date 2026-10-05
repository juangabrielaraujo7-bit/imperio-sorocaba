/**
 * Biblioteca de mídia do site (fotos e vídeos reais).
 *
 * 1. Coloque o arquivo na pasta indicada em public/media/ (veja
 *    public/media/LEIA-ME.md).
 * 2. Adicione um item aqui, com caminho começando em /media/...
 *
 * Seções sem mídia se adaptam sozinhas: na home aparecem molduras
 * discretas "Em breve"; nas páginas internas a galeria fica oculta.
 * Use apenas fotos e vídeos reais da loja. Nada de banco de imagens.
 */

export type MediaItem =
  | {
      type: 'image';
      /** ex.: /media/loja/fachada.jpg */
      src: string;
      alt: string;
      caption?: string;
      /** Dimensões reais do arquivo (evitam salto de layout) */
      width?: number;
      height?: number;
    }
  | {
      type: 'video';
      /** ex.: /media/loja/bancada.mp4 (mp4 H.264, curto, sem áudio de preferência) */
      src: string;
      /** Imagem de capa: ex.: /media/loja/bancada.jpg */
      poster?: string;
      alt: string;
      caption?: string;
    }
  | {
      type: 'before-after';
      /** Mesma proporção nas duas fotos */
      before: string;
      after: string;
      alt: string;
      caption?: string;
      device?: string;
    };

/** Vídeo real: troca de tampa traseira em Samsung (Instagram da loja). */
const tampaTraseiraSamsung: MediaItem = {
  type: 'video',
  src: '/media/antes-depois/tampa-traseira-samsung.mp4',
  poster: '/media/antes-depois/tampa-traseira-samsung.jpg',
  alt: 'Samsung com a tampa traseira estilhaçada e o mesmo aparelho depois da troca',
  caption: 'Tampa traseira · Samsung',
};

/* ------------------------------------------------------------------ */
/* Hero da home: vídeo/foto da bancada ou da loja. null = composição    */
/* gráfica (mostrador + aparelho).                                      */
/* ------------------------------------------------------------------ */
export const heroMedia: MediaItem | null = null;

/* ------------------------------------------------------------------ */
/* Home > "Veja o resultado do nosso trabalho" (antes e depois).        */
/* Um card por categoria; cada card mostra o primeiro item da lista.    */
/* Pasta: public/media/antes-depois/                                    */
/* ------------------------------------------------------------------ */
export const beforeAfterCards: { label: string; items: MediaItem[] }[] = [
  { label: 'Troca de tela', items: [] },
  { label: 'Tampa traseira', items: [tampaTraseiraSamsung] },
  { label: 'Bateria', items: [] },
  { label: 'Outros reparos', items: [] },
];

/* ------------------------------------------------------------------ */
/* Home > "Conheça a Império": vídeos da loja, bancada e reparos.       */
/* Pasta: public/media/loja/                                            */
/* ------------------------------------------------------------------ */
export const storeVideos: { label: string; item: MediaItem | null }[] = [
  { label: 'A loja', item: null },
  { label: 'Na bancada', item: null },
  { label: 'Reparo', item: null },
];

/* ------------------------------------------------------------------ */
/* Bloco "Loja física" das páginas internas: foto da fachada.           */
/* Pasta: public/media/loja/                                            */
/* ------------------------------------------------------------------ */
export const storePhoto: MediaItem | null = null;

/* ------------------------------------------------------------------ */
/* Páginas de serviço > "Veja alguns serviços realizados".             */
/* Chave = key do serviço em services.ts.                               */
/* Pasta: public/media/servicos/<key>/                                  */
/* ------------------------------------------------------------------ */
export const serviceMedia: Record<string, MediaItem[]> = {
  'troca-de-tela': [],
  'troca-de-bateria': [],
  'conector-de-carga': [],
  'tampa-traseira': [tampaTraseiraSamsung],
  'reparo-em-placa': [],
};

/* ------------------------------------------------------------------ */
/* Páginas de marca > fotos/vídeos de aparelhos da marca.               */
/* Chave = key da marca em brands.ts.                                   */
/* Pasta: public/media/marcas/<key>/                                    */
/* ------------------------------------------------------------------ */
export const brandMedia: Record<string, MediaItem[]> = {
  iphone: [],
  samsung: [tampaTraseiraSamsung],
  motorola: [],
  xiaomi: [],
};
