# Projeto

Projeto desenvolvido em React + TypeScript, tem o objetivo de mostrar dados de uma apli pública em uma tabela e ao selecionar e clicar em uma linha específica o usuário será direcionado para uma segunda página de detalhes.

Obs: A princípio o projeto se chamava Projeto-Criptomoedas pois tinha como objetivo consumir uma api de bitcoins, porém a mesma não possui recurso de paginacao disponível em sua versao grátis. Dessa forma, foi substituida pela api rickandmortyapi


## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [Axios](https://www.npmjs.com/package/axios#installing)
- [Docker](https://www.docker.com/)
- [TailwindCss](https://tailwindcss.com/)
- [heroicons](https://heroicons.com/)

## Estrutura de Pastas — Clean Architecture
Este projeto segue o padrão Clean Architecture adaptado para aplicações React, promovendo separação de responsabilidades, testabilidade e escalabilidade.

- domain: Onde ficam as regras de negócio puras, entidades e contratos de casos de uso.

- application: Onde ficam os serviços de aplicação e DTOs. A Application depende do domain.

- infrastructure: Implementações concretas, como chamadas HTTP(foi utilizado axios), repositórios, etc. Implementa interfaces de domain e application.

- representation: Tudo relacionado à camada de apresentação (React), incluindo componentes, contextos, páginas e rotas. Consome serviços da application e exibe dados ao usuário.

#### 🚀 Vantagens do Clean Architecture
 - Baixo acoplamento entre camadas.
- Alta testabilidade (camadas de domínio e aplicação podem ser testadas isoladamente).
- Facilidade de manutenção e evolução do projeto.
- Escalabilidade para projetos grandes.

## API Pública utilizada

| API               | Descrição                              | Auth     | HTTPS | CORS     |
|-------------------|----------------------------------------|----------|-------|----------|
| [rickandmortyapi](https://rickandmortyapi.com/documentation/) |Dados sobre episodios, personagens, etc | NÃO  | SIM   | NAO     |


## Testes
O projeto conta com uma suíte de testes unitários automatizados desenvolvidos com Jest e React Testing Library, garantindo a confiabilidade das principais funcionalidades da aplicação.

#### Tecnologias de Teste
- Jest — Framework de testes para JavaScript/TypeScript.
- React Testing Library — Utilizada para testes focados no comportamento do usuário e acessibilidade.



## Abrindo o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/milenavms/Personagens-Rick-And-Morty.git
   ```
2. Acesse a pasta do projeto no VSCode:
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como rodar o projeto
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Como rodar o projeto com o Docker
1. Iniciar o build EM DEV (Porta padrao do vite: http://localhost:5173):
   ```bash
   docker-compose up --build
   ```
2. Iniciar o build EM PRD:
   ```bash
   docker build -t app-prod .
   ```
   ```bash
   docker run -p 80:80 app-prod
   ```

### Como rodar os testes


## 📸 Imagens da Tela

### 🏠 Tela Inicial


### 📄 Tela de Detalhes 


### 📱 Responsividade



> A aplicação é responsiva e funciona bem em dispositivos móveis.


Acesse [http://localhost:5173](http://localhost:5173) para visualizar o projeto rodando.
Acesse [http://localhost:80](http://localhost:5173) para visualizar o projeto rodando com o Docker.

Desenvolvido por [Milena](https://github.com/milenavms)