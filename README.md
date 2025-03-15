# Next.js + Sanity Portfolio app

This is a portfolio project to display skills, projects, and job experience. A Next.js content-driven website backed by Sanity & designed using HeroIU(previously NextUI).

## Getting started

Clone the project

```bash
  git clone git@github.com:zacharytaylor-FS/nextjs-sanity-portfolio.git
```

Go to the project directory

```bash
  cd nextjs-sanity-portfolio
```

Install dependencies

```bash
  npm install
```

Create .env file and add environment variables

```bash
touch .env
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`NEXT_PUBLIC_SANITY_PROJECT_ID`

`NEXT_PUBLIC_SANITY_DATASET`

`SANITY_API_READ_TOKEN`

## Tech Stack

**Client:** Next.js, TailwindCSS, HeroUI, dotenv

**CMS:** Sanity

## Features

- Light/dark mode toggle
- Responsive Layout
- Fullscreen mode

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
