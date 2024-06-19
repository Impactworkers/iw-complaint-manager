# iw-complaint-manager

This repository will be the home of Impactworkers Complaint Manager 2.0. The wiki for this repository can be found [here](https://impactworkers.github.io/iw-complaint-manager/).

## Contributors

-   Shakeel Bhamani
-   Justin Anthony
-   Mariah Sager
-   Victoria Wong
-   Fara Hughes
-   Paul Thompson
-   Charles Woods
-   Yooboo Park
-   Julio Espinola
-   Raina Huerta
-   Claire Holt
-   Aerin Parker
-   Elleni Tessema

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn run dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Connect to DBeaver

-   Make sure to change the database name to iw_complaint_manager
-   Enter password("password")

Now you'll need to pick a host to deploy it to.

### Prettier and Lint

###### This project supports `Prettier` and `ESLint` packages. When you run `yarn install` it will automatically install all necesaary dev dependency packages for you. If you have not installed in your Vscode ESLint and Prettier extensions, it will suggest you to install, and please do so.. Without an extension these formatting packages won't work.

#### Following Eslint command to lint your code and fix linting issues:

-   `yarn lint`
-   `yarn lint:fix`

##### Following Prettier command to run to format your code : (Currently disabled)

-   `yarn format`

## To run cypress tests (End to End testing)

### - Headless

```sh
yarn run cy:open
```

### To run Jest

```sh
yarn test
```

### Set mkcert locally

#### Install mkcert. On a Mac, you can use Homebrew:

```sh
brew install mkcert
```

##### Set up the local Certificate Authority:

```sh
mkcert -install
```

##### Navigate to your project directory and create the local SSL certificate:

```sh
yarn run dev
```

###### This will create two files in a **certificates** directory: `localhost.pem`, which is your local certificate, and `localhost-key.pem`, which is your private key.

### Storybook

Storybook is a development environment tool that is used as a playground for UI components. It allows us, the developers, to create and test components in isolation.

To run Storybook CLI locally:

```sh
yarn run storybook
```

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)
