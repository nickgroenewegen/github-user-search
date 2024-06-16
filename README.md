# GitHub user search exercise
A exercise project using [Next.js](https://nextjs.org/) and React Server Components.

**Stack**
- Typescript
- Nextjs
- React
- ESLint
- ESLint Stylistic
- Stylelint
- Husky
- Jest
- React Testing Library
- Cypress

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
[Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Cypress](https://docs.cypress.io/guides/overview/why-cypress) are used for testing. The project contains only a few test.

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