# Next.js + Sanity starter with Turborepo 🚀

Starter to get going with Next.js and Sanity.

## Features
- Field Level Translation
- Pages Singletons

## What's inside? 👀

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages 📦

- `cms`: a [Sanity v3](https://www.sanity.io/) app
- `web`: a [Next.js](https://nextjs.org/) app (using `pages`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This starter has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


## Sanity Schemas
### Pages

The [cms app](./apps/cms/) has a desk structure so that each schema within of [schemas/pages](apps/cms/schemas/pages) be a singleton (single content type). the id of each document is the name of the schema.

## Localization

This starter has a config for manage the localization within each `app`

### Sanity

The sanity app has a field level translations of which are available

- `localeString`: `object` with `string` fields for each locale
- `localeText`: `object` with `text` fields for each locale

these must be used in as types in fields of schemas that require multilanguage

also are filtered using [Language Filter](https://www.sanity.io/plugins/language-filter)

the languages available for each `field` are configured within [i18n/lang](apps/cms/schemas/i18n/lang)

### Queries

The recommended way for run the queries is by sending a `lang` variable for extract each translation. example:
```groq
*[_type == 'post'] {
  ...,
  'title': title[$lang]
}
```

## Turbo Setup ✨

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

### Remote Caching  💽
Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

### Next.js + Sanity
- [Next.js](https://nextjs.org/docs)
- [Sanity](https://sanity.io/docs)

### Turborepo
Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
