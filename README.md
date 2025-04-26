# Connection 2.0.0

**Connection** é um aplicativo desenvolvido com Electron para facilitar a criação de listas de tarefas e a utilização de um timer Pomodoro. O objetivo é proporcionar um ambiente simples e funcional para melhorar a produtividade, combinando tarefas e tempo de foco de forma intuitiva e prática.

## Funcionalidades

- **Pomodoro Timer**: A aplicação inclui um timer baseado na técnica Pomodoro, que alterna entre períodos de trabalho e descanso.
- **Lista de Tarefas**: Organize suas tarefas diárias de forma simples e eficiente.
- **Interface Intuitiva**: Design fácil de usar, com foco em simplicidade e produtividade.

## Tecnologias Utilizadas

- **Electron**: Para a criação de um aplicativo desktop multiplataforma.
- **HTML/CSS/JavaScript**: Para o desenvolvimento da interface do usuário e funcionalidades.
- **Node.js**: Para o backend e execução de scripts do Electron.

## Como Rodar o Projeto Localmente

### Requisitos

Antes de rodar o projeto, é necessário ter o [Node.js](https://nodejs.org/) instalado.

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/ohthias/Connection.git
   cd connection-app
   ```
2. Instale as dependências:

  ```bash
  npm install
  ```
3. Para rodar o aplicativo localmente:
  ```Bash
  npm start
  ```

### Para compilar o aplicativo como executável:
1. Certifique-se de que o Electron Builder esteja instalado:
  ```Bash
  npm install electron-builder --save-dev
  ```
2. Compile o aplicativo para o sistema desejado:

- Para Windows:
  ```Bash
  npm run dist
  ```
- Para macOS:
  ```Bash
  npm run dist --mac
  ```
3. O executável será gerado na pasta dist/.

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
