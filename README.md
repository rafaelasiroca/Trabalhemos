# Trabalhemos

### **Autor:** Rafaela Siroca

Este projeto tem como principal objetivo divulgar serviços online, oferecendo visibilidade para trabalhadores que precisam promover seu trabalho. Trata-se de uma plataforma pronta para conectar profissionais a clientes em todo o Brasil.

O frontend da aplicação foi desenvolvido com HTML, CSS e JavaScript e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

---

## 📚 Documentação do Projeto

Para entender as regras de negócio, o escopo e a arquitetura técnica da aplicação, consulte os documentos abaixo:

- [[📄 Product Requirements Document (PRD)](./docs/prd.md)](https://github.com/rafaelasiroca/Trabalhemos/commit/260515f243909ae7b9977ed7977764707ac8521b) - Visão geral e atores
- [🛠️ Especificação Técnica (Tech Spec)](./docs/spec.md) - Diagrama de banco de dados (DER), dicionário de dados e rotas da API (JSON Server).

---

## 🎨 Design

- [🎨 Design System](docs/design-system.md) - Identidade visual
- [🖼️ Protótipo no Figma](https://stitch.withgoogle.com/projects/1321039296422867299) - Telas interativas da aplicação.

---

## 🌐 Site em Produção - GitHub Pages

[https://utfpr-gp.github.io/roubank-css/](https://github.com/rafaelasiroca/Trabalhemos.git)

---

## 💻 Tecnologias e Dependências

### 🎨 Framework CSS Escolhido: Bootstrap

O projeto utiliza o **Bootstrap** como Framework CSS principal para construção do layout e componentes visuais.

✅ **Justificativa comercial/visual:**  
O Bootstrap foi escolhido por ser um dos frameworks mais utilizados no mercado, oferecendo grande variedade de componentes prontos, design moderno e consistência visual. Além disso, sua documentação é extremamente completa, facilitando a manutenção do projeto e acelerando o desenvolvimento do sistema. Sua estrutura responsiva baseada em Grid permite adaptar a plataforma para dispositivos mobile e desktop, garantindo melhor experiência para usuários e clientes.

---

### 🌍 API Pública Escolhida: ViaCEP

A API pública escolhida para integração no sistema foi a **ViaCEP**, utilizada para consulta de endereço a partir do CEP.

🔗 API: https://viacep.com.br/

✅ **Justificativa comercial/funcional:**  
A ViaCEP foi escolhida por ser uma API gratuita, rápida e confiável, muito utilizada em sistemas reais no Brasil. Sua integração permite que o sistema preencha automaticamente dados como rua, bairro, cidade e estado, reduzindo erros no cadastro e melhorando a experiência do usuário. Isso torna o processo mais profissional e eficiente, especialmente para trabalhadores que precisam registrar informações corretas para oferecer seus serviços.

---

### ⚙️ Outras Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap**
- **jQuery** - Para animações e manipulação do DOM.
- **JSON Server** - Para simular uma API REST (API Fake).

---

## ✅ Checklist - Resultados de Aprendizagem (RA)

### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.

- [x] ID 01 - Prototipa interfaces adaptáveis para mobile e desktop usando ferramentas de design.
- [x] ID 02 - Aplica um Design System consistente.
- [x] ID 03 - Implementa layout responsivo com CSS puro usando Flexbox ou Grid.
- [x] ID 04 - Implementa layout responsivo com Framework CSS (Bootstrap).
- [x] ID 05 - Utiliza componentes prontos do Bootstrap (cards, botões, modais etc.).
- [x] ID 06 - Cria layout fluido usando unidades relativas.
- [x] ID 07 - Aplica tipografia responsiva.
- [x] ID 08 - Aplica responsividade de imagens com CSS.

---

### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente

- [ ] ID 11 - Utiliza elementos de seleção em formulários.
- [ ] ID 12 - Implementa validação HTML nativa.
- [ ] ID 13 - Aplica REGEX para validações customizadas.
- [ ] ID 14 - Implementa leitura e escrita no Web Storage.

---

### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web

- [ ] ID 15 - Configura ambiente com Node.js e NPM.
- [ ] ID 16 - Organiza arquivos do projeto de forma modular.
- [ ] ID 17 - Utiliza boas práticas de versionamento no Git/GitHub.
- [x] ID 18 - Mantém um README.md padronizado conforme template da disciplina.
- [ ] ID 19 - Configura linters e formatadores.

---

### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript

- [x] ID 20 - Utiliza jQuery para manipulação do DOM e interatividade.
- [ ] ID 21 - Integra plugin jQuery relevante.

---

### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas

- [x] ID 22 - Realiza requisições assíncronas para API fake (JSON Server).
- [x] ID 23 - Exibe dados na página a partir da API fake.
- [x] ID 24 - Realiza requisições assíncronas para API pública real (ViaCEP), exibindo dados e tratando erros.
