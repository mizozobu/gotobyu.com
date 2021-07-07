# BYUMS-Tokyo

![CI](https://github.com/mizozobu/byums-tokyo/workflows/CI/badge.svg)
[![renovate](https://img.shields.io/badge/renovate-enabled-%231A1F6C?logo=renovatebot)](https://app.renovatebot.com/dashboard#github/mizozobu/byums-tokyo)

This is a website for BYU Management Society Tokyo Chapter.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)

## Getting Started

```sh
# clone repo
git clone git@github.com:mizozobu/byums-tokyo.git
cd byums-tokyo

# install dependencies
yarn

# start dev server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storhbook

```sh
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the storybook.

### Lint

```sh
# check
yarn lint

# format
yarn format
```

## CI/CD

- [Github Actions](https://github.com/features/actions) automatically check lint and build
- [Vercel](https://vercel.com) automatically deploys each branch
- [Renovate Bot](https://www.whitesourcesoftware.com/free-developer-tools/renovate/) automatically update dependencies
