# Mídia do site

Coloque aqui as fotos e vídeos **reais** da loja e registre cada arquivo em `src/data/media.ts`.

| Pasta | O que colocar | Onde aparece |
|---|---|---|
| `hero/` | vídeo curto da bancada/loja (mp4) + capa (jpg) ou uma foto | Topo da home (`heroMedia`) |
| `antes-depois/` | fotos de antes/depois ou vídeos curtos de reparos | Home > "Veja o resultado do nosso trabalho" (`beforeAfterCards`) |
| `loja/` | fachada, interior, equipe, vídeos da loja e da bancada | Home > "Conheça a Império" (`storeVideos`) |
| `servicos/<serviço>/` | fotos/vídeos de cada tipo de reparo | Páginas de serviço (`serviceMedia`) |
| `marcas/<marca>/` | fotos/vídeos de aparelhos da marca | Páginas de marca (`brandMedia`) |
| `cards/servicos/`, `cards/marcas/` | recortes com fundo transparente (WebP) dos cards | Cards de Serviços e Marcas atendidas e topo das páginas internas (campo `image` em `services.ts` / `brands.ts`) |

Dicas:
- Fotos: JPG ou WebP, até ~1600 px no lado maior, de preferência em pé (4:5) ou quadradas.
- Vídeos: MP4 (H.264), 10 a 30 segundos, até ~8 MB, sem depender do áudio. Sempre com uma imagem de capa.
- Nomes de arquivo sem espaço nem acento: `troca-tela-iphone-11.jpg`.
