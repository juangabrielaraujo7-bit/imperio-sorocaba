# Império Eletrônicos Sorocaba — site

Site institucional da **Império Eletrônicos Sorocaba** (assistência técnica de celular, R. Nicarágua, 156 - Box 5, Vila Barcelona, Sorocaba - SP).

Feito com **Astro + TypeScript**, CSS puro com variáveis, JS mínimo (só pequenos scripts inline) e nenhuma biblioteca de UI.

## Rodar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # checagem de tipos + build estático em dist/
npm run preview    # serve o build
```

Node 22.12+.

## Onde mudar cada coisa

| O quê | Arquivo |
|---|---|
| Nome, telefone, WhatsApp, endereço, horários, Instagram, links do Google, nota/avaliações, **domínio do site** | `src/data/business.ts` |
| Mensagens padrão do WhatsApp | `src/data/business.ts` → `whatsapp.messages` |
| Serviços (cards e futuras páginas) | `src/data/services.ts` |
| Diferenciais, antes/depois, acessórios, avaliações em texto, história/foto do "Sobre" | `src/data/content.ts` |
| Vídeo/foto da hero | `src/data/media.ts` |
| Links do menu | `src/data/navigation.ts` |

Telefone, endereço e horários **nunca** são escritos à mão nos componentes: tudo sai de `business.ts`.

Links do WhatsApp: `getWhatsAppUrl(mensagem)` em `src/lib/whatsapp.ts`.

## Estrutura

```
src/
  data/          business.ts, services.ts, content.ts, media.ts, navigation.ts
  lib/           whatsapp.ts, hours.ts (aberto/fechado no fuso de SP), seo.ts (JSON-LD)
  layouts/       BaseLayout.astro (SEO, OG, Twitter, JSON-LD, splash, header/footer)
  components/    Header, Hero, HeroDial, Services, Trust, WorksAndStore, BeforeAfter,
                 Reviews, About, Location, HoursDial, OpenStatus, FinalCta, Footer,
                 MobileWhatsAppBar, Splash, MinuteTrack, Logo, Icon
  pages/         index.astro, 404.astro, robots.txt.ts, servicos/[slug].astro
  assets/        brand/ (logo original), images/, videos/
public/          favicon.svg/.ico, apple-touch-icon, ícones, og-image.png, fontes, brand/logo.svg
scripts/         generate-icons.mjs, og.html (fonte da imagem de compartilhamento)
```

## Páginas

- `/` — home completa.
- `/404` — página não encontrada.
- `/servicos/<slug>/` — **gerada automaticamente** só para serviços com `page` preenchido em `services.ts`. Hoje nenhuma existe (não há conteúdo real ainda).
- `sitemap-index.xml` e `robots.txt` são gerados no build.

Para páginas como `/conserto-de-celular-sorocaba/` ou `/assistencia-tecnica-celular-sorocaba/`: crie quando houver conteúdo real, em `src/pages/<slug>.astro`, usando `BaseLayout` com `title` e `description` próprios.

## Fotos e vídeos (adicionar depois)

| Material | Pasta | Como ligar |
|---|---|---|
| Vídeo da assistência / bancada (hero) | `public/videos/` (.mp4/.webm) + pôster em `src/assets/images/hero/` | `src/data/media.ts` |
| Foto da loja / bancada / aparelho em reparo (hero) | `src/assets/images/hero/` | `src/data/media.ts` |
| Fachada, interior, equipe (seção Sobre) | `src/assets/images/loja/` | `about.photo` em `content.ts` |
| Antes/depois de serviços | `src/assets/images/trabalhos/` | `works` em `content.ts` |
| Produtos e acessórios | `src/assets/images/produtos/` | `productCategories` em `content.ts` |

Imagens em `src/assets/` são otimizadas pelo Astro (WebP, `srcset`, dimensões declaradas). Use fotos reais, nunca banco de imagens.

## O que ainda depende de conteúdo real

- Domínio definitivo (hoje provisório em `business.siteUrl`).
- Lista final de serviços (e textos para páginas individuais).
- Diferenciais reais (garantia, prazos etc. — só se forem verdade).
- Até 3 avaliações reais copiadas do Google.
- Link direto da aba de avaliações do Google (hoje aponta para o perfil no Maps).
- História da empresa e foto da equipe/loja.
- Linha de acessórios/produtos.
- Fotos e vídeos listados acima.
- Atualizar `reviews.rating` e `reviews.count` quando a nota mudar.

## Imagem de compartilhamento e ícones

- Ícones: `node scripts/generate-icons.mjs` (gera favicon.ico, apple-touch-icon e ícones do manifest a partir dos SVGs).
- Imagem OG (`public/og-image.png`, 1200×630): abra `scripts/og.html` em um Chrome headless com janela 1200×630 e salve o screenshot. Exemplo:

```bash
chrome --headless=new --hide-scrollbars --window-size=1200,630 --screenshot=public/og-image.png scripts/og.html
```
