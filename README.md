# Império Eletrônicos Sorocaba — site

Site da **Império Eletrônicos Sorocaba** (assistência técnica de celular, R. Nicarágua, 156 - Box 5, Vila Barcelona, Sorocaba - SP).

Astro + TypeScript, CSS puro com variáveis, JS mínimo e nenhuma biblioteca de UI.

## Rodar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # checagem de tipos + build estático em dist/
npm run preview    # serve o build
```

Node 22.12+. Deploy na Vercel (`vercel.json` com URLs limpas, sem `.html`).

## Páginas

| URL | Origem |
|---|---|
| `/` | `src/pages/index.astro` |
| `/troca-de-tela-sorocaba` | `src/data/services.ts` |
| `/troca-de-bateria-sorocaba` | `src/data/services.ts` |
| `/conector-de-carga-sorocaba` | `src/data/services.ts` |
| `/troca-de-tampa-traseira-sorocaba` | `src/data/services.ts` |
| `/reparo-em-placa-sorocaba` | `src/data/services.ts` |
| `/assistencia-tecnica-iphone-sorocaba` | `src/data/brands.ts` |
| `/assistencia-tecnica-samsung-sorocaba` | `src/data/brands.ts` |
| `/assistencia-tecnica-motorola-sorocaba` | `src/data/brands.ts` |
| `/assistencia-tecnica-xiaomi-sorocaba` | `src/data/brands.ts` |
| `/404` | `src/pages/404.astro` |

As páginas de serviço e de marca são geradas por `src/pages/[slug].astro`. Para criar uma nova, adicione um item em `services.ts` (com `page`) ou em `brands.ts`. O sitemap se atualiza sozinho.

## Onde mudar cada coisa

| O quê | Arquivo |
|---|---|
| Nome, telefone, WhatsApp, endereço, horários, Instagram, Google, nota, **domínio do site** | `src/data/business.ts` |
| Serviços (cards, páginas, sinais, FAQ, mensagens do WhatsApp) | `src/data/services.ts` |
| Marcas (cards, páginas, FAQ, opções dos seletores) | `src/data/brands.ts` |
| Fotos e vídeos | `src/data/media.ts` + `public/media/` |
| Como funciona, avaliações em texto, "Sobre", FAQ da home | `src/data/content.ts` |
| Links do menu | `src/data/navigation.ts` |

Links de WhatsApp: `getWhatsAppUrl(mensagem)` em `src/lib/whatsapp.ts`.

## Fotos e vídeos

Guia completo em `public/media/LEIA-ME.md`. Resumo:

| Pasta | Onde aparece | Registro em `media.ts` |
|---|---|---|
| `public/media/hero/` | topo da home | `heroMedia` |
| `public/media/antes-depois/` | home > "Veja o resultado do nosso trabalho" | `beforeAfterCards` |
| `public/media/loja/` | home > "Conheça a Império" e bloco "Loja física" das páginas internas | `storeVideos`, `storePhoto` |
| `public/media/servicos/<serviço>/` | páginas de serviço > "Veja alguns serviços realizados" | `serviceMedia` |
| `public/media/marcas/<marca>/` | páginas de marca | `brandMedia` |

Fotos dos cards de **Serviços** e **Marcas atendidas** (e do topo das páginas internas): `public/media/cards/`, recortes WebP com fundo transparente vindos do projeto Império das Telas (`public/img/servicos` e `public/img/marcas`). Para trocar, substitua o arquivo mantendo o nome ou altere o campo `image` em `services.ts` / `brands.ts`.

Os arquivos originais enviados (fotos, vídeos e a logo do Google) ficam em `midia-original/` — fora de `public/`, para não irem ao ar. As versões otimizadas (WebP) é que são publicadas em `public/media/`.

Sem mídia: a home mostra molduras discretas "Em breve"; nas páginas internas a galeria fica oculta e aparece sozinha quando houver itens.

Componentes de mídia: `MediaCard` (foto, vídeo ou antes/depois), `VideoCard`, `BeforeAfter`, `MediaRail` (grade no desktop, rolagem lateral no celular) e `ServiceGallery`.

## Regras de conteúdo

- Frases curtas, listas e CTAs. Nada de parágrafos longos.
- Endereço, horário e telefone completos ficam só em **Localização** e no **rodapé**.
- Não publicar promessas sem confirmação da loja: garantia, prazo, "mesmo dia", diagnóstico gratuito, peças premium, anos de experiência, número de clientes.

## Imagem de compartilhamento e ícones

- Ícones: `node scripts/generate-icons.mjs`.
- Imagem OG (`public/og-image.png`, 1200×630): screenshot headless de `scripts/og.html`:

```bash
chrome --headless=new --hide-scrollbars --window-size=1200,630 --screenshot=public/og-image.png scripts/og.html
```
