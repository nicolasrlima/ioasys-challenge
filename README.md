# Desafio books frontend

Olá time da Ioasys, primeiramente gostaria de agradecer a oportunidade de participar do desafio, a Ioasys me parece uma empresa super bacana, o que me deixa ainda mais feliz de poder participar de um processo com vocês :)

Neste documento vou falar sobre, como rodar o projeto e pontuar algumas das minhas decisões sobre o projeto que julgo válidas.

## Introdução

Desenvolvendo este projeto foquei nos seguintes pontos que julgo cruciais para todo projeto:

- Ter um versionamento bem documentado, com commits claros e explicativos.
- Desenvolver um código legível, organizado e de fácil manutenção seguindo boas práticas e padrões de código limpo.
- Buscando ter uma UI responsiva e uma UX fluída, acessível para todos os dispositivos.
- Criar um projeto escalável, bem componentizado e com uma boa estrutura de arquivos.

## Principais ferramentas utilizadas

- React.js
- Typescript
- Styled components

## Arquitetura

- O projeto está divido em 2 partes, utilizando o code-splitting:
  - Parte autenticada, com as sessões internas de listagem de livros e detalhes de livros.
  - Parte não autenticada, com a sessão de login.
- Sobre arquitetura de pastas, o projeto segue uma estrutura básica, onde:
  - assets: arquivos estáticos, como imagens e ícones.
  - components: arquivos de componentes reutilizáveis.
  - contexts: todos os contextos de dados que serão utilizados pelos componentes.
  - hooks: arquivos de hooks que serão utilizados pelos componentes.
  - pages: páginas da aplicação.
  - routes: todas as rotas, separadas em autenticadas e não autenticadas
  - services: configurações de consumo da API.
  - utils: funções utilitárias e constantes compartilhadas.

## Rodando o projeto

### `yarn`

Para instalar as dependências do projeto.

### `yarn start`

Para rodar o projeto em modo de desenvolvimento.

### `yarn build`

Para fazer o build do projeto para produção.

## Decisões

### User Experience e User Interface

Desenvolvi o projeto aplicando o mobile first, como um padrão de design. Outro conceito aplicado no design foi o de design otimista, sempre buscando mostrar uma resposta ao usuário mais rápido possível, para isso utilizei o swr da Vercel que faz um cache das requisições e evita estados de carregamento ao transitar entre páginas recém carregadas, vale dizer que o swr esta configurado para sempre refazer a requisição para e atualizar a tela caso haja disparidade entre o cache e a resposta mais atualizada.

### Gerenciamento de tarefas

Para controle das tarefas a serem feitas, utilizei o Jira, criando Epics, tasks e bugs. Separei o projeto em 3 Epics:

- Create project
  - Criação do projeto com CRA e do repositório.
  - Configuração do eslint e do prettier.
- Login
  - Criação da página de Login
- Home
  - Criação da página de listagem de livros.
  - Criação do modal de detalhamento de livros.

## Conclusão

Novamente gostaria de agradecer a oportunidade! Espero que gostem do trabalho tanto quanto gostei de desenvolvê-lo :)

Good coding!
