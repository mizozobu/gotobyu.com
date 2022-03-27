# gotobyu.com

![CI](https://github.com/mizozobu/gotobyu.com/workflows/CI/badge.svg)
[![renovate](https://img.shields.io/badge/renovate-enabled-%231A1F6C?logo=renovatebot)](https://app.renovatebot.com/dashboard#github/mizozobu/gotobyu.com)

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
- [Algolia](https://www.algolia.com)

## Getting Started

```sh
# clone repo
git clone git@github.com:mizozobu/gotobyu.com.git
cd gotobyu.com

# install dependencies
yarn

# start dev server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storybook

```sh
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the storybook.

### Lint

```sh
# check
yarn lint

# auto fix
yarn lint:fix
```

### Test

```sh
# debug & watch mode
yarn ut:debug --watch
```

### Index

```sh
# index pages in algolia
yarn algolia
```

## CI/CD

- [Github Actions](https://github.com/features/actions) runs CI
- [Vercel](https://vercel.com) deploys each branch
- [Renovate Bot](https://www.whitesourcesoftware.com/free-developer-tools/renovate/) updates dependencies
