# iw-complaint-manager

This repository will be the home of Impactworkers Complaint Manager 2.0. The wiki for this repository can be found [here](https://impactworkers.github.io/iw-complaint-manager/).

## Contributors

- Shakeel Bhamani
- Justin Anthony
- Mariah Sager
- Victoria Wong
- Fara Hughes
- Paul Thompson
- Charles Woods
- Yooboo Park
- Julio Espinola
- Raina Huerta
- Claire Holt
- Aerin Parker
- Elleni Tessema

# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development

Run the Vite dev server:

```sh
yarn run dev
```

## Deployment

First, build your app for production:

```sh
yarn run build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `yarn run build`

- `build/server`
- `build/client`

<<<<<<< Updated upstream
### Prettier and Lint 

This project supports `Prettier` and `ESLint` packages. When you run `yarn install` it will automatically install all necesaary dev dependency packages for you. If you have not installed in your Vscode ESLint and Prettier extensions, it will suggest you to install, and please do so.. Without an extension these formatting packages won't work. 

Following Eslint command to lint your code and fix linting issues:

- `yarn lint`
- `yarn lint:fix`

Following Prettier command to run to format your code : (Currently disabled)

- `yarn format`  


### To run cypress tests (End to End testing)

### - Headless

```sh
yarn run cy:open
```

### - GUI

```sh
yarn run cy:run
```

### To run Vitest

```sh
yarn test
```

