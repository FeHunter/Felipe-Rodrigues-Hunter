# CaptureFlow — case study

## Resumo executivo

CaptureFlow é um aplicativo Android-first para capturar links, textos e imagens, organizar referências em uma biblioteca local e transformar itens em ações por meio de anotações e subtarefas. Este case documenta o produto, as decisões técnicas, a evolução e as limitações verificadas no repositório em 30/10/2026.

## Problema e proposta

Conteúdo útil costuma ficar fragmentado entre navegadores, mensagens e screenshots. O produto centraliza essas referências e preserva contexto para que possam ser recuperadas e trabalhadas depois.

## Funcionalidades

- Recebimento de URLs, textos e imagens via Android Sharesheet.
- Importação por Photo Picker e OCR local via Google ML Kit.
- Extração de metadata de páginas por requisições HTTP(S).
- Biblioteca com cards, busca, filtros e categorias.
- Detalhe fullscreen, link original e anotações persistentes em overlay.
- Subtarefas persistentes vinculadas a captureId, com conclusão/restauração.
- Monitoramento opcional de screenshots, best-effort e condicionado a permissões/restrições Android.

## Stack e arquitetura

Kotlin, Android SDK, Jetpack Compose/Material 3, ViewModel, Coroutines/Flow/StateFlow, Room/SQLite, Android Sharesheet, Photo Picker, MediaStore, Google ML Kit, Gradle Kotlin DSL.

Arquitetura Feature-first + MVVM + Clean Architecture pragmática. Domain não depende de Android, Compose, Room ou Data. ViewModels não acessam DAOs/entidades Room diretamente. UseCases concentram regras identificáveis; Repositories e Mappers isolam persistência. AppContainer manual funciona como composition root. Não há Hilt/Koin nem módulos Gradle separados por feature nesta fase.

Features: captures, imageimport, categories, search, fullscreen, dashboard e settings.

## Decisões relevantes

| Decisão | Motivação | Trade-off |
|---|---|---|
| Android nativo/Kotlin | Acesso direto às APIs de compartilhamento, armazenamento, notificações e OCR | Código e manutenção específicos de Android |
| Room/local-first | Persistência previsível e offline no dispositivo | Sem sincronização multi-dispositivo |
| OCR on-device | Privacidade e independência de serviço remoto | Precisão e suporte dependem do conteúdo/dispositivo |
| Feature-first + MVVM | Organização por capacidade e separação de responsabilidades | Exige disciplina para manter limites entre features |
| AppContainer manual | Simplicidade adequada ao tamanho atual | Composição e wiring são responsabilidade explícita do app |

## Evolução

1. Fundação Android nativa e integração com fluxos de captura.
2. Compartilhamento, importação, metadata e OCR.
3. Biblioteca, busca, filtros, categorias e fullscreen.
4. Anotações, tags, subtarefas e dashboard.
5. Consolidação arquitetural, UseCases, repositories, AppContainer, testes e documentação.
6. Ícones de launcher e validação de build no CI.

O histórico da primeira fase registra 44 pull requests mescladas. O intervalo de calendário estimado foi de aproximadamente 29h26 entre o primeiro registro e o CI final, mas isso não representa horas efetivamente trabalhadas.

## Qualidade e limites

- Testes unitários adicionados para CaptureFactory, CaptureMapper, ManageCategoriesUseCase e FilterCapturesUseCase.
- Workflow de CI executou os testes configurados e assembleDebug com sucesso (run 41050716565).
- Build green não comprova runtime QA completo.
- Ainda é necessária regressão manual em dispositivos, validação de screenshot monitoring em aparelhos reais, validação de permissões/restrições, versão assinada e revisão de requisitos Play Store/foreground service specialUse.
- O MVP não implementa conta, analytics, sincronização em nuvem nem upload automático.

## Próximos passos

- Regressão manual em compartilhamento, importação, OCR, persistência, fullscreen, notas, subtarefas e categorias.
- Testes em dispositivos reais para screenshot detection/notificações.
- Ampliar testes automatizados e verificar limites arquiteturais.
- Preparar release assinada e distribuição interna.
- Rever política Google Play para foreground service specialUse antes de publicação.

## Links

- Repositório: https://github.com/FeHunter/captureflow
- Pull requests: https://github.com/FeHunter/captureflow/pulls?q=is%3Apr+is%3Amerged
- Actions: https://github.com/FeHunter/captureflow/actions
