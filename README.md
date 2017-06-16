![Icons made by Freepik (http://www.freepik.com) from Flaticon (www.flaticon.com) is licensed by Creative Commons BY 3.0 - CC 3.0 BY (http://creativecommons.org/licenses/by/3.0/).](https://avatars3.githubusercontent.com/u/29361579?v=3&s=200)

# Suas Vacinas

App de SuasVacinas.com.br

---

# Instruções/Histórico

Ambiente inicial (outros podem funcionar, apenas este foi o que usamos inicialmente):

- **Node v8.1.0**
  - Para instalar/atualizar, vá a https://nodejs.org/
- **NPM 5.0.3**
  - A mais atual no instante em que isto foi escrito - `npm i -g npm` para atualizar o seu.

#### Comandos:

```shell
npm install -g cordova ionic
ionic start suasvacinas tabs
```

```shell
$ git clone https://github.com/unb-ppca-construcao-de-software-2017/suasvacinas.git
$ cd suasvacinas
$ npm install
$ npm start
```



#### Install firebase-tools:
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```


Comandos
--------

|Script|Descrição|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Lint, test, and build the application to `./target`|
|`npm run lint`|Lint `.ts` and `.js` files|
|`npm run lint:js`|Lint `.js` files with eslint|
|`npm run lint:ts`|Lint `.ts` files with tslint|
|`npm run server`|Start express server @ `localhost:3001` to serve built artifacts from `./target` (must run `npm run build` first)|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
