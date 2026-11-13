# Pará no Contexto Nacional

Portal estático da FAPESPA para consulta dos indicadores, tabelas, planilhas e mapas da publicação **Pará no Contexto Nacional (PCN)**.

## Executar localmente

Não há etapa de compilação. Sirva a raiz por HTTP para que páginas abertas em modal e demais caminhos relativos funcionem corretamente:

```powershell
npx serve .
```

Também é possível usar a extensão Live Server do VS Code. Abrir os arquivos diretamente com `file://` não é recomendado.

## Estrutura

- `index.html`: página inicial.
- `1-territorio.html` a `16-infraestrutura.html`: índices temáticos.
- `sumario.html`, `glossario.html` e `expediente.html`: conteúdo editorial.
- `project.html`: catálogo oficial de mapas.
- `tabelas/`: tabelas HTML publicadas.
- `planilhas/`: fontes XLSX e pacote completo para download.
- `mapas/` e `icons/`: mapas e miniaturas.
- `assets/vendor/`: Bootstrap 5.3.1 e Bootstrap Icons usados pelo portal.
- `js/main.js`: layout e comportamento comum das páginas internas.
- `assets/js/tabelas.js`: responsividade e semântica das tabelas.
- `drafts/`: versões históricas excluídas da publicação.
- `scripts/`: modernização repetível e validação local.

## Atualizar o conteúdo

1. Substitua ou acrescente a planilha em `planilhas/`.
2. Exporte a tabela correspondente para `tabelas/` em UTF-8.
3. Atualize o link na página temática correspondente.
4. Execute a padronização e depois a validação:

```powershell
node scripts/modernize-site.mjs
node scripts/validate-site.mjs
```

O modernizador é idempotente para tabelas já processadas. O validador verifica referências locais quebradas e IDs duplicados, ignorando apenas a pasta `drafts/`.

## Publicação

Publique os arquivos preservando a estrutura de diretórios. O pacote `planilhas/planilhasPCN2024.rar` é uma exceção permitida no `.gitignore` e deve ser incluído no deploy. Demais arquivos RAR locais são tratados como artefatos de trabalho.

Antes de publicar:

```powershell
node scripts/validate-site.mjs
```

Faça também uma inspeção visual da página inicial, de uma página temática, do catálogo de mapas e de pelo menos uma tabela em viewport móvel e desktop.

## Dependências

O funcionamento principal não depende de jQuery. Bootstrap e Bootstrap Icons são servidos localmente. As fontes Google permanecem externas e possuem fallback para fontes do sistema.