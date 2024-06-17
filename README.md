# GitHub user search exercise
[![Netlify Status](https://api.netlify.com/api/v1/badges/a7b5cbe0-d4c7-43d7-be5b-5a2abe433d8f/deploy-status)](https://app.netlify.com/sites/harmonious-cobbler-f2ee26/deploys)

A exercise project using the [GitHub search API](https://docs.github.com/en/rest/search/search), [Next.js](https://nextjs.org/) and React Server Components.

[Live demo](https://harmonious-cobbler-f2ee26.netlify.app/)

**Stack**
- Typescript
- Nextjs
- React
- Netlify
- ESLint
- ESLint Stylistic
- Stylelint
- Husky
- Jest
- React Testing Library
- Cypress

## Authentication
Note that authentication is not necessary in order to search GitHub for users however adding a authentication token has it's benefits e.g. higher rate limit, access to more data.

In order to add a authentication token first generate a personal access token via [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). Then add a `.env` file in the root of the project and add the generated token:

```
GITHUB_AUTH_TOKEN=your token here
```

## Getting started
This project requires Node.js 18.17 or later.

Clone the repository:
```sh
$ git clone git@github.com:nickgroenewegen/github-user-search.git
```
To start a local development server:
```sh
$ cd github-user-search
$ npm install
$ npm run dev
```
To run a production build:
```sh
$ npm run build
```

## Linting
The project uses [ESLint](https://eslint.org/) for linting, [ESLint Stylistic](https://eslint.style/) for code formating and [Stylelint](https://stylelint.io/) for CSS inting.

**Why Stylistic instead of prettier?**
I wanted to try out Stylistic and this was a good opportunity. If you have any problems with code formatting in VS Code then please look [here](https://eslint.style/guide/faq#how-to-auto-format-on-save).

To run ESLint:
```sh
$ npm run lint
```

To run Stylelint:
```sh
$ npm run lint:css
```

## Testing
[Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Cypress](https://docs.cypress.io/guides/overview/why-cypress) are used for testing. The project contains a few test for demonstration purpose.

To run jest for unit and component tests:
```sh
$ npm run test
```

To run Cypress for e2e test:
```sh
$ npm run e2e
```

To run Cypress in interactive mode:
```sh
$ npm run e2e:interactive
```

## Husky
[Husky](https://typicode.github.io/husky/) runs before any git commit as a safeguard. It runs the following commands:
```sh
npm run lint
npm run lint:css
npm run test
```