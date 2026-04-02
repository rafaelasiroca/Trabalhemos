# Trabalhemos

### **Autor:** Rafaela Siroca

Este projeto tem como principal objetivo divulgar serviços online, oferecendo visibilidade para trabalhadores que precisam promover seu trabalho. Trata-se de uma plataforma pronta para conectar profissionais a clientes em todo o Brasil.

O frontend da aplicação foi desenvolvido com HTML, CSS e JavaScript e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## 📚 Documentação do Projeto

Para entender as regras de negócio, o escopo e a arquitetura técnica da aplicação, consulte os documentos abaixo:

- [[📄 Product Requirements Document (PRD)](./docs/prd.md)](https://github.com/rafaelasiroca/Trabalhemos/commit/260515f243909ae7b9977ed7977764707ac8521b) - Visão geral e atores 
- [🛠️ Especificação Técnica (Tech Spec)](./docs/spec.md) - Diagrama de banco de dados (DER), dicionário de dados e rotas da API (JSON Server).

## 🎨 Design

- [🎨 Design System](docs/design-system.md) - Identidade visual
- [🖼️ Protótipo no Figma]([https://www.figma.com/file/a1VDbO1aNfZyulQPxT99OE/beleza-em-dia?node-id=3%3A80](https://stitch.withgoogle.com/projects/1321039296422867299)) - Telas interativas da aplicação.

## 🌐 Site em Produção - GitHub Pages

https://utfpr-gp.github.io/roubank-css/

## 💻 Tecnologias e Dependências

- **Framework CSS:** MaterializeCSS
- **JavaScript:**
  - **JQuery** - Para realizar animações e manipulação do DOM.
  - **JSON Server** - Para simular uma API REST.
RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos
   01 - Prototipa interfaces adaptáveis para no mínimo mobile e desktop, usando ferramentas de design (Figma, Quant UX, Sketch) ou IA (Stitch).
   02 - Aplica um Design System consistente (cores, tipografia, padrões de componentes) em toda a aplicação.
   03 - Implementa layout responsivo com CSS puro, usando Flexbox ou Gr   Layout.
   04 - Implementa layout responsivo com Framework CSS (Bootstrap, Materialize, Tailwind + DaisyUI) usando Flexbox ou Gr  do framework.
   05 - Utiliza componentes prontos de Framework CSS (card, button etc.) e componentes JavaScript do framework (modal, carousel).
   06 - Cria layout flu  o usando un ades relativas (vw, vh, %, em, rem) em vez de px.
   07 - Aplica tipografia responsiva (media queries mobile first) ou tipografia flu  a (clamp() + un ades relativas).
   08 - Aplica técnicas de responsiv ade de imagens usando CSS (object-fit, containers com un ades relativas).
   09 - Utiliza Sass (SCSS) aplicando variáveis, mixins e funções para modularizar o código.
   10 - Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo (srcset, picture ou Cloudinary).
RA2 - Realizar tratamento de formulários e aplicar val  ações customizadas no lado cliente
   11 - Utiliza elementos de seleção em formulários (checkbox, radio, select) para coleta de dados.
   12 - Implementa val ação HTML nativa (required, type, min/max, limites de caracteres) com mensagens de erro/sucesso no lado cliente.
   13 - Aplica expressões regulares (REGEX) para val ações customizadas (e-mail, telefone, datas etc.).
   14 - Implementa leitura e escrita no Web Storage (localStorage/sessionStorage) para persistir dados localmente.
RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web
   15 - Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
   16 - Organiza arquivos do projeto de forma modular, seguindo padrão de exemplo fornec o.
   17 - Utiliza boas práticas de versionamento no Git/GitHub (branch main ou branches específicos, uso de .gitignore).
   18 - Mantém um README.md padronizado conforme template da disciplina, com checklist preench o.
   19 - Configura linters e formatadores (ESLint, Prettier) para padronização e qual ade do código.
RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interativ ade de páginas web
   20 - Utiliza jQuery para manipulação do DOM e interativ ade (eventos, animações, manipulação de elementos).
   21 - Integra e configura um plugin jQuery relevante (ex.: jQuery Mask Plugin).
RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo obtenção e manipulação de dados dinamicamente
   22 - Realiza requisições assíncronas para uma API fake (JSON Server) para persistir dados de um formulário.
   23 - Realiza requisições assíncronas para uma API fake para exibir dados na página.
 ID 24 - Realiza requisiisições assíncronas para APIs públicas reais (ViaCEP, OpenWeather etc.), exibindo dados e tratando erros.


