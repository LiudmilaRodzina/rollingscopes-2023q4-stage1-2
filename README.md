### Migration from JavaScript to TypeScript

Original App: [news-JS](https://github.com/rolling-scopes-school/news-JS/)

#### Project Description

This is a web application project that retrieves and displays news from various sources using the News API. The project was originally written in JavaScript and has been migrated to TypeScript. This migration involves strict typing and the use of modern TypeScript features to enhance code quality and maintainability.

#### Key Features Implemented

- **TypeScript Integration**:
  - Converted JavaScript code to TypeScript.
  - Ensured strict type checking for all variables, functions, and methods.
  - Utilized Enums, Interfaces, Types, Generics and Union Types.
  - Applied access modifiers (private, public) for better encapsulation.
- **Webpack Configuration**: Customized Webpack setup to work seamlessly with TypeScript.
- **ESLint Setup**:
  - Configured ESLint to work with TypeScript.
  - Enabled the `no-explicit-any` rule to enforce strict typing.

#### How to Run the Application

- Clone the project branch:

  ```bash
  git clone --branch news-api --single-branch https://github.com/LiudmilaRodzina/rollingscopes-2023q4-stage1-2.git
  ```

- Navigate to the project directory:

  ```bash
  cd rollingscopes-2023q4-stage1-2/news-api
  ```

- Rename `.env.example` to `.env` and set variables with your data

- Install dependencies:

```bash
 npm install
```

- Run the app:

```bash
 npm run start
```

#### Technologies Used

- [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=plastic&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
- [![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=plastic&logo=webpack&logoColor=white)](https://webpack.js.org/)
- [![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=plastic&logo=eslint&logoColor=white)](https://eslint.org/docs/latest/)
- [![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=plastic&logo=prettier&logoColor=white)](https://prettier.io/docs/en/index.html)
